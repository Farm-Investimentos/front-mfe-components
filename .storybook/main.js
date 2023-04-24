const path = require('path');

module.exports = {
	//stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
	// stories: ['../src/components/AlertBox/AlertBox.stories.js'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		// '@storybook/addon-mdx-gfm',
		/*
		{
			name: `@storybook/preset-scss`,
			options: {
				rule: {
					test: /\base.scss$/,
				},
				cssLoaderOptions: {
					modules: {
						localIdentName: '[name]__[local]--[hash:base64:5]',
					},
				},
			},
		},
		*/
	],
	framework: {
		name: '@storybook/vue3-webpack5',
		options: {},
	},
	docs: {
		autodocs: true,
	},
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
};
