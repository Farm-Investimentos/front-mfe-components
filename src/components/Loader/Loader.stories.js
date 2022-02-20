import Loader from './Loader.vue';

export default {
    title: 'API/Loader',
    component: Loader,
};

export const Primary = () => ({
    components: { Loader },
    template: '<Loader />',
});

Primary.storyName = 'Básico';
