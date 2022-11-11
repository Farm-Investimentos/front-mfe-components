import Row from './Row.vue';
import { justifications } from '../../../configurations/flexVariables';

export default {
	title: 'Layout/Row',
	component: Row,
	parameters: {
		docs: {
			description: {
				component: `Row<br />
				selector: <em>farm-row</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: '<farm-row>row content</farm-row>',
});

export const Align = () => ({
	data() {
		return {
			aligns: ['start', 'center', 'end', 'baseline', 'stretch'],
		};
	},
	template: `<div>
		<farm-row :align="align" v-for="align in aligns" :key="'align_' + align">
			<farm-col md="6">
				row align
				{{ align }}
			</farm-col>
		</farm-row>
	</div>`,
});

export const AlignContent = () => ({
	data() {
		return {
			aligns: ['start', 'center', 'end', 'space-between', 'space-around', 'stretch'],
		};
	},
	template: `<div>
		<farm-row :align-content="align" v-for="align in aligns" :key="'align-content-_' + align">
			<farm-col md="6">
				row align-content
				{{ align }}
			</farm-col>
		</farm-row>
	</div>`,
});

export const Justify = () => ({
	data() {
		return {
			justifications,
		};
	},
	template: `<div>
		<farm-row :justify="k" v-for="k in justifications" :key="'justify-_' + k">
			<farm-col md="6">
				row justify {{ k }}
			</farm-col>
		</farm-row>
	</div>`,
});

export const NoDefaultGutters = () => ({
	template: '<farm-row :no-default-gutters="true">no gutters</farm-row>',
});

export const DefaultGrid = () => ({
	template: `<div>
		<farm-row>
			<farm-col md="6">
				<div style="border:1px solid red;">col 1</div>
			</farm-col>
			<farm-col md="6">
				<div style="border:1px solid red;">col 2</div>
			</farm-col>
			<farm-col md="6">
				<div style="border:1px solid red;">col 3</div>
			</farm-col>
			<farm-col md="6">
				<div style="border:1px solid red;">col 4</div>
			</farm-col>
		</farm-row>
	</div>`,
});


export const yGridGutters = () => ({
	template: `<div>
		<farm-row y-grid-gutters>
			<farm-col md="6">
				<div style="border:1px solid red;">col 1</div>
			</farm-col>
			<farm-col md="6">
				<div style="border:1px solid red;">col 2</div>
			</farm-col>
			<farm-col md="6">
				<div style="border:1px solid red;">col 3</div>
			</farm-col>
			<farm-col md="6">
				<div style="border:1px solid red;">col 4</div>
			</farm-col>
		</farm-row>
	</div>`,
});
