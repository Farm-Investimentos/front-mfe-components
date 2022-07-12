import TextField from './TextField.vue';

export default {
	title: 'API/Form/TextField',
	component: TextField,
};

export const Primary = () => ({
	components: { 'farm-textfield': TextField },
	data() {
		return {
			v: '',
		};
	},
	template: `<div style="width: 480px">
		<farm-textfield v-model="v" />
		value: {{ v }}
	</div>`,
});

Primary.storyName = 'Basic';
