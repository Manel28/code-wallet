#  Code Wallet

**Code Wallet** est une application desktop en cours de développement, réalisée avec **React** et **Electron**. Elle permettra à terme de sauvegarder, organiser et réutiliser des fragments de code.

##  Avancement du projet

### Étapes déjà réalisées :
- Initialisation du projet avec [Vite](https://vitejs.dev/) et [React](https://reactjs.org/)
- Intégration d'[Electron](https://www.electronjs.org/) pour créer l'application desktop
- Lancement avec double terminal (`npm run dev` + `npm run electron`)
- Création du dépôt Git et premier commit
- Upload du projet sur GitHub

### Prochaines étapes :
- Ajouter le routeur et structurer les pages
- Créer les composants de base (Header, FragmentCard...)
- Mettre en place le style (TailwindCSS ou CSS modules)
- Gérer le stockage local des fragments (lowdb ou node-json-db)
- Ajouter les fonctionnalités (CRUD, modales, tags...)

##  Structure actuelle

```
vite-project/
├── src/
│   └── App.jsx
├── electron-main.cjs     # Fichier d'entrée Electron
├── package.json
├── .gitignore
└── README.md
```

##  Lancer l’application

**Terminal 1 :** pour lancer Vite (React)

```bash
npm run dev
```

**Terminal 2 :** pour lancer Electron

```bash
npm run electron
```

---

 Projet réalisé dans le cadre d’un projet pédagogique — École Multimédia 2025