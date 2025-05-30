<template>
	<i v-on="$listeners" v-bind="$attrs" :class="classes" :size="$props.size" ref="el" />
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

const breakPoints = ['xs', 'sm', 'md', 'lg', 'xl'];

export default defineComponent({
	name: 'farm-icon',
	inheritAttrs: true,

	props: {
		/**
		 * Color
		 */
		color: {
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
				| 'gray'
				| 'black'
				| 'white'
			>,
			default: 'primary',
		},
		size: {
			type: String as PropType<
				'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'other (examples: 12px, 3rem)'
			>,
			default: 'default',
		},
		variation: {
			type: String as PropType<
				'lighten' | 'base' | 'darken' | '80' | '50' | '40' | '30' | '10' | '5'
			>,
			default: 'base',
		},
	},

	data() {
		return {
			icon: '',
		};
	},

	computed: {
		classes() {
			const isCustomIcon = this.icon.startsWith('custom-');

			return {
				'farm-icon': true,
				['farm-icon--' + this.color]: true,
				// MDI classes for standard icons
				...(isCustomIcon
					? {}
					: {
							mdi: true,
							['mdi-' + this.icon]: true,
					  }),
				// Custom icon class
				...(isCustomIcon
					? {
							[this.icon]: true,
					  }
					: {}),
				'farm-icon--lighten': this.variation === 'lighten',
				'farm-icon--darken': this.variation === 'darken',
				['farm-icon--black-' + this.variation]: this.color === 'black',
			};
		},
		fontSize() {
			return isNaN(this.size) ? this.size : `${this.size}px`;
		},
	},
	mounted() {
		if (this.size !== 'default' && !breakPoints.includes(this.size)) {
			this.$el.style.fontSize = this.fontSize;
		}
	},
	created() {
		this.checkForSlotContent();
	},
	beforeUpdate() {
		this.checkForSlotContent();
	},
	methods: {
		checkForSlotContent() {
			if (!this.$slots.default) {
				this.icon = '';
				return;
			}
			this.icon = this.$slots.default[0].text!.trim();
		},
	},
});
</script>
<style lang="scss" scoped>
@import 'Icon.scss';
@import '../../assets/icons/custom-icons.scss';
</style>
