<template>
	<div class="farm-contextmenu" ref="parent">
		<span ref="activator">
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
import Vue, { ref, watch, reactive, onBeforeUnmount, toRefs } from 'vue';
import { calculateMainZindex } from '../../helpers';

export default Vue.extend({
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
		 * Max height
		 */
		maxHeight: {
			type: [Number, String],
			default: 320,
		},
	},
	setup(props, { emit }) {
		const parent = ref(null);
		const popup = ref(null);
		const activator = ref(null);
		const { bottom, maxHeight } = toRefs(props);

		const styles = reactive({
			minWidth: 0,
			top: 0,
			zIndex: 1,
			maxHeight: parseInt(maxHeight.value as string) + 'px',
		} as any);

		const inputValue = ref(props.value);

		let hasBeenBoostrapped = false;

		const outClick = (event: Event) => {
			if (activator && !activator.value.contains(event.target)) {
				emit('input', false);
			}
		};

		const resizeWindowHandler = () => {
			calculatePosition();
		};

		watch(
			() => props.value,
			newValue => {
				if (newValue) {
					if (!hasBeenBoostrapped) {
						document.querySelector('body').appendChild(popup.value);

						hasBeenBoostrapped = true;
					}
					window.addEventListener('click', outClick);
					window.addEventListener('resize', resizeWindowHandler);

					calculatePosition();
				} else {
					window.removeEventListener('click', outClick);
				}
				inputValue.value = newValue;
			}
		);

		const calculatePosition = () => {
			const parentBoundingClientRect = parent.value.getBoundingClientRect();
			const activatorBoundingClientRect = activator.value.children[0].getBoundingClientRect();
			const popupClientRect = popup.value.getBoundingClientRect();

			let offsetTop =
				parentBoundingClientRect.top +
				window.scrollY +
				(!bottom.value ? 0 : activatorBoundingClientRect.height);

			let offsetLeft = activatorBoundingClientRect.left;
			if (popupClientRect.width > activatorBoundingClientRect.width) {
				offsetLeft =
					offsetLeft + activatorBoundingClientRect.width / 2 - popupClientRect.width / 2;
			}
			styles.minWidth =
				(activatorBoundingClientRect.width > 96
					? parseInt(activatorBoundingClientRect.width)
					: 96) + 'px';

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

		return {
			parent,
			popup,
			activator,
			styles,
			inputValue,
		};
	},
});
</script>

<style lang="scss" scoped>
@import './ContextMenu';
</style>
