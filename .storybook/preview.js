import { addDecorator } from '@storybook/vue';
import vuetify from './vuetify_storybook';

import '../src/scss/ButtonOverrides.scss';
import '../src/scss/DefaultModal.scss';
import '../src/scss/DialogOverrides.scss';
import '../src/scss/FormOverrides.scss';
import '../src/scss/Status-Chip.scss';
import '../src/scss/VMenuOverrides.scss';
import '../src/scss/utils.scss';
import '../src/scss/Sticky-table.scss';

import '../src/scss/Table.scss';

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
