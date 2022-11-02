import AlertBox from './AlertBox.vue';

export default {
	title: 'Feedback/AlertBox',
	component: AlertBox,
	parameters: {
		docs: {
			description: {
				component: `Alert Box<br />
					selector: <em>farm-alertbox</em><br />
					<span style="color: var(--farm-extra-1-base);">development</span>
`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: '<farm-alertbox>alert box</farm-alertbox>',
});

export const withIcon = () => ({
	template: '<farm-alertbox icon="book">alert box</farm-alertbox>',
});

export const withDismissable = () => ({
	template: '<farm-alertbox dismissable>alert box</farm-alertbox>',
});

export const dense = () => ({
	template: '<farm-alertbox dismissable dense>alert box</farm-alertbox>',
});

export const full = () => ({
	template: '<farm-alertbox icon="book" dismissable>alert box</farm-alertbox>',
});
