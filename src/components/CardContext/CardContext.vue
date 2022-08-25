<template>
	<div
		:class="{
			'card-context': true,
			'height-full': this.full,
			'card-context--outlined': this.outlined,
		}"
	>
		<div class="card-context-header" v-if="isSuccess && title">
			<farm-icon-box v-if="icon" :icon="icon" />
			<div class="card-context-content">
				<p :class="{ 'card-context-title': true, 'card-context-content--bold': bold }">
					{{ title }}
				</p>
			</div>
		</div>
		<div class="card-context-body" v-if="isSuccess">
			<slot></slot>
		</div>
		<div class="card-context-loading-or-error" v-if="isLoading">
			<farm-loader :size="isLargeLoading" />
		</div>
		<div class="card-context-loading-or-error" v-if="isError">
			<farm-alert-reload :label="errorLabel" @onClick="$emit('onLoad')" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-card-context',
	props: {
		/**
		 * Title
		 */
		title: {
			type: String,
			required: true,
		},
		/**
		 * Set bold text
		 */
		bold: {
			type: Boolean,
			default: false,
		},
		/**
		 * Icon (from Material Icons)
		 * Example: mdi-chart-bar
		 */
		icon: {
			type: String,
			default: null,
		},
		/**
		 * Show loader
		 */
		isLoading: {
			type: Boolean,
			default: false,
		},
		largeLoading: {
			type: Boolean,
			default: false,
		},
		/**
		 * Show error alert
		 */
		isError: {
			type: Boolean,
			default: false,
		},
		/**
		 * Label to be shown in error alert
		 */
		errorLabel: {
			type: String,
			default: 'Ocorreu um erro',
		},
		/**
		 * Is full
		 */
		full: {
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
	},
	computed: {
		isSuccess() {
			return !this.isLoading && !this.isError;
		},
		isLargeLoading() {
			return this.largeLoading ? 'normal' : 'small';
		},
	},
});
</script>

<style lang="scss" scoped>
@import './CardContext.scss';
</style>
