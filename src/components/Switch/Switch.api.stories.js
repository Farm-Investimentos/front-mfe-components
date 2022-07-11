import Switch from './Switch';

export default {
	title: 'API/Switch',
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
	<farm-switch v-model="selectedValue" />
	</div>`,
});

Primary.storyName = 'Basic';
