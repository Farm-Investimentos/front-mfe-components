<template>
	<div class="farm-contextmenu" ref="parent">
		<span ref="activator" @click="click">
			<slot name="activator"></slot>
		</span>

		<div
			ref="popup"
			:class="{
				'farm-contextmenu__popup': true,
				'farm-contextmenu__popup--visible': inputValue,
			}"
			:style="styles"
		>
			<slot></slot>
		</div>
	</div>
</template>
<script lang="ts">
import Vue, { ref, watch, reactive, onBeforeUnmount, toRefs, defineComponent, nextTick } from 'vue';
import { calculateMainZindex, isChildOfFixedElement } from '../../helpers';

export default defineComponent({
	name: 'farm-contextmenu',
	props: {
		/**
		 * Control visibility
		 * v-model bind
		 */
		value: {
			type: Boolean,
			default: undefined,
		},
		/**
		 * Aligns the component towards the bottom
		 */
		bottom: {
			type: Boolean,
			default: false,
		},
		/**
		 * Aligns the component towards the top
		 */
		top: {
			type: Boolean,
			default: false,
		},
		/**
		 * Max height
		 */
		maxHeight: {
			type: [Number, String],
			default: 320,
		},
		/**
		 * Should stay open when click inside
		 */
		stayOpen: {
			type: Boolean,
			default: false,
		},
		/**
		 * Popup Width
		 */
		popupWidth: {
			type: [Number, String],
			default: null,
		},
	},
	setup(props, { emit }) {
		const parent = ref(null);
		const popup = ref(null);
		const activator = ref(null);
		const { top, bottom, maxHeight, stayOpen } = toRefs(props);

		const styles = reactive({
			minWidth: 0,
			top: 0,
			zIndex: 1,
			maxHeight: parseInt(maxHeight.value as string) + 'px',
		} as any);

		const inputValue = ref(props.value);

		let hasBeenBoostrapped = false;

		const outClick = event => {
			const path = event.path || (event.composedPath && event.composedPath());
			const isInside =
				path.some((e: HTMLElement) => {
					if (e.classList) {
						return e.classList.contains('farm-contextmenu__popup--visible');
					}
					return false;
				}) && stayOpen.value;

			if (activator && !activator.value.contains(event.target) && !isInside) {
				emit('input', false);
				inputValue.value = false;
			}
		};

		const resizeWindowHandler = () => {
			calculatePosition();
		};

		watch(
			() => props.value,
			newValue => {
				inputValue.value = newValue;
			}
		);

		watch(
			() => inputValue.value,
			newValue => {
				if (newValue) {
					styles.display = 'block';
					if (!hasBeenBoostrapped) {
						document.querySelector('body').appendChild(popup.value);
						hasBeenBoostrapped = true;
					}
					window.addEventListener('click', outClick);
					window.addEventListener('resize', resizeWindowHandler, {
						passive: true,
					});
					calculatePosition();

					if (top.value) {
						nextTick(() => {
							const offsetTop = calculateOffsetTop();
							styles.top = `${offsetTop}px`;
						});
					}
				} else {
					styles.top = '-10000px';
					styles.left = '-10000px';
					styles.zIndex = 0;
					window.removeEventListener('click', outClick);
				}
			}
		);

		const calculateOffsetTop = () => {
			const parentBoundingClientRect = parent.value.getBoundingClientRect();
			const activatorBoundingClientRect = activator.value.children[0].getBoundingClientRect();
			const popupClientRect = popup.value.getBoundingClientRect(); // Only has height when popup is showing on screen

			let offsetTop =
				window.scrollY +
				parentBoundingClientRect.top +
				(!bottom.value ? 0 : activatorBoundingClientRect.height);

			offsetTop = top.value ? offsetTop - popupClientRect.height - 12 : offsetTop;

			return offsetTop;
		};

		const calculatePosition = () => {
			if (!parent.value || !activator.value.children[0]) {
				return;
			}
			const activatorChildOfFixedElement = isChildOfFixedElement(activator.value);

			const parentBoundingClientRect = parent.value.getBoundingClientRect();
			const activatorBoundingClientRect = activator.value.children[0].getBoundingClientRect();
			const popupClientRect = popup.value.getBoundingClientRect(); // Only has height when popup is showing on screen

			let offsetTop = calculateOffsetTop();

			let offsetLeft = activatorBoundingClientRect.left;

			if (props.popupWidth) {
				styles.minWidth = props.popupWidth + 'px';
			} else {
				styles.minWidth =
					(activatorBoundingClientRect.width > 96
						? parseInt(activatorBoundingClientRect.width)
						: 96) + 'px';
			}

			if (activatorBoundingClientRect.width < 96) {
				const w = popupClientRect.width < 96 ? 96 : popupClientRect.width;
				offsetLeft =
					activatorBoundingClientRect.left +
					activatorBoundingClientRect.width / 2 -
					w / 2;
			}

			//Do not allow to open outside window
			const rightEdge = offsetLeft + popupClientRect.width;
			const clientWidth = document.documentElement.clientWidth;

			if (rightEdge > clientWidth - 12) {
				offsetLeft = clientWidth - 12 - popupClientRect.width;
			}

			const bottomEdge = offsetTop + popupClientRect.height;
			const clientHeight = document.documentElement.clientHeight;
			if (bottomEdge - window.scrollY > clientHeight) {
				offsetTop -= bottomEdge - window.scrollY - clientHeight + 12;
			}

			if (activatorChildOfFixedElement) {
				styles.position = 'fixed';
				offsetTop =
					parentBoundingClientRect.top +
					(!bottom.value ? 0 : activatorBoundingClientRect.height);
			} else {
				styles.position = 'absolute';
			}

			styles.top = `${offsetTop}px`;
			styles.left = `${offsetLeft}px`;

			styles.zIndex = calculateMainZindex();
		};

		onBeforeUnmount(() => {
			if (hasBeenBoostrapped) {
				window.removeEventListener('resize', resizeWindowHandler);
				window.removeEventListener('click', outClick);
				document.querySelector('body').removeChild(popup.value);
			}
		});

		const click = () => {
			inputValue.value = !inputValue.value;
			emit('input', inputValue.value);
		};

		return {
			parent,
			popup,
			activator,
			styles,
			inputValue,
			click,
		};
	},
});
</script>

<style lang="scss" scoped>
@import './ContextMenu';
</style>
