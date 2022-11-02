import PromptUserToConfirm from './PromptUserToConfirm';

export default {
	title: 'Interactions/PromptUserToConfirm',
	component: PromptUserToConfirm,
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `Prompt User to Confirm<br />
				selector: <em>farm-promptusertoconfirm</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>`,
			},
		},
	},
};

export const Primary = () => ({
	data() {
		return {
			model: false,
		};
	},
	template: `<div style="max-width: 320px"><farm-promptusertoconfirm v-model="model"/>
	match: {{ model }}
	</div>`,
});

export const CustomTitle = () => ({
	data() {
		return {
			model: false,
		};
	},
	template: '<div style="max-width: 320px"><farm-promptusertoconfirm title="Custom"  v-model="model" /></div>',
});

export const CustomMatchInput = () => ({
	data() {
		return {
			model: false,
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
