import ButtonToggle from './ButtonToggle.vue';

export default {
	title: 'Buttons/Button Toggle',
	component: ButtonToggle,
	parameters: {
		docs: {
			description: {
				component: `Button Toggle<br />
				selector: <em>farm-button-toggle</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	data() {
		return {
			buttons: [{ label: 'label 1' }, { label: 'label 2' }, { label: 'label 3' }],
		};
	},
	template: `
        <farm-button-toggle :buttons="buttons" />
    `,
});
