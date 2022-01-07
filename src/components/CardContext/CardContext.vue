<template>
	<div class="card-context">
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
			<Loader size="small" />
		</div>
		<div class="card-context-loding-or-error" v-if="isError">
			<AlertReload label="Ocorreu um erro" @onClick="$emit('onLoad')" />
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
		title: {
			type: String,
			require: true,
		},
		bold: {
			type: Boolean,
			default: false,
		},
		icon: {
			type: String,
			require: true,
		},
		isLoading: {
			type: Boolean,
			default: false,
		},
		isError: {
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
		isSuccess() {
			return !this.isLoading && !this.isError;
		},
	},
});
</script>

<style lang="sass" scoped>
@import './CardContext.scss'
</style>
