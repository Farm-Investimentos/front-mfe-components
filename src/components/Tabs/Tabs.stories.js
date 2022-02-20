import Tabs from './Tabs.vue';

export default {
    title: 'API/Tabs',
    component: Tabs,
};

export const Primary = () => ({
    components: { Tabs },
    template: '<Tabs />',
});

Primary.storyName = 'Padrão';
