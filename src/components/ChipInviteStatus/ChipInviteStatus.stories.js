import ChipInviteStatus from './ChipInviteStatus.vue';

export default {
	title: 'Display/Chips/Onboarding/InviteStatus',
	component: ChipInviteStatus,
	parameters: {
		docs: {
			description: {
				component: `Chip Invite Status<br />
					selector: <em>farm-chip-invite</em><br />
					<span style="color: var(--farm-primary-base);">ready for use</span>`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: `<div style="width: 120px;">
        <farm-chip-invite :status="10" />
        <farm-chip-invite :status="11" />
        <farm-chip-invite :status="12" />
        <farm-chip-invite :status="13" />
        <farm-chip-invite :status="14" />
        <farm-chip-invite :status="15" />
        <farm-chip-invite :status="16" />
        <farm-chip-invite :status="17" />
        <farm-chip-invite :status="18" />
    </div>`,
});
