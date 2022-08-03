import { Typography } from '../main.ts';
import sizes from '../configurations/sizes';
import colors from '../configurations/colors';

export default {
	title: 'Examples/Typography',
	parameters: {
		docs: {
			description: {
				component: `Typography<br />selector: <em>farm-typography</em>`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { 'farm-typography': Typography },
	template: '<farm-typography>Typography</farm-typography>',
});

export const Bold = () => ({
	components: { 'farm-typography': Typography },
	template: '<farm-typography bold>Typography</farm-typography>',
});

export const Italic = () => ({
	components: { 'farm-typography': Typography },
	template: '<farm-typography italic>Typography</farm-typography>',
});

export const Weight = () => ({
	components: { 'farm-typography': Typography },
	data() {
		return {
			weights: [100, 200, 300, 400, 500, 600, 700],
		};
	},
	template: `<div>
		<farm-typography v-for="w in weights" :weight="w">Typography - weight {{ w }}</farm-typography>
	</div>`,
});

const newSizes = [...sizes];
newSizes.splice(3, 0, 'default');

export const Sizes = () => ({
	components: { 'farm-typography': Typography },
	data() {
		return {
			sizes: newSizes,
		};
	},
	template: `<div>
		<farm-typography
			v-for="s in sizes"
			:size="s"
		>
			Typography - size {{ s }}
		</farm-typography>
	</div>`,
});

export const CustomSizes = () => ({
	components: { 'farm-typography': Typography },
	data() {
		return {
			sizes: ['11px', '1.25rem', '48px'],
		};
	},
	template: `<div>
		<farm-typography
			v-for="s in sizes"
			:size="s"
		>
			Typography - size {{ s }}
		</farm-typography>
	</div>`,
});

export const Colors = () => ({
	components: { 'farm-typography': Typography },
	data() {
		return {
			colors,
		};
	},
	template: `<div>
		<farm-typography
			v-for="color in colors"
			:color="color"
			:key="color"
		>
			Typography - color {{ color }}
		</farm-typography>
	</div>`,
});
