<template>
	<section
		class="logger__item"
		:class="{
			['logger__item--' + item.status]: true,
		}"
	>
		<farm-icon size="16px">{{ mdiIconName }}</farm-icon>
		<div>
			<farm-caption variation="regular">
				{{ item.formattedDate }}
			</farm-caption>
			<farm-bodytext :type="2" variation="bold">
				{{ item.message }}
			</farm-bodytext>
			<farm-caption variation="regular" v-if="item.userName">
				<farm-icon color="black" size="xs">account-circle</farm-icon>
				{{ item.userName }}
			</farm-caption>
			<farm-caption variation="regular">
				{{ item.extraMessage }}
			</farm-caption>
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
import mappingIconKeys from './mappingIconKeys';

export default Vue.extend({
	name: 'farm-logger-item',
	props: {
		/**
		 * Logger item
		 */
		item: { required: true, type: Object as PropType<ILoggerItem> },
		customIcon: { type: String, required: false },
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

			return this.item.status ? mappingIconKeys[this.item.status] : 'error';
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
