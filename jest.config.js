module.exports = {
	preset: '@vue/cli-plugin-unit-jest',
	setupFiles: ['<rootDir>/tests/unit/index.js'],
	transformIgnorePatterns: ['<rootDir>/node_modules/(?!vuetify)'],
	collectCoverageFrom: ['src/**/*.{js,vue}', '!src/main.js', '!src/**/*.stories.js'],
	coveragePathIgnorePatterns: ['src/examples'],
};
