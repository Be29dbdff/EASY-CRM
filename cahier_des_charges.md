# Cahier des charges

**Projet : Comparateur de Mutuelle Régionale**

---

## 1. Contexte et objectifs

* Offrir aux habitants d’une région un outil digital simple pour comparer les mutuelles santé disponibles localement.
* Mettre en avant les mutuelles régionales, leurs garanties spécifiques et leurs tarifs adaptés.
* Faciliter la souscription en ligne ou la mise en relation avec un conseiller.

---

## 2. Public cible

* Habitants de la région (ex. Provence, Île-de-France, PACA, etc.).
* Personnes cherchant une couverture santé adaptée à leur profil : étudiants, familles, seniors, indépendants.

---

## 3. Fonctionnalités principales

### 3.1. Front-office (utilisateur)

* Formulaire de simulation (âge, situation familiale, profession, besoins santé).
* Affichage des résultats sous forme de tableau comparatif :

  * Nom de la mutuelle.
  * Garanties principales (hospitalisation, dentaire, optique, soins courants).
  * Prix mensuel/annuel.
  * Niveau de remboursement (% BRSS).
  * Points forts (prévention, téléconsultation, services inclus).
* Filtres : par prix, par niveau de couverture, par type de besoin.
* Possibilité de demander un devis PDF ou d’être rappelé.

### 3.2. Back-office (administration)

* Base de données des mutuelles régionales avec leurs offres.
* Interface de mise à jour des grilles tarifaires et garanties.
* Suivi des demandes de contact et génération de leads.

---

## 4. Architecture technique

* **Technologies web** : React/Angular ou équivalent pour l’interface utilisateur.
* **Base de données** : MySQL/PostgreSQL ou Firestore.
* **API** : connexion aux mutuelles partenaires via API (si disponible) ou import CSV/Excel.
* **Sécurité** : RGPD, SSL, gestion des données personnelles.

---

## 5. Design et ergonomie

* Identité visuelle adaptée à la région (ex. couleurs locales, symboles régionaux).
* UX simplifiée : 3 étapes max pour obtenir une simulation.
* Version responsive (mobile + desktop).
* Accessibilité (contrastes, textes lisibles, navigation simplifiée).

---

## 6. Livrables attendus

* Prototype Figma ou maquette graphique.
* Site web fonctionnel hébergé (ex. Netlify, Vercel ou serveur dédié).
* Base de données prête avec mutuelles régionales renseignées.
* Manuel d’utilisation (back-office).

---

## 7. Planning prévisionnel

1. **Semaine 1-2** : Maquettage (UX/UI).
2. **Semaine 3-6** : Développement front & back.
3. **Semaine 7** : Intégration des données mutuelles.
4. **Semaine 8** : Tests et corrections.
5. **Semaine 9** : Mise en ligne + formation admin.

---

## 8. Budget estimatif

* Développement technique : XXXX €
* Hébergement + nom de domaine : XXXX €/an
* Maintenance + mise à jour : XXXX €/an
* Option marketing (référencement local, campagnes Google Ads) : XXXX €

---

## 9. Contraintes

* Respect du RGPD (gestion des données sensibles).
* Interface claire et pédagogique (grand public).
* Outil évolutif (ajout futur de nouvelles régions et mutuelles partenaires).

---

# 🎨 Direction Artistique, UX/UI & Atmosphère

## 1. Direction Artistique (DA)

L’identité visuelle doit refléter à la fois :

* **La proximité régionale** : rappeler des éléments identitaires de la région (ex. couleur dominante inspirée du drapeau régional, paysages, patrimoine).
* **La confiance et la transparence** : privilégier des couleurs rassurantes et neutres (bleu, vert, blanc).
* **La modernité** : design épuré, lisible, sans surcharge d’éléments visuels.

### Palette de couleurs (exemple à adapter selon la région ciblée)

* **Couleur principale** : Bleu profond (fiabilité, confiance).
* **Couleur secondaire** : Vert turquoise (santé, vitalité).
* **Accent** : Jaune/orangé doux (dynamisme régional).
* **Fonds** : Blanc cassé ou gris très clair pour garder de la lisibilité.

### Typographies

* **Titres** : Sans-serif moderne (ex. Montserrat, Lato).
* **Texte** : Police claire et lisible (Roboto, Open Sans).
* **Mise en avant** : Utilisation de **gras**, de couleurs d’accent ou d’encadrés pour les prix et garanties clés.

### Iconographie et illustration

* Utiliser un set d’icônes cohérent, aux lignes simples, illustrant les garanties (hospitalisation, dentaire, optique, soins courants).
* Prévoir des pictogrammes pour les fonctionnalités additionnelles (téléconsultation, prévention, assistance).
* Privilégier des visuels réalistes ou illustrés représentant des habitants de la région (familles, seniors, indépendants).

---

## 2. Expérience Utilisateur (UX)

L’objectif est de rendre la comparaison **rapide, fluide et compréhensible** en moins de 2 minutes.

### Parcours utilisateur

1. **Page d’accueil** : phrase d’accroche claire ("Comparez les mutuelles de votre région en 2 minutes") + bouton CTA “Commencer”.
2. **Formulaire simplifié** :

   * Étape 1 : Profil (âge, situation familiale, profession).
   * Étape 2 : Besoins (hospitalisation, optique, dentaire, prévoyance, services additionnels).
   * Étape 3 : Résultats.
3. **Page résultats** : tableau comparatif clair avec :

   * Logo de chaque mutuelle.
   * Garanties clés (icônes santé, dentaire, optique, prévention).
   * Prix en valeur principale (mensuel/annuel).
   * Niveau de remboursement (% BRSS) mis en avant.
   * Bouton CTA “Demander un devis” ou “Être rappelé”.
4. **Option devis personnalisé** : envoi par email + stockage en base de données.
5. **Page confirmation** : récapitulatif des choix et proposition d’étapes suivantes (prise de rendez-vous, téléchargement du devis, partage).

### Bonnes pratiques UX

* **Progress bar** indiquant les étapes du formulaire.
* **Filtres interactifs** : curseur de prix, cases à cocher pour les besoins spécifiques, tri par ordre de pertinence.
* **Icônes et pictogrammes** pour les garanties → compréhension immédiate sans lecture approfondie.
* **Résultats triés par pertinence** (prix le plus bas, meilleure couverture hospitalisation, meilleure note utilisateur).
* **Messages d’aide contextuelle** (tooltips) pour expliquer les termes techniques (BRSS, renforts optiques, etc.).
* **Comparatif détaillé** : possibilité d’ouvrir un panneau pour comparer 2 ou 3 mutuelles en parallèle.

---

## 3. Atmosphère Visuelle

Le comparateur doit donner une **sensation de clarté et de confiance**.

### Inspirations

* **Ambiance** : claire, lumineuse, aérée, avec des dégradés subtils.
* **Images** : visuels humains (familles, seniors, indépendants souriants) pour humaniser l’expérience.
* **Illustrations** : silhouettes, pictogrammes médicaux (cœur, lunettes, dents, hôpital).
* **Mise en page** : espaces blancs généreux pour éviter la surcharge.

### Micro-interactions

* Animations douces au passage de la souris (hover sur boutons, cartes de mutuelles).
* Transition fluide entre les étapes du formulaire (slide, fade-in/out).
* Highlight des garanties fortes (par exemple badge “Meilleur rapport qualité/prix”, “Couverture hospitalisation renforcée”).
* Feedback visuel immédiat lors de l’ajout d’une mutuelle au comparatif détaillé.

### Cohérence globale

* Harmoniser les styles des boutons, champs de formulaire et tableaux pour garantir une lecture intuitive.
* Utiliser des blocs d’information clairs avec titres, sous-titres, icônes et CTA cohérents.
* Prévoir un mode sombre ou une déclinaison nocturne si le projet cible des utilisateurs réguliers.

---

## 4. Accessibilité

* Contraste suffisant (textes foncés sur fond clair, boutons contrastés).
* Icônes + texte pour ne pas se limiter aux couleurs.
* Navigation clavier + responsive mobile (60% des utilisateurs compareront depuis smartphone).
* Compatibilité avec les lecteurs d’écran : balises ARIA, alternative textuelle pour les images.
* Taille de police minimale de 16px pour le texte courant, avec possibilité d’augmentation.
* Validation des formulaires accessible (messages d’erreur textuels et visuels, focus clair sur les champs).

---

## 5. Livrables UX/UI spécifiques

* Moodboard et styleguide (palette, typographies, iconographie, composants).
* Wireframes basse fidélité pour le parcours principal (desktop et mobile).
* Maquettes haute fidélité (Figma/Sketch) des écrans clés : accueil, formulaire, résultats, comparatif détaillé, page devis.
* Prototype interactif pour tester le parcours utilisateur et valider les interactions.
* Documentation des composants UI pour intégration (design system ou bibliothèque de composants).

