import CardContent from './CardContent.vue';

export default {
	title: 'Surfaces/Card/CardContent',
	component: CardContent,
	parameters: {
		docs: {
			description: {
				component: `Card Content<br />
				selector: <em>farm-card-content</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: `
        <farm-card-content>
            Conteúdo do Card Content
        </farm-card-content>
    `,
});

export const Gutters = () => ({
	data() {
		return { gutters: ['none', 'xs', 'sm', 'vuetify', 'md', 'lg', 'xl'] };
	},
	template: `<div style="width: 480px;">
		<farm-card-content v-for="gutter in gutters" :key="gutter" style="margin-bottom: 16px" :gutter="gutter">
			Content with {{ gutter }} gutter
		</farm-card-content>
    </div>`,
});

export const Background = () => ({
	data() {
		return { bgs: ['base', 'lighten', 'white'] };
	},
	template: `<div style="width: 480px;">
		<farm-card-content v-for="bg in bgs" :key="bg" style="margin-bottom: 16px" :background="bg">
			Content with {{ bg }} background
		</farm-card-content>
    </div>`,
});
