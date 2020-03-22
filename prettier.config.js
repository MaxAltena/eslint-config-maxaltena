module.exports = {
	printWidth: 100, // <int>
	tabWidth: 2, // <int>
	useTabs: true, // <bool>
	semi: true, // <bool>
	singleQuote: false, // <bool>
	quoteProps: "as-needed", // "<as-needed|consistent|preserve>"
	jsxSingleQuote: false, // <bool>
	trailingComma: "all", // "<es5|none|all>"
	bracketSpacing: true, // <bool>
	jsxBracketSameLine: false, // <bool>
	arrowParens: "always", // "<always|avoid>"
	// rangeStart: 0, // <int>
	// rangeEnd: Infinity, // <int>
	// parser: "", // "<string>"
	// parser: require("./my-parser"), // require
	// filepath: "", // "<string>"
	requirePragma: false, // <bool>
	insertPragma: false, // <bool>
	proseWrap: "preserve", // "<always|never|preserve>"
	htmlWhitespaceSensitivity: "css", // "<css|strict|ignore>"
	vueIndentScriptAndStyle: false, // <bool>
	endOfLine: "lf", // "<lf|crlf|cr|auto>"
	overrides: [
		{
			files: "package*.json",
			options: {
				printWidth: 1000,
			},
		},
	],
}
