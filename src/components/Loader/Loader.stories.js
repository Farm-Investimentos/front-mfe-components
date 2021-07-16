import Loader from './Loader.vue';

export default {
    title: 'Example/Loader',
    component: Loader,
};

export const Primary = () => ({
    components: { Loader },
    template: '<Loader />',
});

Primary.storyName = 'Básico';
