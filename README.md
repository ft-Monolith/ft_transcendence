# ft_transcendence

Projet final du tronc commun de l'École 42. Une application web complète autour d'un Pong multijoueur en temps réel, avec authentification, profils, amis, classement et tournois.

## Sommaire

- [Stack technique](#stack-technique)
- [Fonctionnalités](#fonctionnalités)
- [Prérequis](#prérequis)
- [Lancement](#lancement)
- [Commandes Make utiles](#commandes-make-utiles)
- [Structure du projet](#structure-du-projet)
- [Variables d'environnement](#variables-denvironnement)
- [Auteurs](#auteurs)

## Stack technique

**Backend**
- Node.js + TypeScript
- [Fastify](https://fastify.dev/) (HTTP/HTTPS, CORS, cookies, rate limit, multipart)
- [Socket.IO](https://socket.io/) pour le temps réel (jeu, matchmaking, notifications)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) pour la persistance
- [sharp](https://sharp.pixelplumbing.com/) pour le traitement d'avatars
- JWT + cookies httpOnly pour la session
- OAuth2 Google (`@fastify/oauth2`)
- Nodemailer (codes 2FA par email)

**Frontend**
- TypeScript vanilla, architecture SPA
- TailwindCSS
- Socket.IO client

**Infra**
- Docker / Docker Compose (mode complet et mode *light*)
- Nginx pour servir le frontend statique
- Certificats SSL auto-signés générés au build (HTTPS sur tous les ports exposés)

## Fonctionnalités

### Jeu
- **Pong 1v1** en ligne, simulation côté serveur, interpolation côté client
- **Mode 4 joueurs**
- **Bot IA** avec trois niveaux de difficulté (`easy`, `medium`, `hard`)
- **Tournois** avec brackets (demi-finales, finale)
- **Mode spectateur** sur les parties en cours
- **Matchmaking** via WebSocket

### Comptes
- Inscription / connexion par email + mot de passe
- Connexion **Google OAuth2**
- **2FA par email** (code à usage unique)
- Profil utilisateur avec **avatar uploadable** (redimensionnement via sharp)
- **Historique des matchs** et statistiques (victoires / défaites)

### Social
- Liste d'amis et **demandes d'ami** (envoi, acceptation, refus)
- Statut en ligne / hors ligne via WebSocket
- **Classement** global avec système de ranking

### Sécurité
- HTTPS sur frontend et backend
- Rate limiting global Fastify
- Validation et sanitisation des entrées (`src/security.ts`, `services/validation.service.ts`)
- Cookies de session `httpOnly`, secrets jamais exposés au client

## Prérequis

- Docker et Docker Compose
- `make` (optionnel mais recommandé)

> Aucune installation locale de Node n'est nécessaire : tout est conteneurisé.

## Lancement

```bash
git clone https://github.com/ft-Monolith/ft_transcendence.git
cd ft_transcendence

# Créer un .env à la racine (cf. section Variables d'environnement)

make            # build + up en mode détaché
```

Une fois les conteneurs démarrés :

- Frontend : <https://localhost:3000>
- Backend : <https://localhost:8080>

> Le certificat SSL étant auto-signé, le navigateur affichera un avertissement à la première visite — c'est normal en local.

### Mode *light*

Une variante sans l'animation de fond (build plus rapide, recommandée pour itérer) :

```bash
make light
```

## Commandes Make utiles

| Commande | Effet |
|---|---|
| `make` / `make up` | Build et démarre la stack |
| `make down` | Arrête la stack |
| `make logs` | Suit les logs des conteneurs |
| `make rebuild` | Rebuild sans cache |
| `make clean` | Stop + nettoie les `dist/` |
| `make fclean` | `clean` + `docker system prune -af` |
| `make rm-data` | Supprime les volumes (DB + avatars) |
| `make re` | `fclean` puis rebuild + up |
| `make light` / `make down-light` | Variante allégée |
| `make users` / `make matches` / `make friend-requests` | Inspection rapide de la DB |

## Structure du projet

```
.
├── docker-compose.yml          # stack complète
├── docker-compose.light.yml    # variante sans fond animé
├── Makefile
└── srcs/
    ├── backend/
    │   ├── server.ts           # entrypoint Fastify
    │   ├── game/               # moteur Pong (ball, paddle, score, IA)
    │   └── src/
    │       ├── routes/         # auth, users, rooms, matches, tournaments, oauth, avatar
    │       ├── services/       # auth, 2FA, validation
    │       ├── socket/         # handlers WebSocket, room manager
    │       ├── db.ts           # schéma SQLite
    │       └── security.ts
    ├── frontend/
    │   ├── index.html
    │   └── src/
    │       ├── auth/           # signin / signup / 2FA
    │       ├── game/           # rendu Pong, sockets, spectateur
    │       ├── tournament/
    │       ├── friends/
    │       ├── leaderboard/
    │       ├── profile/
    │       ├── settings/
    │       └── pages/spa.ts    # router SPA
    └── docker/
        ├── backend/Dockerfile
        └── frontend/{Dockerfile,nginx.conf}
```

## Variables d'environnement

À placer dans un fichier `.env` à la racine. Exemple :

```env
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
JWT_SECRET=...
EMAIL_USER=...
EMAIL_APP_PASSWORD=...
```

- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` : credentials OAuth2 Google
- `JWT_SECRET` : secret de signature des tokens (générer une chaîne aléatoire ≥ 64 caractères)
- `EMAIL_USER` / `EMAIL_APP_PASSWORD` : compte SMTP utilisé pour envoyer les codes 2FA (mot de passe d'application Gmail)

> ⚠️ Le fichier `.env` ne doit **jamais** être commit (il contient des secrets). Il est déjà listé dans `.gitignore`.

## Auteurs

Projet réalisé par Qordoux, Maeferre, Rasamad dans le cadre du tronc commun de l'École 42.
