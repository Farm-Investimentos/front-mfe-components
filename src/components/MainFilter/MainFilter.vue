<template>
	<farm-row :class="{ 'justify-end': justifyEnd === true }">
		<farm-col v-if="hasInitialInput" :md="fullWidth ? 12 : 6">
			<farm-label :for="elementId">
				{{ !hasSlotData ? label : '' }}
				<slot v-if="hasSlotData"></slot>
				<farm-tooltip v-if="tooltip">
					<farm-caption color="white">
						{{ tooltip }}
					</farm-caption>
					<template v-slot:activator>
						<farm-icon size="sm" color="gray">help-circle</farm-icon>
					</template>
				</farm-tooltip>
			</farm-label>
			<farm-textfield-v2 v-model="inputValue" :id="elementId" @keyup="onKeyUp" />
		</farm-col>
		<farm-btn
			v-if="hasExtraFilters"
			class="farm-btn__cta"
			:title="extraFiltersBtnLabel"
			@click="onFilterClick"
			:outlined="outlined"
		>
			<farm-icon class="mr-2">{{ extraFiltersBtnIcon }}</farm-icon>
			{{ extraFiltersBtnLabel }}
		</farm-btn>
	</farm-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
		/**
		 * Toggle filters
		 */
		showFilters: {
			type: Boolean,
			default: false,
		},
		/**
		 * Tooltip text
		 */
		tooltip: {
			type: String,
			default: null,
		},
		/**
		 * Input full width
		 */
		fullWidth: {
			type: Boolean,
			default: false,
		},
		/**
		 *  Layout outlined
		 */
		outlined: {
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
		hasSlotData() {
			return this.$slots.default;
		},
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
		isInvalidKey(keyCode: Number) {
			return (
				(keyCode < 48 && keyCode !== 8 && keyCode !== 46) ||
				(keyCode > 90 && keyCode < 96 && keyCode !== 91) ||
				(keyCode > 105 && keyCode < 186)
			);
		},
		onKeyUp(event: KeyboardEvent) {
			const keyCode = event.keyCode;
			if (keyCode === 13) {
				this.$emit('onEnter', (event.target as HTMLInputElement).value);
				return false;
			}
			if (this.isInvalidKey(keyCode)) {
				return false;
			}
			if (this.timer) {
				clearTimeout(this.timer);
				this.timer = null;
			}
			this.timer = setTimeout(() => {
				this.$emit('onInputChange', this.inputValue);
			}, 750);
		},
	},
});
</script>
<style scoped lang="scss">
@import './MainFilter.scss';
</style>
