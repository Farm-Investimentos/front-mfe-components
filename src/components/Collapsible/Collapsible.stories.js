import Collapsible from './Collapsible.vue';

export default {
	title: 'API/Collapsible',
	component: Collapsible,
};

export const Default = () => ({
	components: { Collapsible },
	template: '<Collapsible title="test" icon="home">Text or Components</Collapsible>',
});

Default.storyName = 'Básico';
