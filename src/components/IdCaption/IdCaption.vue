<template>
	<div class="idcaption">
		<farm-icon-box v-if="icon" :icon="icon" :color="iconBoxColor" size="md" />
		<div
			:class="{ idcaption__body: true, 'idcaption__body--single': !hasTitle || !hasSubtitle }"
		>
			<farm-caption variation="medium" v-if="hasTitle">
				<span>
					<slot name="title"></slot>
					<farm-btn icon color="gray" v-if="link" @click="$emit('onLinkClick')">
						<farm-icon size="xs">open-in-new</farm-icon>
					</farm-btn>
				</span>
			</farm-caption>

			<farm-caption variation="regular" color="gray" v-if="hasSubtitle">
				<span>
					<slot name="subtitle"></slot>
					<farm-copytoclipboard v-if="copyText" :toCopy="copyText" />
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
		},
		/**
		 * Has link?
		 */
		link: {
			type: Boolean,
			default: false,
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
@import './IdCaption.scss';
</style>
