export default {
	title: 'Examples/Inputs/Select',
	parameters: {
		docs: {
			description: {
				component: `How to show select (v-select)<br />
`,
			},
		},
	},
};

export const VSelect = () => ({
	data() {
		return {
			items: ['SP', 'RJ', 'MG', 'RS', 'BA'],
		};
	},
	template: `
        <v-col cols="12" sm="6" md="2" class="v-col-fieldset-default pl-0">
            <v-select dense outlined :items="items" />
        </v-col>`,
});

VSelect.story = {
	name: 'Básico',
};
