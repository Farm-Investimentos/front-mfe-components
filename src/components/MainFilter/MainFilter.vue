<template>
	<section :class="{ 'justify-end': justifyEnd === true }">
		<fieldset class="fieldset-default" v-if="hasInitialInput">
			<label :for="elementId">
				{{ label }}
				<v-icon style="vertical-align: middle"> mdi-file-find </v-icon>
			</label>
			<v-text-field
				color="secondary"
				@keyup="onKeyUp"
				:id="elementId"
				outlined
				dense
				v-model="inputValue"
			/>
		</fieldset>
		<v-btn
			v-if="hasExtraFilters"
			color="secondary"
			class="v-btn--responsive mt-14 mt-sm-8"
			@click="onFilterClick"
		>
			<v-icon color="white" class="mr-2">mdi-filter</v-icon>
			Filtrar
		</v-btn>
	</section>
</template>

<script>
import { VBtn } from 'vuetify/lib/components/VBtn';
import { VTextField } from 'vuetify/lib/components/VTextField';
import { VIcon } from 'vuetify/lib/components/VIcon';
export default {
	name: 'MainFilter',
	components: {
		VTextField,
		VBtn,
		VIcon,
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
	},

	watch: {
		initialValue(newValue) {
			//this.$refs[this.elementId + 'input'].value = newValue;
			this.inputValue = newValue;
		},
	},
	data: () => {
		return {
			timer: null,
			inputValue: '',
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
				(keyCode > 90 && keyCode < 186)
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
};
</script>

<style scoped lang="scss">
section {
	display: flex;
	flex-direction: row;
	.v-btn {
		margin-left: 1rem;
	}
}
@media screen and (max-width: 600px) {
	section {
		flex-direction: column;
		margin-bottom: 1rem;
		.v-btn {
			margin-left: 0;
			margin-top: 0 !important;
		}
	}
}
</style>
