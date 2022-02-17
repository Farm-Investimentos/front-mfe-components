<template>
	<v-chip
		small
		:class="
			`status-chip ${
				isFull ? 'status-chip--fullwidth' : ''
			} status-chip-${color} status-chip--onboarding`
		"
	>
		<span :class="`${textColor}--text`">
			{{ label }}
		</span>
	</v-chip>
</template>
<script>
import Vue from 'vue';
const StatusColor = {
	CONVIDAR: 'secondary',
	CONVIDADO: 'yellow',
	INCOMPLETO: 'yellow',
	CONCLUIDO: 'success',
	'FALHA/ERRO': 'error',
};

import VChip from 'vuetify/lib/components/VChip/';

export default Vue.extend({
	name: 'farm-chip-invite',
	components: VChip,
	props: {
		/**
		 * Invite status
		 */
		status: {
			type: String,
			default: '',
		},
		/**
		 * Full width (from parent)
		 */
		isFull: {
			type: Boolean,
			default: true,
		},
	},
	computed: {
		textColor() {
			return this.status === 'CONVIDAR' ? '' : StatusColor[this.status];
		},
		color() {
			return !this.status ? '' : StatusColor[this.status];
		},
		label() {
			return this.status;
		},
	},
});
</script>
<style lang="scss" scoped>
@import './ChipInviteStatus.scss';
</style>
