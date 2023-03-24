<template>
	<ul ref="contentRef" @focusin="onFocusin" @focusout="onFocusout" @focus="onFocus">
		<slot></slot>
	</ul>
</template>
<script lang="ts">
import Vue, { onMounted, onUnmounted, ref } from 'vue';
import { useFocus } from './composition';

export default Vue.extend({
	name: 'farm-list',
	setup(_, { emit }) {
		const contentRef = ref<HTMLElement>();
		const isFocused = ref(false);
		const { focus } = useFocus(contentRef);

		onMounted(() => {
			contentRef.value.querySelectorAll('[tabindex]:not([tabindex="-1"]), li').forEach(tag =>
				tag.addEventListener('keydown', (e: KeyboardEvent) => {
					e.preventDefault();
					if (isFocused.value) {
						emit('keydown', e);
					}
				})
			);
		});

		onUnmounted(() => {
			if (contentRef.value) {
				contentRef.value
					.querySelectorAll('[tabindex]:not([tabindex="-1"]), li')
					.forEach(tag =>
						tag.removeEventListener('keydown', (e: KeyboardEvent) => {
							e.preventDefault();
							if (isFocused.value) {
								emit('keydown', e);
							}
						})
					);
			}
		});

		function onFocusin() {
			isFocused.value = true;
		}

		function onFocusout() {
			isFocused.value = false;
		}

		function onFocus(e: FocusEvent) {
			if (
				!(
					isFocused.value ||
					(e.relatedTarget && contentRef.value.contains(e.relatedTarget as Node))
				)
			) {
				focus();
			}
		}

		return {
			contentRef,
			focus,
			onFocus,
			onFocusin,
			onFocusout,
			isFocused,
		};
	},
});
</script>
<style lang="scss" scoped>
@import './List';
</style>
