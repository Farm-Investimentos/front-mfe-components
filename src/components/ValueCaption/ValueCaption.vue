<template>
	<div class="farm-valuecaption">
		<farm-icon-box v-if="icon" :icon="icon" :color="iconBoxColor" size="md" />
		<div>
			<farm-caption variation="regular" color="gray" v-if="hasTitle">
				<slot name="title"></slot>
			</farm-caption>

			<farm-bodytext bodytext type="1" variation="bold" v-if="hasSubtitle">
				<slot name="subtitle"></slot>
			</farm-bodytext>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { computed, PropType } from 'vue';
export default Vue.extend({
	name: 'farm-valuecaption',
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
	},

	setup(_, { slots }) {
		const hasTitle = computed(() => slots.title);
		const hasSubtitle = computed(() => slots.subtitle);

		return { hasSubtitle, hasTitle };
	},
});
</script>

<style lang="scss" scoped>
@import './ValueCaption';
</style>
