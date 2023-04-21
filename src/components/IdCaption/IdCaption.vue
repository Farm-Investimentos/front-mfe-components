<template>
	<div
		:class="{
			idcaption: true,
			'farm-idcaption': true,
			'farm-idcaption--noicon': !icon,
			'farm-idcaption--noheight': noHeight,
		}"
	>
		<farm-icon-box
			v-if="icon"
			:icon="icon"
			:color="iconBoxColor"
			variation="darken"
			size="md"
		/>
		<div
			:class="{
				idcaption__body: true,
				'idcaption__body--single': !hasTitle || !hasSubtitle,
			}"
		>
			<farm-caption variation="semiBold" v-if="hasTitle">
				<span>
					<slot name="title"></slot>
				</span>
				<farm-btn
					v-if="link"
					icon
					class="farm-btn--clickable"
					title="Ver mais"
					:color="buttonsColor"
					@click="$emit('onLinkClick')"
				>
					<farm-icon size="16px">open-in-new</farm-icon>
				</farm-btn>
			</farm-caption>

			<farm-caption variation="regular" color="black" colorVariation="50" v-if="hasSubtitle">
				<span>
					<slot name="subtitle"></slot>
				</span>
				<farm-copytoclipboard
					v-if="copyText"
					sizeIcon="16px"
					:toCopy="copyText"
					:successMessage="successMessage"
					:buttonColor="buttonsColor"
					:tooltipColor="tooltipColor || buttonsColor"
				/>
			</farm-caption>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, PropType } from 'vue';
export default {
	name: 'farm-idcaption',
	props: {
		/**
		 * Icon (from Material Icons)
		 * Example: chart-bar
		 */
		icon: {
			type: String,
		},
		/**
		 * IconBox Color
		 */
		iconBoxColor: {
			type: String as PropType<
				| 'primary'
				| 'secondary-green'
				| 'secondary-golden'
				| 'secondary'
				| 'neutral'
				| 'info'
				| 'success'
				| 'error'
				| 'warning'
				| 'extra-1'
				| 'extra-2'
				| 'gray'
			>,
			default: 'secondary-golden',
		},
		/**
		 * Buttons Color (change from link and copy to clipboard)
		 */
		buttonsColor: {
			type: String as PropType<
				| 'primary'
				| 'secondary-green'
				| 'secondary-golden'
				| 'secondary'
				| 'neutral'
				| 'info'
				| 'success'
				| 'error'
				| 'warning'
				| 'extra-1'
				| 'extra-2'
				| 'gray'
			>,
			default: 'primary',
		},
		/**
		 * Text to be copied to clipboard
		 */
		copyText: {
			type: String,
			default: 'Conteúdo copiado para a área de trabalho',
		},
		/**
		 * Has link?
		 */
		link: {
			type: Boolean,
			default: false,
		},
		/**
		 * Success message content after copy
		 */
		successMessage: {
			type: String,
			default: 'Conteúdo copiado para a área de trabalho',
		},
		/**
		 * Tooltip color
		 */
		tooltipColor: {
			type: String as PropType<
				| 'primary'
				| 'secondary'
				| 'secondary-green'
				| 'secondary-golden'
				| 'neutral'
				| 'info'
				| 'success'
				| 'error'
				| 'warning'
				| 'extra-1'
				| 'extra-2'
			>,
			default: 'primary',
		},
		/**
		 * noHeight remove min-height of 48px
		 */
		noHeight: {
			type: Boolean,
			default: false,
		},
	},

	setup(_, { slots }) {
		const hasTitle = computed(() => slots.title);
		const hasSubtitle = computed(() => slots.subtitle);

		return { hasSubtitle, hasTitle };
	},
};
</script>

<style lang="scss" scoped>
@import './IdCaption';
</style>
