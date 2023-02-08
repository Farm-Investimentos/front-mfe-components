import Col from './Col.vue';
import { aligns } from '../../../configurations/flexVariables';

export default {
	title: 'Layout/Col',
	component: Col,
	parameters: {
		docs: {
			description: {
				component: `Col<br />
					selector: <em>farm-col</em><br />
					<span style="color: var(--farm-primary-base);">ready for use</span>
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

const items = Array.from(Array(12).keys());

export const Primary = () => ({
	data() {
		return {
			style,
		};
	},
	template: `<farm-col>
	<farm-col :style="style">col</farm-col>
	</farm-col>`,
});

export const Cols = () => ({
	data() {
		return {
			style,
			items
		};
	},
	template: `<farm-row>
				<farm-col v-for="item in items" :key="'col_' + item" :cols="item + 1" :style="style">{{item + 1}}</farm-col>
			</farm-row>`,
});

export const Xl = () => ({
	data() {
		return {
			style,
			items
		};
	},
	template: `<farm-row>
			<farm-col v-for="item in items" :key="'xl_' + item" :xl="item + 1" :style="style">{{item + 1}}</farm-col>
		</farm-row>`,
});

export const Lg = () => ({
	data() {
		return {
			style,
			items
		};
	},
	template: `<farm-row>
			<farm-col v-for="item in items" :key="'lg_' + item" :lg="item + 1" :style="style">{{item + 1}}</farm-col>
		</farm-row>`,
});

export const Md = () => ({
	data() {
		return {
			style,
			items
		};
	},
	template: `<farm-row>
			<farm-col v-for="item in items" :key="'md_' + item" :md="item + 1" :style="style">{{item + 1}}</farm-col>
		</farm-row>`,
});

export const Sm = () => ({
	data() {
		return {
			style,
			items
		};
	},
	template: `<farm-row>
			<farm-col v-for="item in items" :key="'sm_' + item" :sm="item + 1" :style="style">{{item + 1}}</farm-col>
		</farm-row>`,
});

export const Xs = () => ({
	data() {
		return {
			style,
			items
		};
	},
	template: `<farm-row>
			<farm-col v-for="item in items" :key="'xs_' + item" :xs="item + 1" :style="style">{{item + 1}}</farm-col>
		</farm-row>`,
});

export const Combination = () => ({
	data() {
		return {
			style,
		};
	},
	template: `<div>
		<farm-col cols="9" lg="5" md="4" sm="3" :style="style">lg: 5 - md: 4 - sm: 3</farm-col>
	</div>`,
});
export const TagP = () => ({
	template: '<farm-col tag="p">col</farm-col>',
});

export const NoGutters = () => ({
	data() {
		return {
			style,
		};
	},
	template: '<farm-col :no-gutters="true" :style="style">col</farm-col>',
});

export const AlignSelf = () => ({
	data() {
		return {
			style,
			aligns,
		};
	},
	template: `
		<farm-row style="height: 150px">
			<farm-col :style="style" v-for="align in aligns" :key="align" :align-self="align">{{ align }}</farm-col>
	</farm-row>`,
});

export const Offsets = () => ({
	data() {
		return {
			style,
			items
		};
	},
	template: `<farm-box>
		<farm-row>
			<farm-col :style="style" md="1" offset-md="3">offset-md 3</farm-col>
			<farm-col :style="style" md="1" offset-md="1">offset-md 1</farm-col>
		</farm-row>
		<br />
		<farm-row>
			<farm-col :style="style" md="1" offset-sm="1">offset-sm 1</farm-col>
			<farm-col :style="style" md="1" offset-sm="4">offset-sm 4</farm-col>
			<farm-col :style="style" md="1" offset-sm="2">offset-sm 2</farm-col>
		</farm-row>
		<br />
		<farm-row>
			<farm-col :style="style" md="1" offset-sm="1" offset-md="3">offset-sm 1 md 3</farm-col>
		</farm-row>
		<br />
		<farm-row>
			<farm-col :style="style" md="1" offset="1">offset 1</farm-col>
			<farm-col :style="style" md="1" offset="1" offset-md="0">offset md 0</farm-col>
		</farm-row>
	</farm-box>`,
});