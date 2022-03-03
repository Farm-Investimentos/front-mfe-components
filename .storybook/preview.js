import { addDecorator } from '@storybook/vue';
import vuetify from './vuetify_storybook';

import '../src/scss/ButtonOverrides.scss';
import '../src/scss/DefaultModal.scss';
import '../src/scss/DialogOverrides.scss';
import '../src/scss/FormOverrides.scss';
import '../src/scss/Status-Chip.scss';
import '../src/scss/VMenuOverrides.scss';
import '../src/scss/utils.scss';
/*
<link
			href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700;800;900&display=swap"
			rel="stylesheet"
		/>
		<style>
			body,
			html {
				height: 100%;
				padding: 0;
				margin: 0 !important;
			}
			body {
				display: flex;
				flex-direction: column;
				font-size: 0.75rem;
			}

			.mf-Containers {
				flex: 1;
				display: flex;
				align-items: center;
				flex-direction: column;
				color: #cacaca;
				background: #f0f0f0 url('/public/loader.svg') center 48px no-repeat;
			}

			.mf-Container {
				width: 100%;
			}
			.mf-Container .theme--light.v-application {
				background: #f0f0f0;
				font-family: 'Montserrat', sans-serif;
			}
    */

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
