import { withDesign } from 'storybook-addon-designs';
import RangeDatePicker from './RangeDatePicker';

export default {
	title: 'Form/RangeDatePicker',
	component: RangeDatePicker,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Range I put Date Picker<br />
				selector: <em>farm-input-rangedatepicker</em>
				`,
			},
		},
		viewMode: 'docs',
	},
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/1f84J4m1IBghWhozQvdyyt/%E2%9C%8D---Design-System?node-id=1503%3A810',
	},
};

export const Primary = () => ({
	data() {
		return {
			date: [],
		};
	},
	template: `<div style='max-width: 320px'>
	<RangeDatePicker inputId="input-custom-id" v-model="date" />
	date: {{ date }}
	</div>`,
});

export const Secondary = () => ({
	template: `<RangeDatePicker inputId="input-custom-id" :value="['2021-08-01', '2021-08-05']" />`,
});

export const MinMax = () => ({
	template: `<RangeDatePicker inputId="input-custom-id" min="2022-01-17" max="2022-02-15" />`,
});
