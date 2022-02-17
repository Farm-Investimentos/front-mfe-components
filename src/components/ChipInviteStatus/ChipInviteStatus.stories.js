import ChipInviteStatus from './ChipInviteStatus.vue';

export default {
	title: 'Example/Onboarding/ChipInviteStatus',
	component: ChipInviteStatus,
};

export const Primary = () => ({
	components: { ChipInviteStatus },
	template: `<div style="width: 120px;">
        <ChipInviteStatus status="CONVIDAR" />
        <ChipInviteStatus status="CONVIDADO" />
        <ChipInviteStatus status="INCOMPLETO" />
        <ChipInviteStatus status="CONCLUIDO" />
        <ChipInviteStatus status="FALHA/ERRO" />
    </div>`,
});

Primary.storyName = 'Básico';
