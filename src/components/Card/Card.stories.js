import Card from './Card.vue';

export default {
	title: 'Surfaces/Card',
	component: Card,
	parameters: {
		docs: {
			description: {
				component: `Card<br />
				selector: <em>farm-card</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { 'farm-card': Card },
	template: `
        <farm-card>
			Conteúdo do Card
        </farm-card>
    `,
});
