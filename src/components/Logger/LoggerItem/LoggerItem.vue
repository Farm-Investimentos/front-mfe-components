<template>
	<section
		class="logger__item"
		:class="{
			'logger__item--error': item.status === 'error',
			'logger__item--success': item.status === 'success',
		}"
	>
		<i
			:class="{
				mdi: true,
				['mdi-' + item.icon]: true,
			}"
			v-if="item.icon"
		/>
		<div>
			<span class="logger__date">
				{{ item.formattedDate }}
			</span>
			<span class="logger__message">
				{{ item.message }}
			</span>
			<span class="logger__username">
				{{ item.userName }}
			</span>
		</div>
	</section>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import ILoggerItem from './ILoggerItem';

export default Vue.extend({
	name: 'farm-logger-item',
	props: {
		item: { required: true, type: Object as PropType<ILoggerItem> },
	},
	methods: {},
});
</script>
<style lang="sass" scoped>
@import './LoggerItem.scss'
</style>
