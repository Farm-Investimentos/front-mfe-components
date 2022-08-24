import ToggleButton from './ToggleButton.vue';

export default {
	title: 'Buttons/ToggleButton',
	component: ToggleButton,
};

export const Primary = () => ({
	template: '<farm-btn-toggle label="Botão" />',
});

export const Secondary = () => ({
	template: '<farm-btn-toggle label="Botão" position="right" />',
});

export const Opened = () => ({
	template: '<farm-btn-toggle label="Botão" :pressed="true" />',
});
