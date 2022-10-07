import { withDesign } from 'storybook-addon-designs';
import TextFieldV2 from './TextFieldV2.vue';

export default {
	title: 'Form/TextFieldV2',
	component: TextFieldV2,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Text field v2<br />
				selector: <em>farm-texfield-v2</em><br />
				<span style="color: var(--farm-extra-1-base);">development</span>
				`,
			},
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/1f84J4m1IBghWhozQvdyyt/%E2%9C%85---Design-System-%7C-v1?node-id=1503%3A227',
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	data() {
		return {
			v: 'some text',
		};
	},
	template: `<div style="width: 480px">
		<farm-textfield-v2 v-model="v" />
		value: {{ v }}
	</div>`,
});
