import { withDesign } from 'storybook-addon-designs';
import RangeDatePicker from './RangeDatePicker';

export default {
	title: 'Form/RangeDatePicker',
	component: RangeDatePicker,
	decorators: [withDesign],
};

export const Primary = () => ({
	components: { RangeDatePicker },
	template: '<RangeDatePicker inputId="input-custom-id" />',
});

export const Secondary = () => ({
	components: { RangeDatePicker },
	template: `<RangeDatePicker inputId="input-custom-id" :value="['2021-08-01', '2021-08-05']" />`,
});

export const MinMax = () => ({
	components: { RangeDatePicker },
	template: `<RangeDatePicker inputId="input-custom-id" min="2022-01-17" max="2022-02-15" />`,
});

const parameters = {
	design: {
		type: 'figma',
		url:
			'https://www.figma.com/file/1f84J4m1IBghWhozQvdyyt/%E2%9C%8D---Design-System?node-id=1503%3A810',
	},
};

Primary.story = {
	name: 'Básico',
	parameters
};
Secondary.story = {
	name: 'Data Inicial',
	parameters
};
MinMax.story = {
	name: 'Data Mínima e Máxima',
	parameters
};
