import RangeDatePicker from './RangeDatePicker';

export default {
	title: 'Example/Form/RangeDatePicker',
	component: RangeDatePicker,
};

export const Primary = () => ({
	components: { RangeDatePicker },
	template: '<RangeDatePicker inputId="input-custom-id" />',
});

export const Secondary = () => ({
	components: { RangeDatePicker },
	template: `<RangeDatePicker inputId="input-custom-id" :value="['2021-08-01', '2021-08-05']" />`,
});

Primary.storyName = 'Básico';
Secondary.storyName = 'Data inicial';
