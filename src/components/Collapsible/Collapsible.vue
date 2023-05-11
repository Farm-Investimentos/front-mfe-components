<template>
	<farm-card class="collapsible">
		<farm-card-content gutter="md">
			<div class="collapsible__header" @click="onToggleCollapsible(status)">
				<div class="collapsible__content-title">
					<div class="collapsible__icon collapsible__icon--main" v-if="icon !== ''">
						<farm-icon size="md" color="secondary-green">
							{{ icon }}
						</farm-icon>
					</div>
					<farm-heading type="6" color="black">
						{{ title }}
					</farm-heading>
				</div>
				<div class="collapsible__content-right">
					<div class="collapsible__icon" v-if="showChip">
						<farm-chip
							:color="colorChip"
							:dense="dense"
							:variation="variation"
							:outlined="outlined"
						>
							{{ textChip }}
						</farm-chip>
					</div>
					<div class="collapsible__icon collapsible__icon--arrow">
						<farm-icon size="md" color="primary">
							{{ arrowIcon }}
						</farm-icon>
					</div>
				</div>
			</div>
			<transition name="fade">
				<div class="collapsible__body" v-show="status">
					<slot></slot>
				</div>
			</transition>
		</farm-card-content>
	</farm-card>
</template>

<script lang="ts">
import { computed, PropType, ref, toRefs } from 'vue';

export default {
	name: 'farm-collapsible',

	props: {
		/**
		 * Title
		 */
		title: {
			type: String,
			required: true,
		},
		/**
		 * Icon (from Material Icons)
		 * Example: chart-bar
		 */
		icon: {
			type: String,
			default: '',
		},
		/**
		 * Is open?
		 */
		open: {
			type: Boolean,
			default: false,
		},
		/**
		 * show Chip
		 */
		showChip: {
			type: Boolean,
			default: false,
		},
		/**
		 * text of Chip
		 */
		textChip: {
			type: String,
			default: '',
		},
		/**
		 * color of Chip
		 */
		colorChip: {
			type: String as PropType<
				| 'primary'
				| 'secondary'
				| 'secondary-green'
				| 'secondary-golden'
				| 'neutral'
				| 'info'
				| 'success'
				| 'error'
				| 'warning'
				| 'extra-1'
				| 'extra-2'
			>,
			default: 'primary',
		},
		dense: {
			type: Boolean,
			default: false,
		},
		/**
		 * Is outlined
		 */
		outlined: {
			type: Boolean,
			default: false,
		},
		variation: {
			type: String,
			default: 'base',
		},
	},

	setup(props, { emit }) {
		const { open } = toRefs(props);
		const status = ref(open.value);

		const arrowIcon = computed(() => (status.value ? 'menu-up' : 'menu-down'));

		function onToggleCollapsible(currentStatus: boolean): void {
			status.value = !currentStatus;
			emit('open', status.value);
		}

		return {
			status,
			arrowIcon,
			onToggleCollapsible,
		};
	},
};
</script>

<style lang="scss" scoped>
@import './Collapsible.scss';
</style>
