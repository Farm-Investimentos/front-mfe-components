<template>
	<div class="idcaption">
		<IconBox v-if="icon" :icon="icon" color="secondary" size="md" />
		<div class="idcaption__body">
			<div v-if="hasTitle" class="d-flex align-center">
				<farm-caption class="text" bold variation="medium">
					<slot name="title"></slot>
				</farm-caption>
				<farm-btn icon color="gray" v-if="link" @click="$emit('onLinkClick')">
					<farm-icon size="xs">open-in-new</farm-icon>
				</farm-btn>
			</div>

			<div v-if="hasSubtitle" class="d-flex align-center">
				<farm-caption class="text" variation="regular" color="gray">
					<slot name="subtitle"></slot>
				</farm-caption>
				<farm-copytoclipboard v-if="copyText" :toCopy="copyText" />
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
		 * Link to
		 */
		link: {
			type: String,
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
