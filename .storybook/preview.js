import Vue from 'vue';
import { addDecorator } from '@storybook/vue';
import VuetifyDialog from 'vuetify-dialog';
import 'vuetify-dialog/dist/vuetify-dialog.css';

import vuetify from './vuetify_storybook';
import { installComponents } from '@farm-investimentos/front-mfe-libs-ts';
import '../src/scss/ButtonOverrides.scss';
import '../src/scss/DefaultModal.scss';
import '../src/scss/DialogOverrides.scss';
import '../src/scss/FormOverrides.scss';
import '../src/scss/Status-Chip.scss';
import '../src/scss/VMenuOverrides.scss';
import '../src/scss/utils.scss';
import '../src/scss/Sticky-table.scss';
import '../src/scss/Table.scss';

import '../src/scss/cssVariablesGenerator.scss';

import * as farmComponents from '../src/main';

installComponents(Vue, farmComponents);

Vue.use(VuetifyDialog, {
	context: {
		vuetify,
	},
});

addDecorator(() => ({
	vuetify,
	template: `
    <v-app>
      <v-main>
        <v-container fluid >
          <story/>
        </v-container>
      </v-main>
    </v-app>
    `,
}));
