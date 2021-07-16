import MainFilter from './MainFilter.vue';

export default {
    title: 'Example/MainFilter',
    component: MainFilter,
};

export const Primary = () => ({
    components: { MainFilter },
    template: '<MainFilter />',
});

Primary.storyName = 'Básico';
