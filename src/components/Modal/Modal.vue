<template>
	<transition name="fade">
		<div
			:class="{ 'farm-modal': true, ['farm-modal--size-' + size]: true }"
			v-if="inputValue"
			:style="styleObject"
		>
			<div class="farm-modal--container teste">
				<div class="farm-modal--header">
					<!-- @slot header -->
					<slot name="header"></slot>
				</div>
				<div class="farm-modal--content">
					<div :style="styles">
						<!-- @slot main content -->
						<slot name="content"></slot>
					</div>
				</div>
				<div class="farm-modal--footer">
					<!-- @slot footer -->
					<slot name="footer"></slot>
				</div>
			</div>
			<div class="farm-modal--overlay" @click="close()"></div>
		</div>
	</transition>
</template>

<script lang="ts">
import Vue, { PropType, ref, toRefs, watch } from 'vue';

export default Vue.extend({
	name: 'farm-modal',
	props: {
		/**
		 * v-model binding
		 */
		value: { type: Boolean, required: true, default: false },
		/**
		 * Is persistent
		 */
		persistent: { type: Boolean, default: false },
		size: {
			type: String as PropType<'xs' | 'sm' | 'md' | 'default'>,
			default: 'default',
		},
		/**
		 * content offset, in pixels, from the top
		 */
		offsetTop: {
			type: Number,
			default: 0,
		},
		/**
		 * content offset, in pixels, from the bottom
		 */
		offsetBottom: {
			type: Number,
			default: 0,
		},
	},
	data() {
		const zIndex = Math.max(
			...Array.from(document.querySelectorAll('body *'), el =>
				parseFloat(window.getComputedStyle(el).zIndex)
			).filter(zIndex => !Number.isNaN(zIndex)),
			0
		);

		return {
			styleObject: {
				zIndex,
			},
		};
	},
	setup(props, { emit }) {
		const { offsetTop, offsetBottom, persistent, size } = toRefs(props);
		const inputValue = ref(props.value);
		const styles = {
			marginTop: offsetTop.value + 'px',
			marginBottom: offsetBottom.value + 'px',
			maxHeight: `calc(100vh - ${offsetTop.value + offsetBottom.value + 48}px)`,
		};

		const close = () => {
			if (persistent.value) {
				return false;
			}
			window.removeEventListener('keyup', escHandler);
			inputValue.value = false;
			emit('input', false);
		};

		watch(
			() => props.value,
			newValue => {
				inputValue.value = newValue;
				if (newValue) {
					window.addEventListener('keyup', escHandler);
				}
			}
		);

		const escHandler = event => {
			if (event.key === 'Escape') {
				close();
			}
		};

		return {
			inputValue,
			styles,
			size,
			close,
		};
	},
});
</script>
<style lang="scss" scoped>
@import './Modal';
</style>
