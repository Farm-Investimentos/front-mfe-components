<template>
	<div class="idcaption">
		<farm-icon-box v-if="icon" :icon="icon" color="secondary" size="md" />
		<div class="idcaption__body">
			<div v-if="hasTitle" class="d-flex align-center">
				<farm-caption class="text" bold variation="medium">
					<slot name="title"></slot>
					<farm-btn icon color="gray" v-if="link" @click="$emit('onLinkClick')">
						<farm-icon size="xs">open-in-new</farm-icon>
					</farm-btn>
				</farm-caption>
			</div>

			<div v-if="hasSubtitle" class="d-flex align-center">
				<farm-caption class="text" variation="regular" color="gray">
					<slot name="subtitle"></slot>
					<farm-copytoclipboard v-if="copyText" :toCopy="copyText" />
				</farm-caption>
			</div>
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
