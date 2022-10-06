<template>
	<component :is="tag" class="farm-card__content" :gutter="gutter">
		<slot></slot>
	</component>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
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
	},
	inheritAttrs: true,
});
</script>

<style lang="scss" scoped>
@import './CardContent';
</style>
