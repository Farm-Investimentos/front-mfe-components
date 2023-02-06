// .storybook/vuetify_storybook.js
import Vue from 'vue';
import Vuetify from 'vuetify';

import VueMask from 'v-mask';

Vue.use(VueMask);

import config from '@farm-investimentos/front-mfe-libs-ts/consts/vuetify';

Vue.use(Vuetify);

export default new Vuetify(config);
