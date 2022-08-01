import Tooltip from './Tooltip.vue';

export default {
	title: 'API/Tooltip',
	component: Tooltip,
};

export const Primary = () => ({
	components: { 'farm-tooltip': Tooltip },
	template: `<div style="padding-left: 80px; padding-top: 80px;">
    <farm-tooltip>
        some <em>sample</em> text
        <br />with line break
        <br />and a long text that does not fit
    </farm-tooltip>
    </div>`,
});

Primary.storyName = 'Padrão';
