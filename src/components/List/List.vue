<template>
	<ul ref="contentRef" @focusin="onFocusin" @focusout="onFocusout" @focus="onFocus">
		<slot></slot>
	</ul>
</template>
<script lang="ts">
import Vue, { onMounted, onUnmounted, ref } from 'vue';

export default Vue.extend({
	name: 'farm-list',
	setup(_, { emit }) {
		const contentRef = ref<HTMLElement>();
		const isFocused = ref(false);

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
			contentRef.value.querySelectorAll('[tabindex]:not([tabindex="-1"]), li').forEach(tag =>
				tag.removeEventListener('keydown', (e: KeyboardEvent) => {
					e.preventDefault();
					if (isFocused.value) {
						emit('keydown', e);
					}
				})
			);
		});

		function focus(location?: 'next' | 'prev' | 'first' | 'last') {
			if (!contentRef.value) return;

			const focusable = [
				...contentRef.value.querySelectorAll('[tabindex]:not([tabindex="-1"]), li'),
			].filter(el => !el.hasAttribute('disabled')) as HTMLElement[];

			const idx = focusable.indexOf(document.activeElement as HTMLElement);

			if (!location) {
				if (!contentRef.value.contains(document.activeElement)) {
					focusable[0].focus();
				}
			} else if (location === 'first') {
				let savedTabIndex = focusable[0].getAttribute('tabindex');

				focusable[0].setAttribute('tabindex', '-1');
				focusable[0].focus();
				focusable[0].setAttribute('tabindex', savedTabIndex);
			} else if (location === 'last') {
				focusable.at(-1).focus();
			} else {
				let el;
				let idxx = idx;
				const inc = location === 'next' ? 1 : -1;

				do {
					idxx += inc;
					el = focusable[idxx];
					console.log('el', el);
				} while ((!el || el.offsetParent == null) && idxx < focusable.length && idxx >= 0);
				if (el) {
					el.focus();
				} else {
					focus(location === 'next' ? 'first' : 'last');
				}
			}
		}

		function onFocusin(e: FocusEvent) {
			isFocused.value = true;
		}

		function onFocusout(e: FocusEvent) {
			isFocused.value = false;
		}

		function onFocus(e: FocusEvent) {
			if (
				!isFocused.value &&
				!(e.relatedTarget && contentRef.value.contains(e.relatedTarget as Node))
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
