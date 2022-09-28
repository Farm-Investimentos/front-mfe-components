import Col from './Col.vue';

export default {
	title: 'Layout/Col',
	component: Col,
	parameters: {
		docs: {
			description: {
				component: `Col<br />
				selector: <em>farm-col</em><br />
				<span style="color: var(--farm-extra-1-base);">development</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: '<farm-col>col</farm-col>',
});
export const Xl = () => ({
	template: '<farm-col xl="3">xl: 3</farm-col>',
});
export const Lg = () => ({
	template: '<farm-col lg="4">lg: 4</farm-col>',
});
export const Md = () => ({
	template: '<farm-col md="6">md: 6</farm-col>',
});
export const Sm = () => ({
	template: '<farm-col sm="4">sm: 4</farm-col>',
});
export const Xs = () => ({
	template: '<farm-col xs="4">xs: 4</farm-col>',
});
export const Combination = () => ({
	template: '<farm-col xl="3" xs="4">xl: 3 - xs: 4</farm-col>',
});
export const TagP = () => ({
	template: '<farm-col tag="p">col</farm-col>',
});