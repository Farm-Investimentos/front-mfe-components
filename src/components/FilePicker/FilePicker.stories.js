import FilePicker from './FilePicker.vue';

export default {
    title: 'Example/FilePicker',
    component: FilePicker,
};

export const Primary = () => ({
    components: { FilePicker },
    template: '<FilePicker />',
});

Primary.storyName = 'Básico';
