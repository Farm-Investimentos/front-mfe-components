import MainFilter from './MainFilter.vue';

export default {
	title: 'Form/MainFilter',
	component: MainFilter,
};

export const Primary = () => ({
	template: '<farm-form-mainfilter />',
});

export const Secondary = () => ({
	template: '<farm-form-mainfilter :hasExtraFilters="false" />',
});

export const CustomLabel = () => ({
	template: '<farm-form-mainfilter label="Custom" />',
});


export const MainFilters = () => ({
	data() {
		return {
			showFilters: false,
			items: [1, 2, 3, 4, 5],
		};
	},
	template: `<div style="max-width: 480px">
		<farm-form-mainfilter @onClick="showFilters = !showFilters" :showFilters="showFilters" />
        <section v-if="showFilters">
            <v-select :items="items" />
        </section>
	</div>`,
});
