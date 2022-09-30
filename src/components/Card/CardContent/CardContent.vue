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
		tag: { type: String, default: 'div' },
		gutter: {
			type: String as PropType<'none' | 'xs' | 'sm' | 'default' | 'md' | 'lg' | 'xl'>,
			default: 'default',
		},
	},
	inheritAttrs: true,
});
</script>

<style lang="scss" scoped>
@import './CardContent.scss';
</style>
