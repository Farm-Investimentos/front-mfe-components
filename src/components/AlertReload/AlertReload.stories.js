import AlertReload from './AlertReload.vue';

export default {
	title: 'API/AlertReload',
	component: AlertReload,
};

export const Primary = () => ({
	components: { AlertReload },
	template: `<div style="width: 480px;">
    <AlertReload label="Text" />
    </div>`,
});

Primary.storyName = 'Básico';
