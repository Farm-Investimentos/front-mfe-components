import { Chip } from '../main';

import('./Chip.stories.scss');

export default {
	title: 'Examples/Chip',
	component: Chip,
};

const colors = ['secondary', 'info', 'error'];
const variations = ['darken', 'lighten'];

export const Colors = () => ({
	components: { 'farm-chip': Chip },
	data() {
		return {
			colors,
		};
	},
	template: `<div class="chips-container">
		<h3>Base Colors</h3>
		<farm-chip 
			v-for="color in colors"
			:key="color"
			:color="color">
				{{ color }}
		</farm-chip>
	</div>`,
});

export const Variations = () => ({
	components: { 'farm-chip': Chip },
	data() {
		return {
			colors,
			variations,
		};
	},
	template: `
	<div>
		<h3>Variations</h3>
		<div class="chips-container" v-for="color in colors">
			<h4>{{ color }}</h4>
			<farm-chip 
				v-for="variation in variations"
				:key="color + '_' + variation"
				:color="color"
				:variation="variation">
					{{ variation }}
			</farm-chip>
		</div>
	</div>`,
});
