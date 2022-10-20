# MemoLifeTask

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/getting-started/intro)

[Mental model is a good starting point for those who like to understand things theoretically first.](https://nx.dev/concepts/mental-model)

[Interactive Tutorial](https://nx.dev/getting-started/angular-tutorial)

## Prerequisites

[Node.js](https://nodejs.org/)

## First steps

1. Run `npm install` to get every package required by the apps included in the monorepo.

2. Create a `.env` file based on the `.env.exmaple` file.

3. ???

4. Profit!

### Environtment variables

#### API related

|                   |       **API_PREFIX**        |               **API_PORT**               |    **API_VERSION**     |
| ----------------- | :-------------------------: | :--------------------------------------: | :--------------------: |
| _Default value_   |            'api'            |                   3000                   |          '1'           |
| _Description_     |     Prefix of the API.      | Port on which the backend API is served. | Versioning of the API. |
| _Possible values_ | E.g.: 'api', 'backend', ... |          E.g.: 3000, 3333, ...           | E.g.: '2', 'Beta', ... |

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand the workspace

Run `nx graph` to see a diagram of the dependencies of your projects.
