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
const StatusLabel = {
	10: 'CONVIDAR',
	11: 'CONVIDADO',
	12: 'INCOMPLETO',
	13: 'CONCLUÍDO',
	14: 'FALHA/ERRO',
	15: 'EM ANÁLISE',
	16: 'EM ANDAMENTO',
};

const StatusColor = {
	10: 'secondary',
	11: 'yellow',
	12: 'yellow',
	13: 'success',
	14: 'error',
	15: 'accent',
	16: 'primary',
};

import VChip from 'vuetify/lib/components/VChip/';

export default Vue.extend({
	name: 'farm-chip-invite',
	components: {
		VChip,
	},
	props: {
		/**
		 * Invite status
		 */
		status: {
			type: Number,
			default: 10,
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
			return this.status === 10 || this.status === 16 ? '' : StatusColor[this.status];
		},
		color() {
			return !this.status ? '' : StatusColor[this.status];
		},
		label() {
			return StatusLabel[this.status];
		},
	},
});
</script>
<style lang="scss" scoped>
@import './ChipInviteStatus.scss';
</style>
