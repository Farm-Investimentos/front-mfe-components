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
	template: `<farm-row>
		<farm-col xl="4" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 3</farm-col>
		<farm-col xl="4" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>2 of 3</farm-col>
		<farm-col xl="4" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>3 of 3</farm-col>
		<farm-col xl="6" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 2</farm-col>
		<farm-col xl="6" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>2 of 2</farm-col>
		<farm-col xl="12" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 1</farm-col>
		<farm-col xl="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 6</farm-col>
		<farm-col xl="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>2 of 6</farm-col>
		<farm-col xl="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>3 of 6</farm-col>
		<farm-col xl="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>4 of 6</farm-col>
		<farm-col xl="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>5 of 6</farm-col>
		<farm-col xl="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>6 of 6</farm-col>
	</farm-row>`,
});
export const Lg = () => ({
	template: `<farm-row>
	<farm-col lg="4" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 3</farm-col>
	<farm-col lg="4" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>2 of 3</farm-col>
	<farm-col lg="4" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>3 of 3</farm-col>
	<farm-col lg="6" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 2</farm-col>
	<farm-col lg="6" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>2 of 2</farm-col>
	<farm-col lg="12" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 1</farm-col>
		<farm-col lg="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 6</farm-col>
		<farm-col lg="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>2 of 6</farm-col>
		<farm-col lg="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>3 of 6</farm-col>
		<farm-col lg="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>4 of 6</farm-col>
		<farm-col lg="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>5 of 6</farm-col>
		<farm-col lg="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>6 of 6</farm-col>
</farm-row>`,
});
export const Md = () => ({
	template: `<farm-row>
	<farm-col md="4" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 3</farm-col>
	<farm-col md="4" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>2 of 3</farm-col>
	<farm-col md="4" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>3 of 3</farm-col>
	<farm-col md="6" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 2</farm-col>
	<farm-col md="6" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>2 of 2</farm-col>
	<farm-col md="12" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 1</farm-col>
		<farm-col md="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 6</farm-col>
		<farm-col md="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>2 of 6</farm-col>
		<farm-col md="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>3 of 6</farm-col>
		<farm-col md="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>4 of 6</farm-col>
		<farm-col md="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>5 of 6</farm-col>
		<farm-col md="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>6 of 6</farm-col>
</farm-row>`,
});
export const Sm = () => ({
	template: `<farm-row>
	<farm-col sm="4" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 3</farm-col>
	<farm-col sm="4" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>2 of 3</farm-col>
	<farm-col sm="4" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>3 of 3</farm-col>
	<farm-col sm="6" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 2</farm-col>
	<farm-col sm="6" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>2 of 2</farm-col>
	<farm-col sm="12" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 1</farm-col>
		<farm-col sm="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 6</farm-col>
		<farm-col sm="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>2 of 6</farm-col>
		<farm-col sm="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>3 of 6</farm-col>
		<farm-col sm="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>4 of 6</farm-col>
		<farm-col sm="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>5 of 6</farm-col>
		<farm-col sm="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>6 of 6</farm-col>
</farm-row>`,
});
export const SmVcol = () => ({
	template: `<farm-row>
	<farm-col smvcol="4" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 3</farm-col>
	<farm-col smvcol="4" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>2 of 3</farm-col>
	<farm-col smvcol="4" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>3 of 3</farm-col>
	<farm-col smvcol="6" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 2</farm-col>
	<farm-col smvcol="6" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>2 of 2</farm-col>
	<farm-col smvcol="12" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 1</farm-col>
		<farm-col smvcol="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 6</farm-col>
		<farm-col smvcol="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>2 of 6</farm-col>
		<farm-col smvcol="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>3 of 6</farm-col>
		<farm-col smvcol="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>4 of 6</farm-col>
		<farm-col smvcol="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>5 of 6</farm-col>
		<farm-col smvcol="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>6 of 6</farm-col>
</farm-row>`,
});
export const Xs = () => ({
	template: `<farm-row>
	<farm-col xs="4" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 3</farm-col>
	<farm-col xs="4" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>2 of 3</farm-col>
	<farm-col xs="4" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>3 of 3</farm-col>
	<farm-col xs="6" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 2</farm-col>
	<farm-col xs="6" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>2 of 2</farm-col>
	<farm-col xs="12" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 1</farm-col>
		<farm-col xs="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>1 of 6</farm-col>
		<farm-col xs="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>2 of 6</farm-col>
		<farm-col xs="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>3 of 6</farm-col>
		<farm-col xs="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>4 of 6</farm-col>
		<farm-col xs="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>5 of 6</farm-col>
		<farm-col xs="2" style='background-color: rgba(112.520718,44.062154,249.437846, 0.1); border: 1px solid rgba(112.520718,44.062154,249.437846, 0.25)'>6 of 6</farm-col>
</farm-row>`,
});
export const Combination = () => ({
	template: '<farm-col xl="3" xs="4">xl: 3 - xs: 4</farm-col>',
});
export const TagP = () => ({
	template: '<farm-col tag="p">col</farm-col>',
});

export const CompareToVCol = () => ({
	template: `<div>
		<h4>MD 3</h4>
		<farm-col md="3" style="border:1px solid red;">farm</farm-col>
		<v-col md="3" style="border:1px solid red;">v-col</v-col>

		<h4>SM 3</h4>
		<farm-col sm="3" style="border:1px solid red;">farm</farm-col>
		<v-col sm="3" style="border:1px solid red;">v-col</v-col>

	</div>`,
});
