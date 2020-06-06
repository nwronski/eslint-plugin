# eslint-config-nwronski-rules

This repo contains the linting rules for my projects that use ESLint with TypeScript.

## Installation

Install ESLint and TSLint (for now) for your project.

```shell
yarn add --dev eslint tslint
```

### Default (TypeScript/Node)

Install the `eslint-config-nwronski-rules` module and dependencies

```shell
yarn add --dev eslint-config-nwronski-rules
```

Create a `.eslintrc.json` file in the root folder of your project and add the following:

`.eslintrc.json`

```json
{
  "extends": "nwronski-rules:base",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

Add `lint` script to your `package.json`:

`package.json`

```json
{
  "scripts": {
    "lint": "eslint --fix \"./src/**/*.ts\""
  }
}
```

### Angular (TypeScript/Jasmine/Protractor)

Install the `eslint-config-nwronski-rules` module and dependencies

```shell
yarn add --dev @angular-eslint/eslint-plugin @angular-eslint/template-parser @angular-eslint/eslint-plugin-template @angular-eslint/builder eslint-config-nwronski-rules
```

Create a `.eslintrc.json` file in the root folder of your project and add the following:

`.eslintrc.json`

```json
{
  "extends": "nwronski-rules:angular",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "@angular-eslint/component-selector": [
      "error",
      {
        "type": "element",
        "prefix": "nw",
        "style": "kebab-case"
      }
    ],
    "@angular-eslint/directive-selector": [
      "error",
      {
        "type": "attribute",
        "prefix": "nw",
        "style": "camelCase"
      }
    ]
  }
}
```

Add `lint` script to your `package.json`:

`package.json`

```json
{
  "scripts": {
    "lint": "ng lint --fix",
  }
}
```

Add ESLint configuration for Angular CLI to your `angular.json`:

`angular.json`

```json
{
  "projects": {
    "my-fancy-project": {
      "prefix": "nw",
      "architect": {
        "lint": {
          "builder": "@angular-eslint/builder:lint",
          "options": {
            "eslintConfig": ".eslintrc.json",
            "tsConfig": [
              "tsconfig.build.json"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    }
  }
}

```

### React (TypeScript/Jest)

Install the `eslint-config-nwronski-rules` module and dependencies

```shell
yarn add --dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-jest eslint-config-nwronski-rules
```

Create a `.eslintrc.json` file in the root folder of your project and add the following:

`.eslintrc.json`

```json
{
  "extends": "nwronski-rules:react",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}

```

Add `lint` script to your `package.json`:

`package.json`

```json
{
  "scripts": {
    "lint": "eslint --fix \"./src/**/*.{ts,tsx}\""
  }
}
```

## Usage

### CLI

```shell
yarn run lint
```

### lint-staged

```shell
yarn add --dev lint-staged
```

`.lintstagedrc.json`

```json
{
  "*.ts": [
    "eslint --fix"
  ]
}
```

### vscode

`.vscode/settings.json`

```json
{

  "eslint.options": {
    "extensions": [
      ".ts",
      ".html",
      ".tsx"
    ]
  }
}
```
