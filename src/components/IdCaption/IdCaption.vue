<template>
	<div class="idcaption">
		<farm-icon-box v-if="icon" :icon="icon" color="secondary" size="md" />
		<div
			:class="{ idcaption__body: true, 'idcaption__body--single': !hasTitle || !hasSubtitle }"
		>
			<farm-caption bold variation="medium" v-if="hasTitle">
				<span>
					{{ $slots.title ? $slots.title[0].text : null }}
					<farm-btn icon color="gray" v-if="link" @click="$emit('onLinkClick')">
						<farm-icon size="xs">open-in-new</farm-icon>
					</farm-btn>
				</span>
			</farm-caption>

			<farm-caption variation="regular" color="gray" v-if="hasSubtitle">
				<span>
					{{ $slots.subtitle ? $slots.subtitle[0].text : null }}
					<farm-copytoclipboard v-if="copyText" :toCopy="copyText" />
				</span>
			</farm-caption>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { computed } from 'vue';
export default Vue.extend({
	name: 'farm-idcaption',
	props: {
		/**
		 * Icon
		 */
		icon: {
			type: String,
		},
		/**
		 * copy to clipboard
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
