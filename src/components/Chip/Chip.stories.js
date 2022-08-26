import Chip from './Chip.vue';
import('./Chip.stories.scss');

const colors = ['secondary', 'info', 'error'];
const variations = ['darken', 'lighten'];

export default {
	title: 'Display/Chips',
	component: Chip,
};

export const Primary = () => ({
	template: `<div>
		<farm-chip color="info">Chip</farm-chip>
	</div>`,
});

export const Colors = () => ({
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