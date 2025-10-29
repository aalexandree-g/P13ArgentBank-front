# ArgentBank

Bienvenue dans **ArgentBank**, une application web permettant aux utilisateurs de gérer leurs comptes bancaires en toute sécurité : connexion, profil, transactions et suivi des soldes.

Ce projet fait partie du parcours **OpenClassrooms "Développeur d'application JavaScript React"**.

## 💰 Contexte du projet

**ArgentBank** est une banque fictive cherchant à moderniser son interface client.  
L’objectif est de créer une application web sécurisée permettant à l’utilisateur de :

- Se connecter via un système d’authentification par token (JWT)
- Consulter ses informations de profil
- Modifier son prénom et son nom
- Visualiser ses comptes et soldes

## 📦 Installation

### 1. Backend (API)

Le backend est fourni par OpenClassrooms et doit être installé séparément.  
Suivre les instructions sur le repo officiel : [ArgentBank API](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API).

Par défaut, l’API tourne sur **http://localhost:3001**.

---

### 2. Frontend (ce projet)

#### Cloner ce repository :

```bash
git clone https://github.com/aalexandree-g/P13ArgentBank-front.git
cd P13ArgentBank-front
```

#### Installer les dépendances :

```bash
npm install
```

#### Lancer le projet en mode développement :

```bash
npm run dev
```

Le site est disponible sur **http://localhost:5173**.

#### Créer un fichier **`.env`** à la racine du dossier **P13ArgentBank-front**, y coller ceci et enregistrer :

```bash
# .env
VITE_API_URL=http://localhost:3001/api/v1
```

## 📖 Fonctionnalités

| Module                    | Description                                                 |
| ------------------------- | ----------------------------------------------------------- |
| 🔐 **Authentification**   | Connexion via email et mot de passe (JWT)                   |
| 👤 **Profil utilisateur** | Consultation et édition du nom/prénom                       |
| 💳 **Comptes**            | Liste des comptes et soldes disponibles                     |
| 📘 **Documentation API**  | Disponible via Swagger sur `http://localhost:3001/api-docs` |
