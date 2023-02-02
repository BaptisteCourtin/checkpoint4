le figma, les user stories, et le model de la BDD sont dans les assets du front
Je n'ai pas eu le temps de faire le multer pour l'ajout d'image

On peut se connecter en temps qu'admin avec email : kevindu75@gmail.com && password : admin

## Installation & Utilisation

### Pour commencer un projet
- Sur VSCode, installer les plugins **Prettier - Code formatter** et **ESLint** et les configurer
- Cloner ce dépôt, se rendre à l'intérieur
- Lancer la commande `npm run setup`
- Lancer la commende `npm run migrate`
- créer des fichiers .env (1 dans le front et 1 dans le back) en suivant les .env.sample

### Liste des commandes et signification
- `setup` : Initialisation du frontend et du backend ainsi que des outils
- `migrate` : lance la migration de la database
- `dev` : Démarrage des deux serveurs (frontend + backend) dans un même terminal
- `dev-front` : Démarrage d'un serveur React pour le frontend
- `dev-back` : Démarrage d'un serveur Express pour le backend
- `lint` : Exécute des outils de validation de code (sera exécutée automatiquement à chaque _commit_)
- `fix` : Fixe les erreurs de formatage (à lancer si `lint` ne passe pas)

### Listing des outils utilisé
- _Concurrently_ : Permet d'exécuter plusieurs commandes dans un même terminal
- _Husky_ : Permet d'exécuter des actions en déclenchement de commandes _git_
- _Vite_ : Alternative à _Create-React-App_, embarquant moins de packages pour une expérience plus fluide
- _ESLint_ : Outil de "qualité de code", permet de s'assurer que des règles pré-configurées sont bien respectées
- _Prettier_ : Outil de "qualité de code" également, se concentre plus particulièrement sur le style du code
- _Standard Airbnb_ : L'un des "standards" les plus connus, même s'il n'est pas officiellement lié à ES/JS
- _Nodemon_ : Outil permettant de relancer un serveur à chaque fois qu'un des fichiers est modifié
