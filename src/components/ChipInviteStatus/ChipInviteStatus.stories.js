import ChipInviteStatus from './ChipInviteStatus.vue';

export default {
	title: 'API/Onboarding/ChipInviteStatus',
	component: ChipInviteStatus,
};

export const Primary = () => ({
	components: { ChipInviteStatus },
	template: `<div style="width: 120px;">
        <ChipInviteStatus :status="10" />
        <ChipInviteStatus :status="11" />
        <ChipInviteStatus :status="12" />
        <ChipInviteStatus :status="13" />
        <ChipInviteStatus :status="14" />
        <ChipInviteStatus :status="15" />
        <ChipInviteStatus :status="16" />
    </div>`,
});

Primary.storyName = 'Básico';
