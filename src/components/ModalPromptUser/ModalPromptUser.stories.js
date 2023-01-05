import { withDesign } from 'storybook-addon-designs';
import ModalPromptUser from './ModalPromptUser.vue';

export default {
	title: 'Interactions/ModalPromptUser',
	component: ModalPromptUser,
	decorators: [withDesign],
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `Modal Prompt User to Confirm<br />
				selector: <em>farm-prompt-user</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>`,
			},
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/1f84J4m1IBghWhozQvdyyt/%E2%9C%8D---Design-System?node-id=1%3A7',
		},
	},
};

export const Primary = () => ({
	data() {
		return {
			showPrompt: false,
		};
	},
	template: `<div>
		<farm-prompt-user match="CONFIRMAR" title="Título" subtitle="Digite CONFIRMAR para habilitar" v-model="showPrompt" />
			click:
			<farm-btn color="primary" @click="showPrompt = true;">
			reabrir
			</farm-btn>
		</div>`,
});

export const Error = () => ({
	data() {
		return {
			showPrompt: false,
		};
	},
	template: `<div>
		<farm-prompt-user match="REMOVER" title="Título" subtitle="Digite REMOVER para habilitar" v-model="showPrompt" confirmColor="error" confirmLabel="Remover" />
			<farm-btn color="primary" @click="showPrompt = true;">
			reabrir
			</farm-btn>
		</div>`,
});


export const ButtonLabels = () => ({
	data() {
		return {
			showPrompt: false,
		};
	},
	template: `<div>
		<farm-prompt-user
			match="CONFIRMAR"
			title="Título"
			subtitle="Digite CONFIRMAR para habilitar"
			confirmLabel="SIM"
			closeLabel="NÃO"
			v-model="showPrompt"
		/>
			click:
			<farm-btn @click="showPrompt = true;">
			reabrir
			</farm-btn>
		</div>`,
});

export const Slot = () => ({
	data() {
		return {
			showPrompt: false,
		};
	},
	template: `<div>
		<farm-prompt-user match="CONFIRMAR" title="Título" subtitle="" v-model="showPrompt">
		<template v-slot:subtitle>
			<farm-caption>Using caption and <farm-chip dense>chip</farm-chip></farm-caption>
			<br />
			Digite <strong>CONFIRMAR</strong> para habilitar
		</template>
		</farm-prompt-user>
			click:
			<farm-btn color="primary" @click="showPrompt = true;">
			reabrir
			</farm-btn>
		</div>`,
});