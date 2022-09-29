export default {
	title: 'Layout/Container/Examples',
	parameters: {
		docs: {
			description: {
				component: `Full Container`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: '<farm-container>content</farm-container>',
});

export const Structure = () => ({
	template: `
	<farm-container>
		<farm-box>
			Content<br />
			Content<br />
			Content<br />
			Content<br />
			Content<br />
		</farm-box>
		<farm-row>
			<v-col md="6" lg="3">
				coluna 1
			</v-col>
			<v-col md="6" lg="3">
				coluna 2
			</v-col>
			<v-col md="6" lg="3">
				coluna 3
			</v-col>
			<v-col md="6" lg="3">
				coluna 4
			</v-col>
		</farm-row>
		<farm-row>
			<farm-container-footer>
				Footer content
			</farm-container-footer>
		</farm-row>
	</farm-container>
`,
});

export const Tertiary = () => ({
	data() {
		return {
			steps: [
				{ label: 'Step 1', icon: '' },
				{ label: 'Step 2', icon: 'monitor' },
				{ label: 'Step 3', icon: 'book' },
				{ label: 'Step 4', icon: '' },
			],
			currentStep: 3,
		};
	},
	template: `
	<farm-container>
		<farm-stepper-header :steps="steps" :currentStep="currentStep" />
	</farm-container>
`,
});