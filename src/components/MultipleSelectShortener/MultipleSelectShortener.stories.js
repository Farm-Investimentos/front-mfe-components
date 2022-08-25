import MultipleSelectShortener from './MultipleSelectShortener';

export default {
	title: 'Display/MultipleSelectShortener',
	component: MultipleSelectShortener,
};

export const Primary = () => ({
	data() {
		return {
			items: {
				id: 0,
				label: `Convidar`,
			},
		};
	},
	template: '<MultipleSelectShortener :item="items" :index="0" :itemsLength="1"/>',
});

export const Secondary = () => ({
	data() {
		return {
			items: [
				{
					id: 0,
					label: `Convidar`,
				},
			],
		};
	},
	template: '<MultipleSelectShortener :item="{...items}" :index="1" :itemsLength="3"/>',
});
