<template>
	<div :class="{ 'farm-modal': true }" v-if="value">
		<div class="farm-modal--container">
			<div class="farm-modal--header">
				<slot name="header"></slot>
			</div>
			<div class="farm-modal--content" :style="styles">
				<slot name="content"></slot>
			</div>
			<div class="farm-modal--footer">
				<slot name="footer"></slot>
			</div>
		</div>
		<div class="farm-modal--overlay" @click="close()"></div>
	</div>
</template>
<script lang="ts">
import Vue, { PropType, toRefs } from 'vue';

export default Vue.extend({
	name: 'farm-modal',
	props: {
		/**
		 * v-model binding
		 */
		value: { type: Boolean, required: true, default: true },
		/**
		 * Is persistent
		 */
		persistent: { type: Boolean, default: false },
		size: {
			type: String as PropType<'sm' | 'md' | 'lg'>,
			default: 'md',
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
		const { value, offsetTop, offsetBottom, persistent } = toRefs(props);
		const styles = {
			paddingTop: offsetTop.value + 'px',
			paddingBottom: offsetBottom.value + 'px',
		};

		const close = () => {
			if (persistent.value) {
				return;
			}
			value.value = false;
			emit('input', false);
		};

		return {
			value,
			styles,
			close,
		};
	},
});
</script>
<style lang="scss" scoped>
@import './Modal';
</style>
