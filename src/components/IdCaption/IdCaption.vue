<template>
	<div class="idcaption" :link="link">
		<IconBox :icon="icon" color="secondary" />
		<div class="idcaption__body">
			<div class="bodyTitle">
				<slot name="text"></slot>
				<farm-btn icon>
					<farm-icon>book</farm-icon>
				</farm-btn>
			</div>

			<div v-if="hasSlot" class="bodySubtitle">
				<slot name="subtitle"></slot>
				<farm-copytoclipboard :toCopy="copyText" />
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
			required: true,
		},
		/**
		 * copy to clipboard
		 */
		copyText: {
			type: String,
			required: true,
		},
		/**
		 * Link to
		 */
		link: {
			type: String,
			required: true,
		},
	},

	setup(_, { slots }) {
		const hasSlot = computed(() => {
			return slots.subtitle;
		});

		// console.log(slots);

		return { hasSlot };
	},
});
</script>

<style lang="scss" scoped>
@import './IdCaption.scss';
</style>
