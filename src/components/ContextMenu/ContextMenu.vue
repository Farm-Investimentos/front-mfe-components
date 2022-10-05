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
import Vue, { onMounted, ref, watch, reactive, onBeforeUnmount, toRefs } from 'vue';

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
	},
	setup(props, { emit }) {
		const parent = ref(null);
		const popup = ref(null);
		const activator = ref(null);
		const styles = reactive({ minWidth: 0, top: 0 } as any);
		const { bottom } = toRefs(props);

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
			const popupClientRect = popup.value.getBoundingClientRect();

			const offsetTop =
				parentBoundingClientRect.top +
				window.scrollY +
				(!bottom.value ? 0 : parentBoundingClientRect.height);

			let offsetLeft = parentBoundingClientRect.left;
			if (popupClientRect.width > parentBoundingClientRect.width) {
				offsetLeft =
					offsetLeft + parentBoundingClientRect.width / 2 - popupClientRect.width / 2;
			}
			styles.minWidth =
				parentBoundingClientRect.width > 96
					? parseInt(parentBoundingClientRect.width)
					: 96 + 'px';
			styles.top = offsetTop + 'px';
			styles.left = offsetLeft + 'px';
		};

		onMounted(() => {
			calculatePosition();
		});

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