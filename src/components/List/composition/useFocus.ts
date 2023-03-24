import { Ref } from 'vue';

type UseFocusReturn = {
	focus: (location?: 'next' | 'prev' | 'first' | 'last') => void;
};

export default function useFocus(contentRef: Ref<HTMLElement>): UseFocusReturn {
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
			} while ((!el || el.offsetParent == null) && idxx < focusable.length && idxx >= 0);
			if (el) {
				el.focus();
			} else {
				focus(location === 'next' ? 'first' : 'last');
			}
		}
	}

	return {
		focus,
	};
}
