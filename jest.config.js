module.exports = {
	preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
	setupFiles: ['<rootDir>/tests/unit/index.js'],
	modulePaths: ['<rootDir>', 'node_modules'],
	collectCoverageFrom: [
		'src/components/**/*.{js,vue,ts}',
		'!src/**/index.js',
		'!src/**/index.ts',
	],

	transformIgnorePatterns: ['<rootDir>/node_modules/(?!vuetify)'],
};
