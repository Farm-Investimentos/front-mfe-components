import Tooltip from './Tooltip.vue';
import Icon from '../Icon';

export default {
	title: 'API/Tooltip',
	component: Tooltip,
};

export const Primary = () => ({
	components: { 'farm-tooltip': Tooltip, 'farm-icon': Icon },
	template: `<div style="padding-left: 80px; padding-top: 80px;">
    <farm-tooltip>
        some <em>sample</em> text
        <br />with line break
        <br />and a long text that does not fit
        <template v-slot:activator="{ on, attrs }">
            this is the activator
            <farm-icon :color="color" size="sm">help-circle</farm-icon>
        </template>
    </farm-tooltip>
    </div>`,
});

Primary.storyName = 'Padrão';
