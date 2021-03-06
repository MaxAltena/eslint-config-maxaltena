module.exports = {
	parser: "babel-eslint",
	extends: [
		"eslint:recommended",
		"plugin:prettier/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"autofix"
	],
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		"linebreak-style": ["error", "unix"],
		"no-console": "warn",
		"camelcase": "warn",
		"no-unused-vars": [
			"warn",
			{ argsIgnorePattern: "^__", varsIgnorePattern: "^__" },
		],
		"no-case-declarations": "warn",
		"no-undef": "warn",
		"no-useless-escape": "warn",
		"no-redeclare": "warn",
		"no-prototype-builtins": "warn",
		"no-empty": "warn",
		"no-constant-condition": "warn",
		"no-func-assign": "warn",
		"default-case": "error",
		"sort-imports": "off",
		"sort-keys": ["warn", "asc", { caseSensitive: true, natural: true }],
		"import/order": ["warn", { "newlines-between": "always" }],
		"autofix/no-debugger": "error"
	},
	settings: {
		react: {
			version: "detect",
		},
	},
}
