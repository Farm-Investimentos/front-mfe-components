<template>
	<div class="collapsible">
		<div class="collapsible__header" @click="onToggleCollapsible(status)">
			<div class="collapsible__content-title">
				<div class="collapsible__icon collapsible__icon--main" v-if="icon !== ''">
					<i
						:class="{
							mdi: true,
							['mdi-' + icon]: true,
						}"
					></i>
				</div>
				<h3 class="collapsible__title">
					{{ title }}
				</h3>
			</div>
			<div class="collapsible__icon collapsible__icon--arrow">
				<i
					:class="{
						mdi: true,
						['mdi-menu-down']: !status,
						['mdi-menu-up']: status,
					}"
				></i>
			</div>
		</div>
		<transition name="fade">
			<div class="collapsible__body" v-show="status">
				<slot></slot>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		title: {
			type: String,
			required: true,
		},
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
