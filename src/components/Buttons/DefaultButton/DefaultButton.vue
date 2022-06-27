<template>
	<button v-on="$listeners" :type="type" :class="classes">
		<span class="farm-btn__content">
			<slot></slot>
		</span>
	</button>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-btn',
	inheritAttrs: true,

	props: {
		color: { type: String, default: 'primary' },
		outlined: Boolean,
		plain: Boolean,
		type: {
			type: String,
			default: 'button',
		},
	},

	data() {
		return {};
	},

	computed: {
		classes() {
			const obj = {};
			['outlined', 'plain']
				.filter(key => this[key])
				.forEach(key => {
					obj['farm-btn--' + key] = this[key];
				});
			return {
				'farm-btn': true,
				['farm-btn--' + this.color]: true,
				...obj,
			};
		},
	},
	methods: {
		click(e: MouseEvent): void {
			this.$emit('click', e);

			this.btnToggle && this.toggle();
		},
	},
});
</script>
<style lang="scss" scoped>
@import 'DefaultButton.scss';
</style>
