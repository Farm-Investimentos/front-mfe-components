<template>
	<farm-card class="collapsible">
		<farm-card-content gutter="md">
			<div class="collapsible__header" @click="onToggleCollapsible(status)">
				<div class="collapsible__content-title">
					<div class="collapsible__icon collapsible__icon--main" v-if="icon !== ''">
						<farm-icon size="md">
							{{ icon }}
						</farm-icon>
					</div>
					<farm-typography bold size="lg">
						{{ title }}
					</farm-typography>
				</div>
				<div class="collapsible__icon collapsible__icon--arrow">
					<farm-icon size="md" color="primary">
						{{ arrowIcon }}
					</farm-icon>
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
import Vue from 'vue';

export default Vue.extend({
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
		 * Icon
		 */
		icon: {
			type: String,
			default: '',
		},
		open: {
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
	},
});
</script>

<style lang="scss" scoped>
@import './Collapsible.scss';
</style>
