import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// ====== Config ======
const app = express();
app.use(express.json());

const SECRET = 'change_this_secret'; // In production, stocker dans les variables d'environnement

// ====== In-memory DB ======
// Dans un vrai projet, ces tables seraient dans PostgreSQL. Ici on se contente de simples tableaux pour illustrer la logique.
const users = [
  // Passwords hashiés. Admin: adminpass, Courtier: courtierpass, Assistant: assistantpass
  { id: 1, username: 'admin', role: 'admin', password: await bcrypt.hash('adminpass', 10) },
  { id: 2, username: 'courtier', role: 'courtier', password: await bcrypt.hash('courtierpass', 10) },
  { id: 3, username: 'assistant', role: 'assistant', password: await bcrypt.hash('assistantpass', 10) }
];

const clients = []; // {id, name, contracts: [], devis: [], sinistres: []}

// Exemple de contrat pour démontrer le workflow "email 30 jours avant fin".
const contracts = [
  // {id, clientId, type, compagnie, dateDebut, dateFin, statut}
];

// ====== Middleware Auth ======
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

function authorizeRoles(roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) return res.sendStatus(403);
    next();
  };
}

// ====== Routes ======
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.sendStatus(401);
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.sendStatus(401);
  // Token avec payload minimal, valable 15 min
  const token = jwt.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: '15m' });
  res.json({ token });
});

// CRUD Client - seuls Admin et Courtier peuvent modifier
app.get('/clients', authenticateToken, authorizeRoles(['admin', 'courtier', 'assistant']), (req, res) => {
  res.json(clients);
});

app.post('/clients', authenticateToken, authorizeRoles(['admin', 'courtier']), (req, res) => {
  const client = { id: clients.length + 1, ...req.body, contracts: [], devis: [], sinistres: [] };
  clients.push(client);
  res.status(201).json(client);
});

// ====== Workflow d'exemple ======
// En production, on utiliserait un scheduler type cron ou bull. Ici on se contente d'une fonction appelee au demarrage pour illustrer le concept.
function checkContractExpirations() {
  const now = new Date();
  const in30Days = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
  contracts.forEach(c => {
    if (new Date(c.dateFin) <= in30Days && c.statut === 'actif') {
      // ICI on enverrait un email automatique au client.
      console.log(`Reminder: le contrat ${c.id} expire bientôt`);
    }
  });
}

checkContractExpirations();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
