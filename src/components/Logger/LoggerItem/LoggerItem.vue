<template>
	<section
		class="logger__item"
		:class="{
			['logger__item--' + item.status]: true,
		}"
	>
		<farm-icon size="16px">{{ mdiIconName }}</farm-icon>
		<div>
			<farm-bodysmall
				variation="regular"
				color="black"
				colorVariation="50"
				class="logger__item--spacing-bottom"
			>
				{{ item.formattedDate }}
			</farm-bodysmall>
			<farm-bodytext
				:type="2"
				variation="bold"
				color="black"
				colorVariation="50"
				class="logger__item--spacing-bottom"
			>
				{{ item.message }}
			</farm-bodytext>
			<farm-bodysmall
				variation="regular"
				color="black"
				colorVariation="50"
				v-if="item.userName"
			>
				<farm-icon color="black" variation="50" size="xs">account-circle</farm-icon>
				{{ item.userName }}
			</farm-bodysmall>
			<farm-caption variation="regular">
				{{ item.extraMessage }}
			</farm-caption>
		</div>
		<farm-btn
			v-if="hasDetails"
			outlined
			title="Ver Detalhes"
			class="logger__item--button"
			:color="buttonColor"
			@click="callDetails"
		>
			Ver Detalhes
		</farm-btn>
	</section>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ILoggerItem from './ILoggerItem';
import mappingIconKeys from './mappingIconKeys';

export default defineComponent({
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

			return this.item.status ? mappingIconKeys[this.item.status] : 'success';
		},
		buttonColor(): string {
			return this.item.status ? this.item.status : 'success';
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
