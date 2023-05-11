<template>
	<div :class="classes" :style="containerStyle">
		<div :style="valueStyle"></div>
	</div>
</template>

<script lang="ts">
import { computed, PropType, toRefs } from 'vue';

export default {
	name: 'farm-progressbar',
	props: {
		/**
		 * backgroundColor
		 */
		backgroundColor: {
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
				| any
			>,
			default: 'primary',
		},
		/**
		 * color
		 */
		valueColor: {
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
				| any
			>,
			default: 'error',
		},
		/**
		 * Value (form 0 to 100)
		 */
		value: {
			type: Number,
			required: true,
		},
	},

	setup(props) {
		const { backgroundColor, valueColor, value } = toRefs(props);

		const classes = computed(() => {
			const obj = {};

			if (!backgroundColor.value.startsWith('#')) {
				obj['farm-progressbar--' + backgroundColor.value] = true;
			}
			if (!valueColor.value.startsWith('#')) {
				obj['farm-progressbar--value-' + valueColor.value] = true;
			}

			return {
				'farm-progressbar': true,
				...obj,
			};
		});

		const valueStyle = computed(() => {
			const obj = {
				width: `${value.value}%`,
			};
			if (valueColor.value.startsWith('#')) {
				obj['background-color'] = valueColor.value;
			}
			return obj;
		});

		const containerStyle = computed(() => {
			const obj = {};

			if (backgroundColor.value.startsWith('#')) {
				obj['background-color'] = backgroundColor.value;
			}

			return obj;
		});

		return { classes, valueStyle, containerStyle };
	},
};
</script>


<style lang="scss" scoped>
@import 'ProgressBar.scss';
</style>


