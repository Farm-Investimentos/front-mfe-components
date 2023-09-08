<template>
	<section :class="{ 'logger': true, 'logger--horizontal': !vertical, 'logger--left-aligned': align === 'left' }">
		<div v-for="(item, index) in items" :key="`logger_item_${index}`">
			<farm-logger-item :item="item" :class="{
				'logger__item--horizontal': !vertical,
				'logger__item--left-aligned': align === 'left',
			}" />
			<div v-if="hasDivider(index)" :class="{
				logger__divider: true,
				[dividerCssClass(index)]: true,
			}" :key="'divider_' + index"></div>
		</div>
	</section>
</template>
<script lang="ts">
import { PropType } from 'vue';
import ILoggerItem from './LoggerItem/ILoggerItem';

export default {
	name: 'farm-logger',
	props: {
		/*
		 * List of logger items
		 */
		items: { required: true, type: Array as PropType<Array<ILoggerItem>> },
		/**
		 * Vertical or horizontal
		 */
		vertical: { type: Boolean, default: true },
		/**
		 * Items alignment
		 */
		align: { type: String as PropType<'center' | 'left'>, default: 'center' },
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
};
</script>
<style lang="scss" scoped>
@import './Logger';
</style>
