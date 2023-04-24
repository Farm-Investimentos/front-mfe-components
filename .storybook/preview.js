/*
export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
*/

import { VueMaskDirective } from 'v-mask';

const vMaskV2 = VueMaskDirective;
const vMaskV3 = {
	beforeMount: vMaskV2.bind,
	updated: vMaskV2.componentUpdated,
	unmounted: vMaskV2.unbind,
};

import '../src/scss/VuejsDialog.scss';
import '../src/scss/VMenuOverrides.scss';
import '../src/scss/utils.scss';
import '../src/scss/Sticky-table.scss';
import '../src/scss/Table.scss';
import '../src/scss/cssVariablesGenerator.scss';

import * as components from '../src/main';

import { setup } from '@storybook/vue3';

setup(app => {
	Object.keys(components).forEach(key => {
		const component = components[key];
		app.component(component.name, component);
	});

	app.directive('mask', vMaskV3);
	
});
