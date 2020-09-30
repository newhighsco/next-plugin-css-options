> **DEPRECATED: No longer supported.**

# next-plugin-css-options [![NPM version](https://img.shields.io/npm/v/@newhighsco/next-plugin-css-options.svg)](https://www.npmjs.com/package/@newhighsco/next-plugin-css-options)

[Next.js](https://nextjs.org/) plugin for overriding css-loader options

## Installation

Install Next.js and `@newhighsco/next-plugin-css-options`:

```
npm install --save next @newhighsco/next-plugin-css-options
```

## Usage

Create a `next.config.js` in your project:

```js
// next.config.js
const withCssOptions = require('@newhighsco/next-plugin-css-options')
module.exports = withCssOptions({
  cssOptions: {
    /* css-loader config options here */
  },
  cssModulesOptions: {
    /* config options for CSS Modules here */
  }
})
```

## Options

[See options supported by css-loader](https://webpack.js.org/loaders/css-loader/#options)

## [CHANGELOG](CHANGELOG.md)
