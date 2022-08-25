import Vue from 'vue';
import Vuetify from 'vuetify';
import { installComponents } from '@farm-investimentos/front-mfe-libs-ts';

import * as farmComponents from '../../src/main';

installComponents(Vue, farmComponents);

Vue.use(Vuetify);

Vue.directive('mask', (el, key) => {
	el.innerText = key.value;
});
