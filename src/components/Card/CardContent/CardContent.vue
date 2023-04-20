<template>
	<component
		:is="tag"
		:class="{ 'farm-card__content': true, ['farm-card__content--' + background]: background }"
		:gutter="gutter"
	>
		<slot></slot>
	</component>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';

export default defineComponent({
	name: 'farm-card-content',
	props: {
		/**
		 * Html tag
		 */
		tag: { type: String, default: 'div' },
		/**
		 * Add gutter
		 */
		gutter: {
			type: String as PropType<'none' | 'xs' | 'sm' | 'vuetify' | 'md' | 'lg' | 'xl'>,
			default: 'md',
		},
		background: {
			type: String as PropType<'base' | 'lighten' | 'darken'> | null,
			default: null,
		},
	},
	inheritAttrs: true,
});
</script>

<style lang="scss" scoped>
@import './CardContent';
</style>
