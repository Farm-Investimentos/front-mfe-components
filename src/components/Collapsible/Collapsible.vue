<template>
	<farm-card class="collapsible">
		<farm-card-content gutter="md" :class="{ 'pb-0': customBody }">
			<div
				v-if="!customHeader"
				class="collapsible__header"
				@click="onToggleCollapsible(status)"
			>
				<div
					class="collapsible__content-title"
					:class="{ 'full-width': custom, 'pb-4': customBody }"
				>
					<div
						class="collapsible__icon collapsible__icon--main"
						v-if="icon !== '' && !custom"
					>
						<farm-icon size="md" :color="colorIcon">
							{{ icon }}
						</farm-icon>
					</div>
					<farm-heading type="6" color="black" v-if="!custom">
						{{ title }}
					</farm-heading>
					<farm-btn
						outlined
						class="ml-6"
						v-if="hasButton && !custom"
						:disabled="disabledButton"
						@click.stop="onClick()"
					>
						{{ labelButton }}
					</farm-btn>
					<slot name="custom" v-if="custom"></slot>
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

			<div
				v-if="customHeader"
				class="collapsible__header--custom"
				:class="plain ? 'collapsible__header--plain' : ''"
				@click="onToggleCollapsible(status)"
			>
				<slot name="header-content"></slot>
				<div v-if="!plain" class="collapsible__content-right--custom">
					<div class="collapsible__icon collapsible__icon--arrow">
						<farm-icon size="md" color="primary">
							{{ arrowIcon }}
						</farm-icon>
					</div>
				</div>
			</div>

			<transition v-if="customBody" name="fade">
				<div v-show="status">
					<slot></slot>
				</div>
			</transition>

			<transition v-else name="fade">
				<div class="collapsible__body" v-show="status">
					<slot></slot>
				</div>
			</transition>
		</farm-card-content>
	</farm-card>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';

export default defineComponent({
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
		 * has button
		 */
		hasButton: {
			type: Boolean,
			default: false,
		},
		/**
		 * plain layout
		 */
		plain: {
			type: Boolean,
			default: false,
		},
		/**
		 * export button disabled toggle
		 */
		disabledButton: {
			type: Boolean,
			default: false,
		},
		/**
		 * export button emit
		 */
		onExport: {
			type: Boolean,
			default: false,
		},
		/**
		 * label button
		 */
		labelButton: {
			type: String,
			default: 'Exportar',
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
		colorIcon: {
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
			default: 'secondary-green',
		},
		/**
		 * Is dense
		 */
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
		/**
		 * Is variation
		 */
		variation: {
			type: String,
			default: 'base',
		},
		custom: {
			type: Boolean,
			default: false,
		},
		customBody: {
			type: Boolean,
			default: false,
		},
		customHeader: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			status: this.$props.open,
		};
	},

	computed: {
		arrowIcon(): string {
			return this.status ? 'menu-up' : 'menu-down';
		},
	},
	methods: {
		onToggleCollapsible(status: boolean): void {
			this.status = !status;
			this.$emit('open', this.status);
		},
		onClick(): void {
			this.$emit('onClick');
		},
	},
});
</script>

<style lang="scss" scoped>
@import './Collapsible.scss';
</style>
