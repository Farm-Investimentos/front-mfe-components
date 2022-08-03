<template>
	<div class="collapsible">
		<div class="collapsible__header" @click="onToggleCollapsible(status)">
			<div class="collapsible__content-title">
				<div class="collapsible__icon collapsible__icon--main" v-if="icon !== ''">
					<farm-icon color="secondary" size="1.625rem">
						{{ icon }}
					</farm-icon>
				</div>
				<h3 class="collapsible__title">
					{{ title }}
				</h3>
			</div>
			<div class="collapsible__icon collapsible__icon--arrow">
				<farm-icon size="1.625rem" color="primary">
					{{ arrowIcon }}
				</farm-icon>
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
import Icon from '../Icon';

export default Vue.extend({
	name: 'farm-collapsible',
	components: {
		'farm-icon': Icon,
	},
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
