import ModalPromptUser from './ModalPromptUser.vue';

export default {
	title: 'Example/ModalPromptUser',
	component: ModalPromptUser,
};

export const Primary = () => ({
	components: { ModalPromptUser },
	template:
		'<ModalPromptUser match="CONFIRMAR" title="Título" subtitle="Digite CONFIRMAR para habilitar" :value="true" />',
});

Primary.storyName = 'Básico';
