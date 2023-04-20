module.exports = {
	preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
	setupFiles: ['<rootDir>/tests/unit/index.js'],
	modulePaths: ['<rootDir>', 'node_modules'],
	moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx,vue}', '!src/main.js', '!src/**/*.stories.{js,jsx,ts,tsx,vue}'],
	coveragePathIgnorePatterns: ['src/examples'],
	transformIgnorePatterns: ['<rootDir>/node_modules/(?!vuetify)'],
};
