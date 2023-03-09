import Vue from 'vue';
import { addDecorator } from '@storybook/vue';
import vuetify from './vuetify_storybook';
import VuejsDialog from 'vuejs-dialog';

import { installComponents } from '@farm-investimentos/front-mfe-libs-ts';
import '../src/scss/ButtonOverrides.scss';
import '../src/scss/DefaultModal.scss';
import '../src/scss/VuejsDialog.scss';
import '../src/scss/VMenuOverrides.scss';
import '../src/scss/utils.scss';
import '../src/scss/Sticky-table.scss';
import '../src/scss/Table.scss';

import '../src/scss/cssVariablesGenerator.scss';

Vue.use(VuejsDialog);

import * as farmComponents from '../src/main';

installComponents(Vue, farmComponents);

addDecorator(() => ({
	vuetify,
	template: `
    <v-app>
        <farm-box >
          <story/>
        </farm-box>
    </v-app>
    `,
}));
