import { withDesign } from 'storybook-addon-designs';
import { MainFilter } from '../main';

export default {
	title: 'Examples/MainFilter',
	decorators: [withDesign],
	component: MainFilter,
};

export const MainFilters = () => ({
	/*
	 * How to toggle filters
	 */
	components: {
		MainFilter,
	},
	data() {
		return {
			showFilters: false,
			items: [1, 2, 3, 4, 5],
		};
	},
	template: `<div style="max-width: 480px">
	<MainFilter @onClick="showFilters = !showFilters" :showFilters="showFilters" />
        <section v-if="showFilters">
            <v-select :items="items" />
        </section>
	</div>`,
});
