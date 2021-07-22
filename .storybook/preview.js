import {
    withVuetify,
    withThemeProvider,
} from '@socheatsok78/storybook-addon-vuetify/dist/decorators';

import { addDecorator } from '@storybook/vue';
import vuetify from './vuetify_storybook';

import "../src/scss/ButtonOverrides.scss";
import "../src/scss/DefaultModal.scss";
import "../src/scss/FormOverrides.scss";
import "../src/scss/Status-Chip.scss";
import "../src/scss/utils.scss";

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