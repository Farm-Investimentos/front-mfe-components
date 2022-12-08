<template>
	<div class="idcaption farm-idcaption">
		<farm-icon-box v-if="icon" :icon="icon" :color="iconBoxColor" size="md" />
		<div
			:class="{ idcaption__body: true, 'idcaption__body--single': !hasTitle || !hasSubtitle }"
		>
			<farm-caption variation="medium" v-if="hasTitle">
				<span>
					<slot name="title"></slot>
					<farm-btn
						v-if="link"
						icon
						color="primary"
						class="farm-btn--clickable"
						@click="$emit('onLinkClick')"
					>
						<farm-icon size="xs">open-in-new</farm-icon>
					</farm-btn>
				</span>
			</farm-caption>

			<farm-caption variation="regular" color="gray" v-if="hasSubtitle">
				<span>
					<slot name="subtitle"></slot>
					<farm-copytoclipboard
						v-if="copyText"
						:toCopy="copyText"
						:successMessage="successMessage"
						:tooltipColor="tooltipColor"
					/>
				</span>
			</farm-caption>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { computed, PropType } from 'vue';
export default Vue.extend({
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
				| 'secondary'
				| 'neutral'
				| 'info'
				| 'success'
				| 'error'
				| 'warning'
				| 'success'
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
				| 'neutral'
				| 'info'
				| 'success'
				| 'error'
				| 'warning'
				| 'success'
				| 'extra-1'
				| 'extra-2'
			>,
			default: 'secondary',
		},
	},

	setup(_, { slots }) {
		const hasTitle = computed(() => slots.title);
		const hasSubtitle = computed(() => slots.subtitle);

		return { hasSubtitle, hasTitle };
	},
});
</script>

<style lang="scss" scoped>
@import './IdCaption';
</style>
