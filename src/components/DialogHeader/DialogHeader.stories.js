import DialogHeader from './DialogHeader.vue';

export default {
	title: 'API/Dialog/DialogHeader',
	component: DialogHeader,
};

export const Primary = () => ({
	components: { DialogHeader },
	template: '<div style="max-width: 480px; position: relative;"><DialogHeader title="Título do header" /></div>',
});

export const Secondary = () => ({
	components: { DialogHeader },
	template: `<div style="max-width: 480px; position: relative;"><DialogHeader title="Título do header" iconTitle="calendar" /></div>`,
});

Primary.storyName = 'Básico';
Secondary.storyName = 'Com ícone';
