import ModalPromptUser from './ModalPromptUser.vue';

export default {
	title: 'API/ModalPromptUser',
	component: ModalPromptUser,
};

export const Primary = () => ({
	components: { ModalPromptUser },
	data() {
		return {
			showPrompt: true,
		};
	},
	template: `<div>
		<ModalPromptUser match="CONFIRMAR" title="Título" subtitle="Digite CONFIRMAR para habilitar" v-model="showPrompt" />
			<v-btn color="secondary" @click="showPrompt = true;">
			reabrir
			</v-btn>
		</div>`,
});
export const Error = () => ({
	components: { ModalPromptUser },
	data() {
		return {
			showPrompt: true,
		};
	},
	template: `<div>
		<ModalPromptUser match="REMOVER" title="Título" subtitle="Digite REMOVER para habilitar" v-model="showPrompt" confirmColor="error" confirmLabel="Remover" />
			<v-btn color="secondary" @click="showPrompt = true;">
			reabrir
			</v-btn>
		</div>`,
});

Primary.story = {
	name: 'Básico',
	parameters: {
		design: {
			type: 'figma',
			url:
				'https://www.figma.com/file/1f84J4m1IBghWhozQvdyyt/%E2%9C%8D---Design-System?node-id=1%3A7',
		},
	},
};

Error.story = {
	name: 'Error',
	parameters: {
		design: {
			type: 'figma',
			url:
				'https://www.figma.com/file/1f84J4m1IBghWhozQvdyyt/%E2%9C%8D---Design-System?node-id=1%3A7',
		},
	},
};
