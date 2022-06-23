import RadioButton from './RadioButton.vue';

export default {
	title: 'API/RadioButton',
	component: RadioButton,
};

export const Primary = () => ({
	components: { RadioButton },
	data() {
		return {
			value: null,
			label: ['teste', 'teste']
		};
	},
	template: `<div>
			<RadioButton v-model="value" :labels="label">
			</RadioButton>
		</div>`,
});

export const Secondary = () => ({
	components: { RadioButton },
	data() {
		return {
			value: 2,
			label: ['teste', 'teste', 'teste', 'teste']
		};
	},
	template: `<div>
			<RadioButton v-model="value" :labels="label">
			</RadioButton>
		</div>`,
});

export const Tertiary = () => ({
	components: { RadioButton },
	data() {
		return {
			value: 2,
			label: ['teste', 'teste', 'teste', 'teste']
		};
	},
	template: `<div>
			<RadioButton v-model="value" isBlock :labels="label">
			</RadioButton>
		</div>`,
});

Primary.storyName = 'Basic';
Secondary.storyName = 'Selected Horizontal';
Tertiary.storyName = 'Selected Vertical';