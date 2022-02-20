import AlertReload from './AlertReload.vue';

export default {
    title: 'API/AlertReload',
    component: AlertReload,
};

export const Primary = () => ({
    components: { AlertReload },
    template: '<AlertReload label="Ocorreu um erro ao carregar as informações" />',
});

Primary.storyName = 'Básico';
