module.exports = {
	preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
	setupFiles: ['<rootDir>/tests/unit/index.js'],
	modulePaths: ['<rootDir>', 'node_modules'],
	collectCoverageFrom: ['src/**/*.{js,vue}', '!src/main.js', '!src/**/*.stories.js'],
	coveragePathIgnorePatterns: ['src/examples'],
	transformIgnorePatterns: ['<rootDir>/node_modules/(?!vuetify)'],
};
