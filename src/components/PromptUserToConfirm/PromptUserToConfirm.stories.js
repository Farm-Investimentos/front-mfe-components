import PromptUserToConfirm from './PromptUserToConfirm';

export default {
	title: 'INteractions/PromptUserToConfirm',
	component: PromptUserToConfirm,
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `Prompt User to Confirm<br />
				selector: <em>farm-promptusertoconfirm</em>`,
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
	template: `<div style="max-width: 320px"><farm-promptusertoconfirm v-model="model"/>
	match: {{ model }}
	</div>`,
});

export const CustomTitle = () => ({
	template: '<div style="max-width: 320px"><farm-promptusertoconfirm title="Custom" /></div>',
});

export const CustomMatchInput = () => ({
	data() {
		return {
			model: {},
		};
	},
	template: `<div style="max-width: 320px">
		<farm-promptusertoconfirm
			title="Custom match input: CONFIRMAR"
			match="CONFIRMAR"
			v-model="model" />
		match: {{ model }}
	</div>`,
});
