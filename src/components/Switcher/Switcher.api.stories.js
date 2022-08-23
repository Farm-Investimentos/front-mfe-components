import Switch from './Switcher';

export default {
	title: 'Form/Switcher',
	component: Switch,
};

export const Primary = () => ({
	components: { 'farm-switch': Switch },
	data() {
		return {
			selectedValue: false,
		};
	},
	template: `<div>
	<farm-switch v-model="selectedValue" block />
	</div>`,
});

Primary.storyName = 'Basic';
