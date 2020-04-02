# eslint-config-nwronski-rules

This repo contains the linting rules for my projects that use ESLint
with TypeScript.

## Installation

Install ESLint and TSLint (for now) for your project.

```shell
npm i -D eslint tslint
```

Install the `eslint-config-nwronski-rules` module.

```shell
npm i -D eslint-config-nwronski-rules
```

Create a `.eslintrc.json` file in the root folder of your project and add
the following:

```json
{
  "extends": "nwronski-rules",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

## Usage

Add a script to the `scripts` section of your `package.json`, making sure to
set the correct pattern for your source files (the example uses `src/**/*.ts`):

```json
{
  "scripts": {
    "lint": "eslint --fix \"./src/**.ts\""
  }
}
```
