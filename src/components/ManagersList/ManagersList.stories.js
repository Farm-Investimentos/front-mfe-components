import ManagersList from './ManagersList';

export default {
    title: 'Display/ManagersList',
    component: ManagersList,
};

export const Primary = () => ({
    template: '<farm-managers-list managersString="nome1,nome2,nome3" />',
});
