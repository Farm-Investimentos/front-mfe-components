import { config } from '@vue/test-utils';

import * as farmComponents from '../../src/main';

Object.keys(farmComponents).forEach(key => {
	const component = farmComponents[key];
	config.global.components[component.name] = component;
});
