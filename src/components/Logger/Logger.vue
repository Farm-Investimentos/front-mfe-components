<template>
	<section class="logger">
		<template v-for="(item, index) in items">
			<LoggerItem :item="item" :key="index" />
			<div v-if="hasDivider(index)" class="logger__divider" :key="'divider_' + index">
			</div>
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
	props: { items: { required: true, type: Array as PropType<Array<ILoggerItem>> } },
	methods: {
		hasDivider(index: number): boolean {
			return index < this.items.length - 1;
		},
	},
});
</script>
<style lang="sass" scoped>
@import './Logger.scss'
</style>
