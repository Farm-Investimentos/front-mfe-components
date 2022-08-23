import Typography from './Typography';
import sizes from '../../configurations/sizes';
import colors from '../../configurations/colors';

export default {
	title: 'Typography/Atom',
	component: Typography,
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
	template: '<farm-typography type="legenda">Typography</farm-typography>',
});

export const Bold = () => ({
	components: { 'farm-typography': Typography },
	template: '<farm-typography bold>Typography</farm-typography>',
});

export const Italic = () => ({
	components: { 'farm-typography': Typography },
	template: '<farm-typography italic>Typography</farm-typography>',
});

export const Underline = () => ({
	components: { 'farm-typography': Typography },
	template: '<farm-typography underline>Typography</farm-typography>',
});

export const LineThrough = () => ({
	components: { 'farm-typography': Typography },
	template: '<farm-typography line-through>Typography</farm-typography>',
});

export const Weight = () => ({
	components: { 'farm-typography': Typography },
	data() {
		return {
			weights: [100, 200, 300, 400, 500, 600, 700],
		};
	},
	template: `<div>
		<farm-typography v-for="w in weights" :weight="w" :key="w">Typography - weight {{ w }}</farm-typography>
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
			:key="s"
		>
			Typography - size {{ s }}
		</farm-typography>
	</div>`,
});

export const CustomSizes = () => ({
	components: { 'farm-typography': Typography },
	data() {
		return {
			sizes: ['11px', '1.12876rem', '48px'],
		};
	},
	template: `<div>
		<farm-typography
			v-for="s in sizes"
			:size="s"
			:key="s"
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

export const Tags = () => ({
	components: { 'farm-typography': Typography },
	data() {
		return {
			tags: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'legend', 'label', 'li'],
		};
	},
	template: `<div>
		<farm-typography
			v-for="t in tags"
			:tag="t"
			:key="t"
		>
			Typography - tag {{ t }}
		</farm-typography>
	</div>`,
});

export const LineHeight = () => ({
	components: { 'farm-typography': Typography },
	data() {
		return {
			heights: ['12px', '16px', '20px', '24px', '32px', '40px'],
		};
	},
	template: `<div>
		<farm-typography
			v-for="h in heights"
			tag="p"
			:lineHeight="h"
			:key="h"
			style="border: 1px solid var(--v-gray-lighten2); padding: 8px;"
		>
			Typography - height {{ h }}<br />
			Lorem ipsum dolor sit amet, consectetur adipiscing elit,
			sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		</farm-typography>
	</div>`,
});
