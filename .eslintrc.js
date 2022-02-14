module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:react/recommended', // 如果同时使用了eslint和prettier发生冲突了，会关闭掉与prettier有冲突的规则，也就是使用prettier认为对的规则
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
		'next',
		'next/core-web-vitals',
		'prettier', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
	plugins: [
		'react',
		'react-hooks',
		'prettier', // eslint 会使用prettier的规则对代码格式化
		'@typescript-eslint',
	],
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	rules: {
		semi: 1, // 行末分号，根据编码习惯选择添加，这里配置的加分号
		'global-require': 0,
		'import/no-extraneous-dependencies': 0,
		'import/prefer-default-export': 0,
		'import/no-unresolved': 0,
		'import/extensions': 0,
		// react
		'react/jsx-first-prop-new-line': 0,
		'react/jsx-no-bind': 0,
		'react/no-array-index-key': 0,
		'react/require-default-props': 0,
		'react/forbid-prop-types': 0,
		'react/no-string-refs': 1,
		'react/no-find-dom-node': 0,
		'react/no-danger': 0,
		'react/prop-types': 0,
		'react/display-name': 0,
		'react/no-deprecated': 0,
		'react/no-direct-mutation-state': 0,
		// allow jsx syntax in js files (for next.js project)
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.js', '.jsx', '.ts', '.tsx'], //should add ".ts" if typescript project
			},
		],
		// suppress errors for missing 'import React' in files
		'react/react-in-jsx-scope': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		// 以上两行是精华，必须添加，使用钩子函数时才会提示警告
		'react/jsx-wrap-multilines': 1,
		'react/jsx-one-expression-per-line': 1,
		'react/jsx-indent': [
			'warn',
			'tab',
			{
				checkAttributes: true,
				indentLogicalExpressions: true,
			},
		],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-no-target-blank': [2, { enforceDynamicLinks: 'never' }],
		indent: ['warn', 'tab'],
		// 'react/display-name': 0,
		// 'import/no-unresolved': 0,
		// 'import/no-extraneous-dependencies': 0,
		'jsx-a11y/no-noninteractive-element-interactions': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'jsx-a11y/anchor-is-valid': 0,
		'jsx-a11y/href-no-hash': 0,
		'linebreak-style': 0,
		'array-callback-return': ['error', { allowImplicit: true }],
		'class-methods-use-this': [
			'error',
			{
				exceptMethods: ['render', 'addSecondaryRoutes'],
			},
		],
		curly: ['error', 'multi-line'],
		'no-alert': 'warn',
		'no-case-declarations': 'error',
		'no-else-return': ['error', { allowElseIf: false }],
		'no-empty-function': [
			'error',
			{
				allow: [
					'functions',
					'arrowFunctions',
					'generatorFunctions',
					'methods',
					'generatorMethods',
					'getters',
					'setters',
					'constructors',
					'asyncFunctions',
					'asyncMethods',
				],
			},
		],
		'no-eq-null': 'off',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-empty-pattern': 'error',
		'no-implicit-coercion': [
			'off',
			{
				boolean: false,
				number: true,
				string: true,
				allow: [],
			},
		],
		'no-implicit-globals': 'off',
		'no-implied-eval': 'error',
		'no-invalid-this': 'off',
		'no-loop-func': 'error',
		'no-magic-numbers': [
			'off',
			{
				ignore: [],
				ignoreArrayIndexes: true,
				enforceConst: true,
				detectObjects: false,
			},
		],
		'no-multi-spaces': [
			'error',
			{
				ignoreEOLComments: false,
			},
		],
		'no-multi-str': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-restricted-properties': [
			'error',
			{
				object: 'arguments',
				property: 'callee',
				message: 'arguments.callee is deprecated',
			},
			{
				object: 'global',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead',
			},
			{
				object: 'self',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead',
			},
			{
				object: 'window',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead',
			},
			{
				object: 'global',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead',
			},
			{
				object: 'self',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead',
			},
			{
				object: 'window',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead',
			},
			{
				property: '__defineGetter__',
				message: 'Please use Object.defineProperty instead.',
			},
			{
				property: '__defineSetter__',
				message: 'Please use Object.defineProperty instead.',
			},
			{
				object: 'Math',
				property: 'pow',
				message: 'Use the exponentiation operator (**) instead.',
			},
		],
		'no-return-assign': ['error', 'always'],
		// disallow redundant `return await`
		'no-return-await': 'error',
		// disallow use of `javascript:` urls.
		'no-script-url': 'error',
		// disallow comparisons where both sides are exactly the same
		'no-self-compare': 'error',

		// disallow use of comma operator
		'no-sequences': 'error',

		// restrict what can be thrown as an exception
		'no-throw-literal': 'error',

		// disallow unmodified conditions of loops
		// https://eslint.org/docs/rules/no-unmodified-loop-condition
		'no-unmodified-loop-condition': 'off',

		// disallow usage of expressions in statement position
		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: false,
				allowTernary: false,
				allowTaggedTemplates: false,
			},
		],

		// disallow unused labels
		// https://eslint.org/docs/rules/no-unused-labels
		'no-unused-labels': 'error',

		// disallow unnecessary .call() and .apply()
		'no-useless-call': 'off',
		'object-curly-newline': [
			0,
			{
				ObjectExpression: 'always',
				ObjectPattern: 'never',
				ImportDeclaration: 'always',
				ExportDeclaration: 'never',
			},
		],
		// 'no-empty-function': 'error',
		'no-irregular-whitespace': ['error', { skipTemplates: true }],
		'block-spacing': 'error',
		// "no-mixed-spaces-and-tabs": [1,"smart-tabs"],
		'no-trailing-spaces': 'error',
		'no-underscore-dangle': 0,
		'comma-dangle': [
			0,
			{
				arrays: 'always',
				objects: 'always',
				imports: 'always',
				exports: 'always',
				functions: 'always',
			},
		],
		'no-console': 0,
		'max-len': 0,
		'space-before-function-paren': [0, 'always'],
		// 'no-unused-expressions': [
		//   0,
		//   {
		//     allowShortCircuit: true,
		//     allowTernary: true,
		//   },
		// ],
		'arrow-body-style': [0, 'never'],
		'func-names': 0,
		'prefer-const': 0,
		// 'no-extend-native': 0,
		'no-param-reassign': 0,
		'no-restricted-syntax': 0,
		// 'no-eval': 0,
		'no-continue': 0,
		'no-unused-vars': [
			0,
			{
				ignoreRestSiblings: true,
			},
		],
		// 'no-underscore-dangle': 0,
		'prettier/prettier': 0, // 对于不符合prettier规范的写法，eslint会提示报错
	},
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			modules: true,
			experimentalObjectRestSpread: true,
		},
	},
	settings: {
		react: {
			version: 'detect', // 告诉eslint-plugin-react自动检测要使用的React版本
			'import/resolver': 'node',
		},
		'import/resolver': {
			'babel-module': {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				paths: ['src'],
			},
		},
	},
};
