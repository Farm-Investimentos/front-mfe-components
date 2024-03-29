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
		<farm-row>
			<farm-col md="6" xs="12">
				Main Filter
			</farm-col>
			<farm-col md="6" xs="12">
				Botoes laterais
			</farm-col>
		</farm-row>
		<farm-box>
			Content<br />
			Content<br />
			Content<br />
			Content<br />
			Content<br />
		</farm-box>
		<farm-row>
			<farm-col md="6" lg="3">
				coluna 1
			</farm-col>
			<farm-col md="6" lg="3">
				coluna 2
			</farm-col>
			<farm-col md="6" lg="3">
				coluna 3
			</farm-col>
			<farm-col md="6" lg="3">
				coluna 4
			</farm-col>
		</farm-row>

		<farm-row>
			<farm-col lg="2">
				coluna 1
			</farm-col>
			<farm-col lg="2">
				coluna 2
			</farm-col>
			<farm-col lg="2">
				coluna 3
			</farm-col>
			<farm-col lg="2">
				coluna 4
			</farm-col>
			<farm-col lg="2">
				coluna 5
			</farm-col>
			<farm-col lg="2">
				coluna 6
			</farm-col>
		</farm-row>

		<farm-row :extra-decrease="true">
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

export const WithTabs = () => ({
	data() {
		return {
			steps: [{ name: 'Step 1' }, { name: 'Step 2' }, { name: 'Step 3' }],
			currentStep: 1,
		};
	},
	template: `
	<farm-container>
		<farm-row extra-decrease>
			<farm-tabs :tabs="steps" :showCounter="false" class="mt-n6" />
		</farm-row>
	</farm-container>
`,
});
