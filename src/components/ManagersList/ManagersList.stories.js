import ManagersList from './ManagersList';

export default {
    title: 'Example/ManagersList',
    component: ManagersList,
};

export const Primary = () => ({
    components: { ManagersList },
    template: '<ManagersList managersString="nome1,nome2,nome3" />',
});


Primary.storyName = 'Básico';
