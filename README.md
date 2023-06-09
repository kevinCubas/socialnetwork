# Codeleap Network

Codeleap Network is a social media web application built with React and Redux. The application allows users to login, logout, browse posts from other users, create, edit, and delete their own posts. The application uses RTK query to retrieve data from the backend API and Redux to store data in the client.

## Dependencies
Here are the main dependencies used in the project:

- [vite](https://vitejs.dev/): Build tool and development server
- [Typescript](https://www.typescriptlang.org/pt/): Superset of JavaScript that adds static typing and other features.
- [react](https://react.dev/): A JavaScript library for building user interfaces - **react-dom**
- [react-redux](https://react-redux.js.org/): A package that provides bindings between Redux and React
- [@reduxjs/toolkit](https://redux-toolkit.js.org/): A Redux library that provides a set of utilities for simplifying common Redux patterns
- [redux-persist](https://github.com/rt2zz/redux-persist): A package for persisting Redux state across sessions
- [react-router-dom](https://reactrouter.com/en/main): A package that provides routing functionality for React applications
- [framer-motion](https://www.framer.com/motion/): A library for creating fluid animations in React
- [react-icons](https://react-icons.github.io/react-icons/): A library of icons for React

## Features

- [x] Login;
- [x] Logout;
- [x] Get the list of posts;
- [x] Create a post;
- [x] Update (edit) your own post;
- [x] Delete your own post;
- [x] Infinite scroll (observer api);
- [x] Toast notifications based on user interactions (success, error, and inform);
- [x] get time elapsed since a post was published;
- [x] Page routes;

## Installation:

### Requirements:
- [Node](https://nodejs.org/en) > 16 || Latest version
- [git](https://git-scm.com/)

### Clone the repository and Setup.

```cl
  git clone  https://github.com/kevinCubas/socialnetwork.git
```
- Install dependencies using npm:
```cl
  npm install
```
Run the application locally:

```cl
  npm run dev
```

- Open the application in a web browser.
- Start using the codeleap network to browse, create, edit, and delete posts.

## Folder structure

```markdown
codeleap-network/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── router/
│   ├── types/
│   ├── util/
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslint.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

- **public/**: This folder contains the public assets for the application, such as the favicon.

- **src/components/**: This folder contains all the React components used in the application, such as buttons, forms, and modals.

- **src/pages/**: This folder contains the main pages of the application, such as the login page, the home page, and the post detail page.

- **src/redux/**: This folder contains the Redux-related files of the application. Inside this folder, there is a **features/** folder with all the Redux slices that define the different parts of the state, as well as an **api/** folder that contains the base URL for the RTK Query fetch function and other API-related configurations. Additionally, this folder contains the Redux store configuration file.

- **src/router/**: This folder contains the React Router-related files of the application, such as the routes definition and the protected route higher-order component.

- **src/types/**: This folder contains TypeScript type definitions used throughout the application, such as interfaces for the API response data.

- **src/util/**: This folder contains utility functions used throughout the application, such as a function to calculate the time elapsed since a post was published, dispactchAction, and etc.

- **src/index.css**: This file contains global CSS styles for the application.

- **src/main.tsx**: This file is the entry point for the application and renders the root React component.

- **src/vite-env.d.ts**: This file contains TypeScript type definitions for the Vite development server environment.

- **.eslint.cjs**: This file contains the configuration for the ESLint linter used in the project.

- **.gitignore**: This file contains the list of files and folders that should be ignored by Git.

- **index.html**: This file is the HTML template for the application and contains the root element for the React app.

- **package-lock.json**: This file is generated by npm and contains the exact version numbers of the dependencies installed.

- **package.json**: This file contains the project metadata, dependencies, and scripts.

- **postcss.config.js**: This file contains the configuration for PostCSS, a CSS preprocessor used in the project.

- **README.md**: This file contains the documentation for the project.

- **tailwind.config.js**: This file contains the configuration for Tailwind CSS, such as theme, keyframes, and etc.

- **tsconfig.json**: This file contains the TypeScript configuration for the project.

- **tsconfig.node.json**: This file contains the TypeScript configuration for the Node.js environment.

- **vite.config.ts**: This file contains the configuration for Vite, the development server and build tool used in the project.

## Contributing
**Use Conventional Commits**

To contribute to this project, please follow these guidelines:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them using Conventional Commits
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## Contributors:

[KevinCubas](https://github.com/kevinCubas)