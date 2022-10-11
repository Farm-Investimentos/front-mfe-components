export default {
	title: 'Layout/Grid System',
	parameters: {
		docs: {
			description: {
				component: `Grid Syste<br />
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

export const MixBreakpoints = () => ({
	data() {
		return {
			style,
		};
	},
	template: `<div>
		<farm-col lg="9" md="6" sm="3" :style="style">lg: 9 - md: 6 - sm: 3</farm-col>
	</div>`,
});

export const Xl = () => ({
	data() {
		return {
			style,
		};
	},
	template: `<farm-row>
				<farm-col xl="4" :style="style">1 of 3</farm-col>
				<farm-col xl="4" :style="style">2 of 3</farm-col>
				<farm-col xl="4" :style="style">3 of 3</farm-col>
				<farm-col xl="6" :style="style">1 of 2</farm-col>
				<farm-col xl="6" :style="style">2 of 2</farm-col>
				<farm-col xl="12" :style="style">1 of 1</farm-col>
				<farm-col xl="2" :style="style">1 of 6</farm-col>
				<farm-col xl="2" :style="style">2 of 6</farm-col>
				<farm-col xl="2" :style="style">3 of 6</farm-col>
				<farm-col xl="2" :style="style">4 of 6</farm-col>
				<farm-col xl="2" :style="style">5 of 6</farm-col>
				<farm-col xl="2" :style="style">6 of 6</farm-col>
			</farm-row>`,
});
export const Lg = () => ({
	data() {
		return {
			style,
		};
	},
	template: `<farm-row>
		<farm-col lg="4" :style="style">1 of 3</farm-col>
		<farm-col lg="4" :style="style">2 of 3</farm-col>
		<farm-col lg="4" :style="style">3 of 3</farm-col>
		<farm-col lg="6" :style="style">1 of 2</farm-col>
		<farm-col lg="6" :style="style">2 of 2</farm-col>
		<farm-col lg="12" :style="style">1 of 1</farm-col>
		<farm-col lg="2" :style="style">1 of 6</farm-col>
		<farm-col lg="2" :style="style">2 of 6</farm-col>
		<farm-col lg="2" :style="style">3 of 6</farm-col>
		<farm-col lg="2" :style="style">4 of 6</farm-col>
		<farm-col lg="2" :style="style">5 of 6</farm-col>
		<farm-col lg="2" :style="style">6 of 6</farm-col>
	</farm-row>`,
});
export const Md = () => ({
	data() {
		return {
			style,
		};
	},
	template: `<farm-row>
		<farm-col md="4" :style="style">1 of 3</farm-col>
		<farm-col md="4" :style="style">2 of 3</farm-col>
		<farm-col md="4" :style="style">3 of 3</farm-col>
		<farm-col md="6" :style="style">1 of 2</farm-col>
		<farm-col md="6" :style="style">2 of 2</farm-col>
		<farm-col md="12" :style="style">1 of 1</farm-col>
		<farm-col md="2" :style="style">1 of 6</farm-col>
		<farm-col md="2" :style="style">2 of 6</farm-col>
		<farm-col md="2" :style="style">3 of 6</farm-col>
		<farm-col md="2" :style="style">4 of 6</farm-col>
		<farm-col md="2" :style="style">5 of 6</farm-col>
		<farm-col md="2" :style="style">6 of 6</farm-col>
		</farm-row>`,
});

export const Sm = () => ({
	data() {
		return {
			style,
		};
	},
	template: `<farm-row>
		<farm-col sm="4" :style="style">1 of 3</farm-col>
		<farm-col sm="4" :style="style">2 of 3</farm-col>
		<farm-col sm="4" :style="style">3 of 3</farm-col>
		<farm-col sm="6" :style="style">1 of 2</farm-col>
		<farm-col sm="6" :style="style">2 of 2</farm-col>
		<farm-col sm="12":style="style" >1 of 1</farm-col>
		<farm-col sm="2" :style="style">1 of 6</farm-col>
		<farm-col sm="2" :style="style">2 of 6</farm-col>
		<farm-col sm="2" :style="style" >3 of 6</farm-col>
		<farm-col sm="2" :style="style">4 of 6</farm-col>
		<farm-col sm="2" :style="style">5 of 6</farm-col>
		<farm-col sm="2" :style="style">6 of 6</farm-col>
		</farm-row>`,
});

export const Xs = () => ({
	data() {
		return {
			style,
		};
	},
	template: `<farm-row>
		<farm-col xs="4" :style="style">1 of 3</farm-col>
		<farm-col xs="4" :style="style">2 of 3</farm-col>
		<farm-col xs="4" :style="style">3 of 3</farm-col>
		<farm-col xs="6" :style="style">1 of 2</farm-col>
		<farm-col xs="6" :style="style">2 of 2</farm-col>
		<farm-col xs="12":style="style" >1 of 1</farm-col>
		<farm-col xs="2" :style="style">1 of 6</farm-col>
		<farm-col xs="2" :style="style">2 of 6</farm-col>
		<farm-col xs="2" :style="style">3 of 6</farm-col>
		<farm-col xs="2" :style="style">4 of 6</farm-col>
		<farm-col xs="2" :style="style">5 of 6</farm-col>
		<farm-col xs="2" :style="style">6 of 6</farm-col>
	</farm-row>`,
});


