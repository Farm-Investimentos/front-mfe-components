<template>
	<div class="collapsible">
		<div class="collapsible-header" @click="onToggleCollapsible(status)">
			<div class="collapsible-header-content-title">
				<div class="collapsible-icon" v-if="icon !== ''">
					<v-icon>mdi-{{ icon }}</v-icon>
				</div>
				<h3 class="collapsible-title">
					{{ title }}
				</h3>
			</div>
			<div class="collapsible-header-content-icon">
				<v-icon v-if="!status">mdi-menu-down</v-icon>
				<v-icon v-if="status">mdi-menu-up</v-icon>
			</div>
		</div>
		<transition name="fade">
			<div class="collapsible-body" v-show="status">
				<slot></slot>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-collapsible',
	props: {
		/**
		 * Title from header
		 */
		title: {
			type: String,
			required: true,
		},
		/**
		 * Icon from header
		 */
		icon: {
			type: String,
			default: '',
		},
		/**
		 * Collapsible should start open or close by default is close
		 */
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
	methods: {
		onToggleCollapsible(status: boolean): void {
			this.status = !status;
		},
	},
});
</script>

<style lang="scss" scoped>
@import './Collapsible.scss';
</style>
