import CardContent from './CardContent.vue';

export default {
	title: 'Surfaces/Card/CardContent',
	component: CardContent,
	parameters: {
		docs: {
			description: {
				component: `Card Content<br />
				selector: <em>farm-card-content</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { 'farm-card-content': CardContent },
	template: `
        <farm-card-content>
            Conteúdo do Card Content
        </farm-card-content>
    `,
});
