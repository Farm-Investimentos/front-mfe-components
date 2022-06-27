<template>
	<button v-on="$listeners" :type="type" :class="classes"><slot></slot></button>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-btn',
	inheritAttrs: true,

	props: {
		color: { type: String, default: 'primary' },
		outlined: Boolean,
		plain: Boolean,
		type: {
			type: String,
			default: 'button',
		},
	},

	data() {
		return {};
	},

	computed: {
		classes() {
			const obj = {};
			['outlined', 'plain']
				.filter(key => this[key])
				.forEach(key => {
					obj['farm-btn--' + key] = this[key];
				});
			return {
				'farm-btn': true,
				['farm-btn--' + this.color]: true,
				...obj,
			};
		},
	},
	methods: {
		click(e: MouseEvent): void {
			this.$emit('click', e);

			this.btnToggle && this.toggle();
		},
	},
});
</script>
<style lang="scss" scoped>
$colors: primary, secondary, error, extra, gray, accent, yellow;

.farm-btn {
	font-size: 0.75rem;
	align-items: center;
	border-radius: 4px;
	display: inline-flex;
	flex: 0 0 auto;
	font-weight: 500;
	justify-content: center;
	outline: 0;
	position: relative;
	text-decoration: none;
	transition-duration: 0.28s;
	transition-property: box-shadow, transform, opacity;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	user-select: none;
	vertical-align: middle;
	white-space: nowrap;
	line-height: 1rem;
	height: 36px;
	min-width: 64px;
	padding: 0 16px;
}

@each $color in $colors {
	#{'.farm-btn--' + $color} {
		background-color: var(--v-#{$color}-base);
		color: white;

		&:before {
			background-color: currentColor;
			border-radius: inherit;
			bottom: 0;
			color: inherit;
			content: '';
			left: 0;
			opacity: 0;
			pointer-events: none;
			position: absolute;
			right: 0;
			top: 0;
		}

		&:hover {
			&:before {
				opacity: 0.08;
			}
		}
	}
	.farm-btn--outlined#{'.farm-btn--' + $color} {
		border: 1px solid var(--v-#{$color}-base);
		background: white;
		color: var(--v-#{$color}-base);
	}

	.farm-btn--plain#{'.farm-btn--' + $color} {
		border: none;
		background: white;
		color: var(--v-#{$color}-base);
	}
}
</style>
