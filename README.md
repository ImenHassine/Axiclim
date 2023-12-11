# Axiclim
This is a Node.js synchronization server project built on Express. It is dedicated to achieving seamless data consistency and interaction between two distinct applications at scheduled intervals. 
This project has Docker support as well as Jest, ESLint, and a local development server. Everything is in Typescript.

## Prerequisite
- Node 16
## Nice to have
- [NVM]
- [VS Code](https://code.visualstudio.com/)
- [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
## Getting started
- Clone the repository
```
git clone git@gitlab.trustdev.info:imeneha/axiclim-sync.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Run local development server
```
npm run dev
```
- To use ESLint
```
npm run lint
```
- To run tests
```
npm test
```
## ENV variables
The project uses [dotenv](https://github.com/motdotla/dotenv) to parse environment variables. To add environment variables to your project, simply, create a `.env` file in the root folder of the project. You can then reference it using `process.env.VAR_NAME`. For example, to change Node.js mode, simply add `NODE_ENV=production` or `NODE_ENV=development` to your `.env` file to change Node.js mode to production or development accordingly.

Remeber: it's not a good idea to push .env files to your repo!
## Logging
This project uses [Winston](https://github.com/winstonjs/winston) and [Morgan](https://github.com/expressjs/morgan) for logging. Winston is exported as a logger and can be used to log custom messages on demand. Also, it can be extended to push logs to files, external database, or any logging service.

Morgan is used as an http logger middleware for Express and the logs are routed through Winston, so everything is nicely bundled in one log stream.

All of these logs are written to console during development. Feel free to add production-specific loggers as and when needed.
## Project structure
```
axiclim-sync
├─ .editorconfig
├─ .eslintrc.json
├─ .gitignore
├─ .nvmrc
├─ CODE_OF_CONDUCT.md
├─ CONTRIBUTING.md
├─ Dockerfile
├─ LICENSE
├─ README.md
├─ error.log
├─ jest.config.ts
├─ package-lock.json
├─ package.json
├─ src
│  ├─ common
│  │  ├─ http-exception.ts
│  │  └─ logger.ts
│  ├─ controllers
│  │  └─ articles.controller.ts
│  ├─ index.ts
│  ├─ middleware
│  │  ├─ error.middleware.ts
│  │  ├─ http-logger.middleware.ts
│  │  ├─ index.ts
│  │  └─ not-found.middleware.ts
│  ├─ routers
│  │  └─ articles.router.ts
│  └─ services
│     └─ articles.service.ts
├─ tests
│  └─ articles.test.ts
├─ tsconfig.json
└─ types
   ├─ articles.d.ts
   └─ service-response.d.ts

```