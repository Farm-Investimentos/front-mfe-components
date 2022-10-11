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

const style = {
	border: '1px solid var(--farm-extra-1-darken)',
	backgroundColor: 'var(--farm-extra-1-lighten)',
};

export const Primary = () => ({
	data() {
		return {
			style,
		};
	},
	template: '<farm-col :style="style">col</farm-col>',
});
export const Xl = () => ({
	data() {
		return {
			style,
		};
	},
	template: `<farm-row>
				<farm-col xl="4" :style="style">4</farm-col>
				<farm-col xl="6" :style="style">6</farm-col>
				<farm-col xl="12" :style="style">12</farm-col>
				<farm-col xl="2" :style="style">2</farm-col>
			</farm-row>`,
});
export const Lg = () => ({
	data() {
		return {
			style,
		};
	},
	template: `<farm-row>
		<farm-col lg="4" :style="style">4</farm-col>
		<farm-col lg="6" :style="style">6</farm-col>
		<farm-col lg="12" :style="style">12</farm-col>
		<farm-col lg="2" :style="style">2</farm-col>
	</farm-row>`,
});
export const Md = () => ({
	data() {
		return {
			style,
		};
	},
	template: `<farm-row>
		<farm-col md="4" :style="style">4</farm-col>
		<farm-col md="6" :style="style">6</farm-col>
		<farm-col md="12" :style="style">12</farm-col>
		<farm-col md="2" :style="style">2</farm-col>
		</farm-row>`,
});

export const Sm = () => ({
	data() {
		return {
			style,
		};
	},
	template: `<farm-row>
			<farm-col sm="4" :style="style">4</farm-col>
			<farm-col sm="6" :style="style">6</farm-col>
			<farm-col sm="12" :style="style">12</farm-col>
			<farm-col sm="2" :style="style">2</farm-col>
		</farm-row>`,
});

export const Xs = () => ({
	data() {
		return {
			style,
		};
	},
	template: `<farm-row>
		<farm-col xs="4" :style="style">4</farm-col>
		<farm-col xs="6" :style="style">6</farm-col>
		<farm-col xs="12" :style="style">12</farm-col>
		<farm-col xs="2" :style="style">2</farm-col>
	</farm-row>`,
});

export const Combination = () => ({
	data() {
		return {
			style,
		};
	},
	template: `<div>
		<farm-col lg="5" md="4" sm="3" :style="style">lg: 5 - md: 4 - sm: 3</farm-col>
	</div>`,
});
export const TagP = () => ({
	template: '<farm-col tag="p">col</farm-col>',
});

export const CompareToVCol = () => ({
	data() {
		return {
			style,
		};
	},
	template: `<div>

		<h4>LG 3</h4>
		<farm-col lg="3" :style="style">farm</farm-col>
		<v-col lg="3" :style="style">v-col</v-col>

		<h4>MD 3</h4>
		<farm-col md="3" :style="style">farm</farm-col>
		<v-col md="3" :style="style">v-col</v-col>


		<h4>SM 3</h4>
		<farm-col sm="3" :style="style">farm</farm-col>
		<v-col sm="3" :style="style">v-col</v-col>
		</div>`,
});

export const NoGutters = () => ({
	data() {
		return {
			style,
		};
	},
	template: '<farm-col :no-gutters="true" :style="style">col</farm-col>',
});
