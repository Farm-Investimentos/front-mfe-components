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
			items: [
				{ label: 'label', value: 1 },
				{ label: 'label', value: 2 },
			],
		};
	},
	template: `<div>
			<RadioButton v-model="value" :items="items">
			</RadioButton>
		</div>`,
});

export const Secondary = () => ({
	components: { RadioButton },
	data() {
		return {
			value: 2,
			items: [
				{ label: 'label', value: 1 },
				{ label: 'label', value: 2 },
				{ label: 'label', value: 3 },
				{ label: 'label', value: 4 },
			],
		};
	},
	template: `<div>
			<RadioButton v-model="value" :items="items">
			</RadioButton>
		</div>`,
});

export const Tertiary = () => ({
	components: { RadioButton },
	data() {
		return {
			value: 2,
			items: [
				{ label: 'label', value: 1 },
				{ label: 'label', value: 2 },
				{ label: 'label', value: 3 },
				{ label: 'label', value: 4 },
			],
		};
	},
	template: `<div>
			<RadioButton v-model="value" isBlock :items="items">
			</RadioButton>
		</div>`,
});

Primary.storyName = 'Basic';
Secondary.storyName = 'Selected Horizontal';
Tertiary.storyName = 'Selected Vertical';
