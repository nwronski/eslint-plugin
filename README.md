# eslint-config-nwronski-rules

This repo contains the ESLint rule configuration for my projects that
use JavaScript.

## Installation

Install ESLint for your project.

```
npm i --save-dev eslint
```

Install the eslint-config-nwronski-rules module.

```
npm i --save-dev eslint-config-nwronski-rules
```

Create a `.eslintrc.js` file in the root folder of your project and add
the following:

```javascript
module.exports = {
  extends: 'nwronski-rules',
};

```

## Usage

Add a script to the `scripts` section of your `package.json`, making sure to
set the correct pattern for your source files (the example uses `src/**/*.js`):

```json
{
  "scripts": {
    "lint": "eslint --fix --ext .js 'src/**/*.js'"
  }
}
```

If you have a build script then you should modify it so that the linting is
done before the project can be successfully built. For example, you could
prepend the linting command to your build command to make sure the linting
is run first.

```
npm run lint
```
