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
	template: `
		<farm-card>
		Card content
		</farm-card>
	`,
});

export const Events = () => ({
	methods: {
		handleEvent(type) {
			alert(type);
		},
	},
	template: `
		<farm-card
			@click.stop="handleEvent('click')"
		>
		Card content
		</farm-card>
	`,
});
