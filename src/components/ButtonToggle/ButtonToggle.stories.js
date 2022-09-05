import ButtonToggle from './ButtonToggle.vue';

export default {
	title: 'Interactions/Button Toggle',
	component: ButtonToggle,
	parameters: {
		docs: {
			description: {
				component: `Button Toggle<br />
				selector: <em>farm-button-toggle</em>
				`,
			},
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p62YDSTfWg0Mcnf5APfdvI/%E2%9C%8D-Design-System-%7C-v2?node-id=3772%3A5973',
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	data() {
		return {
			buttons: [{ label: 'label 1' }, { label: 'label 2' }, { label: 'label 3' }],
		};
	},
	template: `
    <div>
        <farm-button-toggle :buttons="buttons" />
    </div>`,
});

export const BindModel = () => ({
	data() {
		return {
			buttons: [{ label: 'label 1' }, { label: 'label 2' }, { label: 'label 3' }],
			currentItem: 1,
		};
	},
	template: `
    <div>
        <farm-button-toggle
            v-model="currentItem"
            :buttons="buttons"
        />
        selected item: {{ currentItem }}
    </div>`,
});
