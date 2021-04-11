module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	extends: [
		'airbnb',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	rules: {
		'react/jsx-filename-extension': [
			2,
			{
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}
		],
		'no-use-before-define': 'off',
		'import/extensions': [
			'error',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never'
			}
		]
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}
		}
	}
};
