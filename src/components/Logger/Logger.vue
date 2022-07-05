<template>
	<section class="logger">
		<template v-for="(item, index) in items">
			<LoggerItem :item="item" :key="index" />
			<div
				:class="{
					'logger__divider--success': isPreviousLogAndCurrentLogSuccess(index),
					'logger__divider--error': isPreviousLogAndCurrentLogError(index),
					'logger__divider--success-to-error':
						isPreviousLogErrorAndCurrentLogSuccess(index),
					'logger__divider--error-to-success':
						isPreviousLogSuccessAndCurrentLogError(index),
				}"
				v-if="hasDivider(index)"
				class="logger__divider"
				:key="'divider_' + index"
			></div>
		</template>
	</section>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import ILoggerItem from './LoggerItem/ILoggerItem';
import LoggerItem from './LoggerItem/';

export default Vue.extend({
	name: 'farm-logger',
	components: { LoggerItem },
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
		isPreviousLogAndCurrentLogError(index: number): boolean {
			return this.isError(index) && this.isError(index + 1);
		},
		isPreviousLogAndCurrentLogSuccess(index: number): boolean {
			return this.isSuccess(index) && this.isSuccess(index + 1);
		},
		isPreviousLogErrorAndCurrentLogSuccess(index: number): boolean {
			return this.isSuccess(index) && this.isError(index + 1);
		},
		isPreviousLogSuccessAndCurrentLogError(index: number): boolean {
			return this.isError(index) && this.isSuccess(index + 1);
		},
		isError(index: number): boolean {
			return this.items[index].status === 'error';
		},
		isSuccess(index: number): boolean {
			return this.items[index].status === 'success';
		},
	},
});
</script>
<style lang="sass" scoped>
@import './Logger.scss'
</style>
