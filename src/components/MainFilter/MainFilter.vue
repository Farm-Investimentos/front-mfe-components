<template>
	<section :class="{ 'justify-end': justifyEnd === true }">
		<fieldset class="fieldset-default" v-if="hasInitialInput">
			<label :for="elementId">
				{{ label }}
				<v-icon style="vertical-align: middle"> mdi-file-find </v-icon>
			</label>
			<v-text-field
				color="secondary"
				outlined
				dense
				v-model="inputValue"
				:id="elementId"
				@keyup="onKeyUp"
			/>
		</fieldset>
		<DefaultButton
			v-if="hasExtraFilters"
			color="secondary"
			class="v-btn--responsive mt-14 mt-sm-8"
			@click="onFilterClick"
		>
			<v-icon color="white" class="mr-2" small>{{ extraFiltersBtnIcon }}</v-icon>
			{{ extraFiltersBtnLabel }}
		</DefaultButton>
	</section>
</template>

<script>
import Vue from 'vue';
import { VTextField } from 'vuetify/lib/components/VTextField';
import { VIcon } from 'vuetify/lib/components/VIcon';
import DefaultButton from '../Buttons/DefaultButton';

export default Vue.extend({
	name: 'MainFilter',
	components: {
		VTextField,
		VIcon,
		DefaultButton,
	},
	props: {
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
		label: {
			type: String,
			default: 'Quer localizar um cliente?',
		},
		elementId: {
			type: String,
			default: 'form-main-filter-search',
		},
		initialValue: {
			type: String,
			default: () => '',
		},
		showFilters: {
			type: Boolean,
			default: false,
		},
	},

	watch: {
		initialValue(newValue) {
			this.inputValue = newValue;
		},
	},
	computed: {
		extraFiltersBtnLabel() {
			return `${this.showFilters ? 'Esconder' : 'Ver'} Filtros`;
		},
		extraFiltersBtnIcon() {
			return this.showFilters ? 'mdi-filter-off' : 'mdi-filter';
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
		onKeyUp(event) {
			const keyCode = event.keyCode;
			if (keyCode === 13) {
				this.$emit('onEnter', event.target.value);
				return false;
			}

			if (
				(keyCode < 48 && keyCode !== 8 && keyCode !== 46) ||
				(keyCode > 90 && keyCode < 186 && keyCode !== 91)
			) {
				return false;
			}
			if (this.timer) {
				clearTimeout(this.timer);
				this.timer = null;
			}
			this.timer = setTimeout(() => {
				this.$emit('onInputChange', event.target.value);
			}, 400);
		},
	},
});
</script>
<style scoped lang="scss">
@import './MainFilter.scss';
</style>
