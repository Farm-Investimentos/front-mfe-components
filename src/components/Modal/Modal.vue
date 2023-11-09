<template>
	<transition name="fade">
		<div
			v-if="inputValue"
			:class="{ 'farm-modal': true, ['farm-modal--size-' + size]: true }"
			:style="styleObject"
		>
			<div class="farm-modal--container">
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
import {
	defineComponent,
	onBeforeUnmount,
	onMounted,
	PropType,
	reactive,
	ref,
	toRefs,
	watch,
} from 'vue';
import { calculateMainZindex } from '../../helpers';

export default defineComponent({
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
	setup(props, { emit }) {
		let hasBeenBoostrapped = false;
		const { offsetTop, offsetBottom, persistent, size } = toRefs(props);
		const inputValue = ref(props.value);
		const styleObject = reactive({ zIndex: 1 });
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
			emit('onClose');
		};

		watch(
			() => props.value,
			newValue => {
				inputValue.value = newValue;
				if (newValue) {
					bootstrap();
				}
			}
		);

		onMounted(() => {
			bootstrap();
		});

		const escHandler = event => {
			if (event.key === 'Escape') {
				close();
			}
		};

		const bootstrap = () => {
			styleObject.zIndex = calculateMainZindex();
			window.addEventListener('keyup', escHandler);
			hasBeenBoostrapped = true;
		};

		onBeforeUnmount(() => {
			if (hasBeenBoostrapped) {
				window.removeEventListener('resize', escHandler);
			}
		});

		return {
			inputValue,
			styles,
			styleObject,
			size,
			close,
		};
	},
});
</script>
<style lang="scss" scoped>
@import './Modal';
</style>
