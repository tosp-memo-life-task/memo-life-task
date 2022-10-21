# MemoLifeTask

A basic task manager with features like:

- 🏢 Workspaces
- 🗂 Lists
- 📝 Fully customizable tasks
- ✨ and much more!

## Prerequisites

[Node.js](https://nodejs.org/) - It comes bundled with [npm](https://www.npmjs.com/) which is a package manager for node, that comes bundled with the [npx](https://www.npmjs.com/package/npx) package runner that lets you run node packages (such as nx) without installing the package itself.

## Basic setup & serving of the applications

1. Run `npm install` to get every package required by the apps included in the monorepo.

2. Create a `.env` file based on the `.env.example` file.

3. Run `npx nx run-many --target=serve` to serve every app needed to run the **Memo Life Task** project.

### Environtment variables

#### API related

|                   |       **API_PREFIX**        |               **API_PORT**               |    **API_VERSION**     |
| ----------------- | :-------------------------: | :--------------------------------------: | :--------------------: |
| _Default value_   |            'api'            |                   3000                   |          '1'           |
| _Description_     |     Prefix of the API.      | Port on which the backend API is served. | Versioning of the API. |
| _Possible values_ | E.g.: 'api', 'backend', ... |          E.g.: 3000, 3333, ...           | E.g.: '2', 'Beta', ... |

(Critical variables, such as api keys and other sensitive info should be set here...)

## Development server

Run `npx nx run-many --target=serve` to serve dev servers for every app in the project. The apps will automatically reload if you change any of the source files.

## Running unit tests

Run `npx nx run-many --target=test` to run unit tests for every app.

Run `npx nx test <app name>` to run the unit tests for a specific app.

Unit tests are executed via [Jest](https://jestjs.io).

## Running end-to-end tests

Run `npx nx run-many --target=e2e` to run end-to-end tests for every app.

Run `npx nx e2e <app name>` to run the end-to-end tests for a specific app.

Run `npx nx affected --target=e2e` to run the end-to-end tests affected by a change.

End-to-end tests are executed via [Cypress](https://www.cypress.io).

If it's your first time running Cypress run `npx cypress verify` beforehand.

## Build

Run `npx nx run-many --target=build` to build every app of the project.

Run `npx nx build <app name>` to build a specific app. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Understand the workspace

This project was generated using [Nx](https://nx.dev).

🔎 **A Smart, Fast and Extensible Build System**

### Quick Start & Documentation

[Nx Documentation](https://nx.dev/getting-started/intro)

[Mental model is a good starting point for those who like to understand things theoretically first.](https://nx.dev/concepts/mental-model)

[Interactive Tutorial](https://nx.dev/getting-started/angular-tutorial)

### Highly recommended

Install the [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) extension for VS Code, that helps you navigate in, visualize and run Nx based projects.
