<template>
	<section
		class="logger__item"
		:class="{
			'logger__item--error': item.status === 'error',
			'logger__item--success': item.status === 'success',
		}"
	>
		<farm-icon>{{ mdiIconName }}</farm-icon>
		<div>
			<span class="logger__date">
				{{ item.formattedDate }}
			</span>
			<span class="logger__message">
				{{ item.message }}
			</span>
			<span class="logger__username">
				<i class="mdi mdi-account-circle" />
				{{ item.userName }}
			</span>
		</div>
		<farm-btn
			v-if="hasDetails"
			plain
			title="Ver Detalhes"
			:color="buttonColor"
			@click="callDetails"
			>
				Ver Detalhes
			</farm-btn>
	</section>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import ILoggerItem from './ILoggerItem';

export default Vue.extend({
	name: 'farm-logger-item',
	props: {
		/**
		 * Logger item
		 */
		item: { required: true, type: Object as PropType<ILoggerItem> },
	},
	methods: {
		callDetails(): void {
			this.item.details();
		},
	},
	computed: {
		mdiIconName(): string {
			if (this.item.icon) {
				return `${this.item.icon}`;
			}
			if (!this.item.status) {
				return '';
			}
			return `${this.item.status === 'success' ? 'check' : 'close'}`;
		},
		buttonColor(): string {
			if (this.item.status === 'success') {
				return 'primary';
			} else if (this.item.status === 'error') {
				return 'error';
			}

			return 'secondary';
		},
		hasDetails(): boolean {
			return !!this.item.details;
		},
	},
});
</script>
<style lang="scss" scoped>
@import './LoggerItem.scss';
</style>
