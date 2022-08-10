import Chip from './Chip.vue';

export default {
	title: 'API/Chip',
	component: Chip,
};

export const Primary = () => ({
	components: { 'farm-chip': Chip },
	template: `<div>
		<farm-chip color="info">Chip</farm-chip>
	</div>`,
});

Primary.storyName = 'Básico';
