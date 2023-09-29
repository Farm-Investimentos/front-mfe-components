<template>
	<li
		@click="onClick"
		:class="{
			'farm-listitem': true,
			[cssColorWithVariation]: cssColorWithVariation,
			'farm-listitem--clickable': clickable || to,
		}"
	>
		<router-link :to="to" v-if="to">
			<slot></slot>
		</router-link>
		<template v-else>
			<slot></slot>
		</template>
	</li>
</template>
<script lang="ts">
import {  computed, PropType, toRefs } from 'vue';

export default {
	name: 'farm-listitem',
	props: {
		to: {
			type: String,
			default: null,
		},
		/**
		 * Color on hover
		 */
		hoverColor: {
			type: [String, null] as PropType<
				| 'primary'
				| 'secondary'
				| 'secondary-green'
				| 'secondary-golden'
				| 'neutral'
				| 'error'
				| 'warning'
				| 'info'
				| 'extra-1'
				| 'extra-2'
			>,
			default: null,
		},
		/**
		 * Color variation on hover
		 */
		hoverColorVariation: {
			type: [String, null] as PropType<'base' | 'lighten' | 'darken'>,
			default: 'base',
		},
		/**
		 * Is clickable
		 */
		clickable: {
			type: Boolean,
			default: false,
		},
	},
	setup(props, { emit }) {
		const { hoverColor, hoverColorVariation } = toRefs(props);

		const cssColorWithVariation = computed((): String => {
			if (!hoverColor.value) {
				return null;
			}
			return `farm-listitem--${hoverColor.value}-${hoverColorVariation.value}`;
		});

		const onClick = () => {
			emit('click');
		};

		return {
			cssColorWithVariation,
			onClick,
		};
	},
};
</script>
<style lang="scss" scoped>
@import './ListItem';
</style>
