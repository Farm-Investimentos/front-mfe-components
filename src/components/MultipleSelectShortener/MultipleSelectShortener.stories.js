import MultipleSelectShortener from './MultipleSelectShortener';

export default {
	title: 'API/MultipleSelectShortener',
	component: MultipleSelectShortener,
};

export const Primary = () => ({
	components: { MultipleSelectShortener },
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
	components: { MultipleSelectShortener },
	data() {
		return {
			items: [
				{
					id: 0,
					label: `Convidar`
				},
			],
		};
	},
	template: '<MultipleSelectShortener :item="{...items}" :index="1" :itemsLength="3"/>',
});

Primary.storyName = 'Básico';
Secondary.storyName = 'Multiplos';
