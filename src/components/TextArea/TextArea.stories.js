import { withDesign } from 'storybook-addon-designs';
import TextArea from './TextArea.vue';

export default {
	title: 'Form/TextArea',
	component: TextArea,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Text Area<br />
				selector: <em>farm-textarea</em><br />
				`,
			},
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/jnZXo2e0nRJ3fVXl4Et8t4/%E2%9C%8D-Design-System-%7C-BACKUP-(10%2F10%2F2022)?node-id=2491%3A4487',
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	data() {
		return {
			v: 'input text',
		};
	},
	template: `<div style="width: 480px;">
		<farm-textarea v-model="v" />
		v-model: {{ v }}
	</div>`,
});
