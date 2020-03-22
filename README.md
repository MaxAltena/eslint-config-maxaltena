# eslint-config-maxaltena

[![npm version](https://badge.fury.io/js/eslint-config-maxaltena.svg)](https://badge.fury.io/js/eslint-config-maxaltena)
[![GitHub license](https://img.shields.io/github/license/natterstefan/eslint-config-maxaltena.svg)](https://github.com/natterstefan/eslint-config-maxaltena/blob/master/LICENCE)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

It lints your javascript projects with ease, based on the popular [javascript
code style from Airbnb](https://www.npmjs.com/package/eslint-config-airbnb).

## Features

- based on the the popular [javascript
  code style from Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- easy switchable to their smaller set of rules [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- with prettier support, thanks to [eslint-plugin-prettier](prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)

## Installation

Install the package with

```sh
npm install @maxaltena/eslint-config-maxaltena --save-dev
# or
yarn add @maxaltena/eslint-config-maxaltena -D
```

Then install the correct versions of each peerDependency package, which are
listed by the command:

```sh
npm info "@maxaltena/eslint-config-maxaltena@latest" peerDependencies
```

If using npm 5+, use this shortcut:

```sh
npx install-peerdeps --dev @maxaltena/eslint-config-maxaltena
# or
yarn add @maxaltena/eslint-config-maxaltena -D --peer
```

## Usage

Now add the config to either your `package.json`:

```json
{
	"eslintConfig": {
		"extends": "eslint-config-maxaltena"
	}
}
```

to your `.eslintrc`:

```json
{
	"extends": "eslint-config-maxaltena"
}
```

or `.eslintrc.js`:

```js
module.exports = {
	extends: "eslint-config-maxaltena",
};
```

## LICENSE

[MIT](LICENSE)
