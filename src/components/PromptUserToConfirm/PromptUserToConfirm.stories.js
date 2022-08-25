import PromptUserToConfirm from './PromptUserToConfirm';

export default {
	title: 'INteractions/PromptUserToConfirm',
	component: PromptUserToConfirm,
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `Prompt User to Confirm<br />
				selector: <em>farm-prompusertoconfirm</em>`,
			},
		},
	},
};

export const Primary = () => ({
	data() {
		return {
			model: {},
		};
	},
	template: `<div style="max-width: 320px"><farm-prompusertoconfirm v-model="model"/>
	match: {{ model }}
	</div>`,
});

export const CustomTitle = () => ({
	template: '<div style="max-width: 320px"><farm-prompusertoconfirm title="Custom" /></div>',
});

export const CustomMatchInput = () => ({
	data() {
		return {
			model: {},
		};
	},
	template: `<div style="max-width: 320px">
		<farm-prompusertoconfirm
			title="Custom match input: CONFIRMAR"
			match="CONFIRMAR"
			v-model="model" />
		match: {{ model }}
	</div>`,
});
