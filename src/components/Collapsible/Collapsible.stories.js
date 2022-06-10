import Collapsible from './Collapsible.vue';

export default {
	title: 'API/Collapsible',
	component: Collapsible,
};

export const Default = () => ({
	components: { Collapsible },
	template: '<Collapsible title="Example" icon="home">Text or Components</Collapsible>',
});

export const WithoutIcon = () => ({
	components: { Collapsible },
	template: '<Collapsible title="Example without icon">Text or Components</Collapsible>',
});

Default.storyName = 'Básico';
WithoutIcon.storyName = 'Sem ícone';
