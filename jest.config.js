module.exports = {
	//	preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFiles: ['<rootDir>/tests/unit/index.js'],
	modulePaths: ['<rootDir>', 'node_modules'],
	moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
	transform: {
		'^.+\\.vue$': '@vue/vue3-jest',
		'^.+\\js$': 'babel-jest',
		'^.+\\.ts$': 'ts-jest',
	},
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx,vue}',
		'!src/main.js',
		'!src/**/*.stories.{js,jsx,ts,tsx,vue}',
	],
	coveragePathIgnorePatterns: ['src/examples', 'src/configurations'],
	transformIgnorePatterns: ['<rootDir>/node_modules/(?!vuetify)'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	testEnvironmentOptions: {
		customExportConditions: ['node', 'node-addons'],
	},
};
