# eslint-config-maxaltena

[![npm version](https://img.shields.io/npm/v/@maxaltena/eslint-config-maxaltena)(https://www.npmjs.com/package/@maxaltena/eslint-config-maxaltena)]
[![Watchers](https://img.shields.io/github/watchers/MaxAltena/eslint-config-maxaltena)](https://github.com/MaxAltena/eslint-config-maxaltena/watchers)
[![Stars](https://img.shields.io/github/stars/MaxAltena/eslint-config-maxaltena)](https://github.com/MaxAltena/eslint-config-maxaltena/stargazers)
[![Issues](https://img.shields.io/github/issues/MaxAltena/eslint-config-maxaltena)](https://github.com/MaxAltena/eslint-config-maxaltena/issues)
[![Pull requests](https://img.shields.io/github/issues-pr/MaxAltena/eslint-config-maxaltena)](https://github.com/MaxAltena/eslint-config-maxaltena/pulls)
[![Follow @MaxAltena](https://img.shields.io/github/followers/maxaltena?label=Follow&style=social)](https://github.com/MaxAltena)

> Config for my JavaScript project to lint and prettify.

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
