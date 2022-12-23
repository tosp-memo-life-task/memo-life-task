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

3. Setup your database based on the `.env` file you just filled out. Run the initial migration with `npx nx run api:migration-run`.

4. Run `npx nx run-many --target=serve` to serve every app needed to run the **Memo Life Task** project.

### Environtment variables

#### Basic

|                   |     **NODE_ENV**      |             **TZ**              |             **SALT**              |
| ----------------- | :-------------------: | :-----------------------------: | :-------------------------------: |
| _Default value_   |        'prod'         |             'CEST'              |            'saltymlt'             |
| _Description_     | Environment variable. | Timezone of the backend server. | Salt for authentication purposes. |
| _Possible values_ |    ['dev', 'prod']    |    E.g.: 'UTC', 'CEST', ...     |      E.g.: 'asdasd123', ...       |

#### **API**

|                   |         **API_HOST**         |       **API_PREFIX**        |               **API_PORT**               |    **API_VERSION**     |
| ----------------- | :--------------------------: | :-------------------------: | :--------------------------------------: | :--------------------: |
| _Default value_   |      'http://localhost'      |            'api'            |                   3000                   |          '1'           |
| _Description_     | Host of the backend server.  |     Prefix of the API.      | Port on which the backend API is served. | Versioning of the API. |
| _Possible values_ | E.g.: 'be.prodhost.com', ... | E.g.: 'api', 'backend', ... |          E.g.: 3000, 3333, ...           | E.g.: '2', 'Beta', ... |

#### **Database**

|                   |                **DB_HOST**                |         **DB_PORT**          |        **DB_USERNAME**        |        **DB_PASSWORD**        |             **DB_NAME**             |                                                                  **DB_SYNCHRONIZE**                                                                  |
| ----------------- | :---------------------------------------: | :--------------------------: | :---------------------------: | :---------------------------: | :---------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: |
| _Default value_   |                'localhost'                |             3306             |            'root'             |          'password'           |                'mlt'                |                                                                        false                                                                         |
| _Description_     |       Host of the database server.        | Port of the database server. |   Database server username.   |   Database server password    | Name of the database on the server. | Whether the database schema should synchronize automatically with the backend entity relation description. Do **NOT** use in production environment. |
| _Possible values_ | E.g.: 'localhost', 'db.prodhost.com', ... |    E.g.: 3306, 1234, ...     | E.g.: 'root', 'username', ... | E.g.: 'root', 'password', ... |       E.g.: 'mlt', 'db', ...        |                                                                    [false, true]                                                                     |

#### **JWT**

|                   |                                     **JWT_IGNORE_EXPIRATION**                                      |                                                                      **JWT_ACCESS_SECRET**                                                                       |                          **JWT_ACCESS_EXPIRATION_TIME**                           |
| ----------------- | :------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: |
| _Default value_   |                                               false                                                |                                                                              'mlt'                                                                               |                                       '1y'                                        |
| _Description_     | Whether the backend should ignore the expiration of the tokens. Do **NOT** use in production mode. | Secret code/key for encoding/decoding access tokens.<br>Handle it with caution, do **NOT** share it with anyone, and never upload it to version control servers. |                   Time before the access token becomes invalid.                   |
| _Possible values_ |                                           [false, true]                                            |                                        E.g.: 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ'                                        | E.g.: '42s', '6.9m', '1h'... <br>[More information](https://github.com/vercel/ms) |

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

## CI/CD

We are using GitHub Actions for CI, which triggers a CD build on [Railway](https://railway.app/) if every test and the migration ran without errors.

## Documentation

Run the project and go to `{API_HOST}(:{API_PORT})/docs`.

## Understand the workspace

This project was generated using [Nx](https://nx.dev).

🔎 **A Smart, Fast and Extensible Build System**

### Quick Start & Documentation

[Nx Documentation](https://nx.dev/getting-started/intro)

[Mental model is a good starting point for those who like to understand things theoretically first.](https://nx.dev/concepts/mental-model)

[Interactive Tutorial](https://nx.dev/getting-started/angular-tutorial)

### Highly recommended

Install the [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) extension for VS Code, that helps you navigate in, visualize and run Nx based projects.
