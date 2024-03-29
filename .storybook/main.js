const path = require('path');

module.exports = {
	stories: [
		'../src/stories/Introduction.stories.mdx',
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-docs',
		'@socheatsok78/storybook-addon-vuetify',
		'storybook-addon-designs/register',
	],
	webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// Make whatever fine-grained changes you need

		config.module.rules.push({
			test: /\.(sass|less|scss)$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: path.resolve(__dirname, '../'),
		});

		// Return the altered config
		return config;
	},
	features: {
		postcss: false,
	},
};
