# Site Web Nikolaz Voisson - Services Informatiques

Ce site web présente les services de réparation d'ordinateurs et de montage PC proposés par Nikolaz Voisson.

## Technologies Utilisées

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- @tailwindcss/forms

## Prérequis

- Node.js 18.17 ou version supérieure
- npm ou yarn

## Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/votre-username/nikolazvoisson.com.git
cd nikolazvoisson.com
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
```

3. Créez un fichier `.env.local` à la racine du projet et ajoutez les variables d'environnement nécessaires :
```
NEXT_PUBLIC_CONTACT_EMAIL=contact@nikolazvoisson.com
```

## Développement

Pour lancer le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## Production

Pour construire l'application pour la production :

```bash
npm run build
# ou
yarn build
```

Puis pour démarrer le serveur de production :

```bash
npm run start
# ou
yarn start
```

## Structure du Projet

```
nikolazvoisson.com/
├── src/
│   ├── app/
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── about/
│   │   │   └── page.tsx        # Page À propos
│   │   ├── services/
│   │   │   └── page.tsx        # Page Services & Tarifs
│   │   ├── contact/
│   │   │   └── page.tsx        # Page Contact
│   │   ├── layout.tsx          # Layout principal
│   │   └── globals.css         # Styles globaux
│   └── components/             # Composants réutilisables
├── public/                     # Fichiers statiques
├── tailwind.config.js         # Configuration Tailwind
└── package.json               # Dépendances et scripts
```

## Personnalisation

1. Modifiez les informations de contact dans `src/app/contact/page.tsx`
2. Ajustez les tarifs dans `src/app/services/page.tsx`
3. Mettez à jour le contenu de la page À propos dans `src/app/about/page.tsx`
4. Personnalisez les couleurs dans `tailwind.config.js`

## Déploiement

Le site peut être déployé sur Vercel, Netlify ou tout autre hébergeur compatible avec Next.js.

Pour déployer sur Vercel :

1. Créez un compte sur [Vercel](https://vercel.com)
2. Connectez votre dépôt GitHub
3. Importez le projet
4. Configurez les variables d'environnement
5. Déployez ! 