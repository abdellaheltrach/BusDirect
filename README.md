# BusDirect - Gestion de Réservation de Sièges

Bienvenue sur le dépôt du projet **BusDirect**. Cette application web permet de digitaliser et d'optimiser la gestion des réservations de sièges pour la ligne interurbaine Safi → Marrakech. L'agent de réservation peut visualiser le plan de la cabine en temps réel, gérer les attributions et suivre les recettes.

## Démo en ligne & Gestion de projet

- **Voir le site en ligne :** [[Lien Vercel](https://bussdirect-6jf4.vercel.app)]
- **Voir la planification :** [[Lien vers le tableau de suivi](https://trello.com/b/WsYwcFhl/busdirect)]

## Sommaire

- À propos du projet
- Fonctionnalités & Points forts
- Technologies utilisées
- Structure des fichiers
- Respect des normes, Accessibilité & SEO
- Auteur

---

## À propos du projet

L'application offre une interface interactive et responsive pour gérer les 20 places du bus. Elle permet d'ajouter, modifier et supprimer des réservations en toute simplicité, avec une persistance des données via le `localStorage`.

---

## Fonctionnalités & Points forts

- **Gestion interactive des places :** 
  - Réservation de sièges (sélection manuelle ou attribution automatique du premier siège libre).
  - Modification d'une réservation (changement du nom du passager ou du siège).
  - Suppression d'une réservation pour libérer instantanément le siège.
- **Suivi en temps réel :** Compteur de places disponibles et calcul automatique de la recette totale (80 DH par place).
- **Persistance :** Sauvegarde des données avec le `localStorage` pour conserver l'état après actualisation.
- **Pages multiples :** Page principale de gestion et page dédiée (`tikets.html`) pour consulter l'ensemble des billets réservés.
- **Responsive Design :** S'adapte parfaitement aux mobiles, tablettes et ordinateurs.

---

## Structure des fichiers

```text
busdirect/
│
├── index.html        # Page principale (Plan de la cabine et formulaires de gestion)
├── tikets.html       # Page de consultation des tickets réservés
├── style.css         # Feuille de style personnalisée
├── script.js         # Logique principale de gestion de la cabine et du DOM (index)
├── tikets.js         # Logique d'affichage de la page des tickets
├── logo.png          # Logo officiel de BusDirect
└── README.md         # Documentation du projet
