<template>
	<div :class="isHeightFull">
		<div class="card-context-header" v-if="isSuccess">
			<IconBox :icon="icon" />
			<div class="card-context-content">
				<p :class="isBold">
					{{ title }}
				</p>
			</div>
		</div>
		<div class="card-context-body" v-if="isSuccess">
			<slot></slot>
		</div>
		<div class="card-context-loding-or-error" v-if="isLoading">
			<Loader :size="isLargeLoading" />
		</div>
		<div class="card-context-loding-or-error" v-if="isError">
			<AlertReload :label="errorLabel" @onClick="$emit('onLoad')" />
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import { Loader, AlertReload, IconBox } from '../../main.js';

export default Vue.extend({
	name: 'farm-card-context',
	components: {
		IconBox,
		AlertReload,
		Loader,
	},
	props: {
		/**
		 * Title
		 */
		title: {
			type: String,
			require: true,
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
			require: true,
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
		full: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		isBold() {
			if (this.bold) {
				return 'card-context-title bold';
			}
			return 'card-context-title';
		},
		isHeightFull() {
			if (this.full) {
				return 'card-context height-full';
			}
			return 'card-context';
		},
		isSuccess() {
			return !this.isLoading && !this.isError;
		},
		isLargeLoading() {
			if (this.largeLoading) {
				return 'normal';
			}
			return 'small';
		},
	},
});
</script>

<style lang="sass" scoped>
@import './CardContext.scss'
</style>
