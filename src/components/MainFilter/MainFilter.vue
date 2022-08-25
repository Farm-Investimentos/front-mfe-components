<template>
	<section :class="{ 'justify-end': justifyEnd === true }">
		<fieldset v-if="hasInitialInput">
			<farm-label :for="elementId">
				{{ label }}
			</farm-label>
			<farm-textfield
				v-model="inputValue"
				:id="elementId"
				@keyup="onKeyUp"
			/>
		</fieldset>
		<farm-btn
			v-if="hasExtraFilters"
			color="secondary"
			class="farm-btn--responsive mt-14 mt-sm-8"
			@click="onFilterClick"
		>
			<farm-icon class="mr-2">{{ extraFiltersBtnIcon }}</farm-icon>
			{{ extraFiltersBtnLabel }}
		</farm-btn>
	</section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-form-mainfilter',
	props: {
		/**
		 * Show or not button for extra filters
		 */
		hasExtraFilters: {
			type: Boolean,
			default: true,
		},
		hasInitialInput: {
			type: Boolean,
			default: true,
		},
		justifyEnd: {
			type: Boolean,
			default: false,
		},
		/**
		 * Label
		 */
		label: {
			type: String,
			default: 'Quer localizar um cliente?',
		},
		/**
		 * Input's id
		 */
		elementId: {
			type: String,
			default: 'form-main-filter-search',
		},
		initialValue: {
			type: String,
			default: '',
		},
		showFilters: {
			type: Boolean,
			default: false,
		},
	},

	watch: {
		initialValue(newValue: string) {
			this.inputValue = newValue;
		},
	},
	computed: {
		extraFiltersBtnLabel() {
			return `${this.showFilters ? 'Esconder' : 'Ver'} Filtros`;
		},
		extraFiltersBtnIcon() {
			return this.showFilters ? 'filter-off' : 'filter';
		},
	},
	data() {
		return {
			timer: null,
			inputValue: this.initialValue,
		};
	},
	methods: {
		onFilterClick() {
			this.$emit('onClick');
		},
		onKeyUp(event: KeyboardEvent) {
			const keyCode = event.keyCode;
			if (keyCode === 13) {
				this.$emit('onEnter', (event.target as HTMLInputElement).value);
				return false;
			}

			if (
				(keyCode < 48 && keyCode !== 8 && keyCode !== 46) ||
				(keyCode > 90 && keyCode < 96 && keyCode !== 91) ||
				(keyCode > 105 && keyCode < 186)
			) {
				return false;
			}
			if (this.timer) {
				clearTimeout(this.timer);
				this.timer = null;
			}
			this.timer = setTimeout(() => {
				this.$emit('onInputChange', (event.target as HTMLInputElement).value);
			}, 750);
		},
	},
});
</script>
<style scoped lang="scss">
@import './MainFilter.scss';
</style>
