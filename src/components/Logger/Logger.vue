<template>
	<section class="logger">
		<template v-for="(item, index) in items">
			<farm-logger-item :item="item" :key="`logger_item_${index}`" />
			<div
				v-if="hasDivider(index)"
				:class="{
					logger__divider: true,
					[dividerCssClass(index)]: true,
				}"
				:key="'divider_' + index"
			></div>
		</template>
	</section>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ILoggerItem from './LoggerItem/ILoggerItem';

export default defineComponent({
	name: 'farm-logger',
	props: {
		/*
		 * List of logger items
		 */
		items: { required: true, type: Array as PropType<Array<ILoggerItem>> },
	},
	methods: {
		hasDivider(index: number): boolean {
			return index < this.items.length - 1;
		},
		dividerCssClass(index: number): string {
			const previous = this.items[index].status;
			const next = this.items[index + 1].status;
			return `logger__divider--${previous}-to-${next}`;
		},
	},
});
</script>
<style lang="scss" scoped>
@import './Logger';
</style>
