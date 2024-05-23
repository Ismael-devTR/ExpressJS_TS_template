# Express API Template with TypeScript

## Overview

This is a template for building RESTful APIs using Express.js with TypeScript. The template includes the setup for unit testing with Jest and integration with Commitizen for standardized commit messages.

## Features

- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **TypeScript**: Strongly typed programming language that builds on JavaScript.
- **Jest**: Delightful JavaScript Testing Framework with a focus on simplicity.
- **Commitizen**: Command line utility to standardize commit messages according to the Conventional Commits specification.

## Prerequisites

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)

## Folder Structure

```
.
|── __tests__
│   ├── controllers
│   │   └── exampleController.test.ts
│   ├── routes
│   │   └── exampleRoute.test.ts
│   ├── services
│   │   └── exampleService.test.ts
│   └── middlewares
│       └── exampleMiddleware.test.ts
├── src
│   ├── controllers
│   │   └── helloWorld.ts
│   ├── routes
│   │   └── exampleRoutes.routes.ts
│   ├── services
│   │   └── serviceExample.ts
│   ├── middlewares
│   │   └── exampleMiddleware.ts
│   ├── models
│   │   └── exampleModel.ts
|   ├── types
│   │   └── types.d.ts
|   ├── utils
│   │   └── utilsExample.ts
│   ├── app.ts
│   └── server.ts
├── .gitignore
├── .env-example
├── .env (NOTE: This file is not included you need to create it manually)
├── jest.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Setup

### Installation

1. Clone the repository

```
git clone https://github.com/Ismael-devTR/ExpressJS_TS_template.git
cd ExpressJS_TS_template
```

2. Install dependencies

Using npm:

```
npm install
```

Using yarn:

```
yarn install
```

3. Create the `.env` file as it is defined in the [Folder Structure](#folder-structure) section "_root folder_"
   Then you need to define the number port variable, in which the express server will run

```
PORT=3000
```

### Configuration

1. TypeScript: Configure `tsconfig.json` as needed.
2. Jest: Adjust `jest.config.js` for your testing needs.

### Scripts

- **Start the server**: `npm run start` or `yarn start`
- **Build the project**: `npm run build` or `yarn build`
- **Run tests**: `npm run test` or `yarn test`
- **Commit changes**: `npm run commit` or `yarn commit`

### Running the Server

```
npm run start
```

The server will start on the port defined in `.env` file with `PORT` variable.

## Using Commitizen

Commitizen helps you to write standardized commit messages. To make a commit, use:

```
npm run commit
```

or

```
yarn commit
```

## Unit Testing

Unit tests are located in the `__tests__` folder and follow the structure of the source code. Jest is used as the test framework.

Run tests with:

```
npm run test
```

or

```
yarn test
```

## License

This project is licensed under the MIT License.

---

Feel free to modify this template to suit your project's needs. Happy coding!
