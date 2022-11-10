import { withDesign } from 'storybook-addon-designs';
import Select from './Select.vue';

export default {
	title: 'Form/SelectV2',
	component: Select,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Select<br />
				selector: <em>farm-select</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
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
			v: 1,
			items: [
				{ value: 1, text: ' value 1' },
				{ value: 2, text: ' value 2' },
				{ value: 3, text: ' value 3' },
			],
		};
	},
	template: `<div style="width: 480px">
		<farm-select v-model="v" :items="items" />
		v-model: {{ v }}
	</div>`,
});
