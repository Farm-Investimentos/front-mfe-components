<template>
	<v-col cols="12" sm="12" :md="item.md ? item.md : 2" class="v-col-fieldset-default pl-0">
		<label :for="`${forKey}-${item.key}`">
			{{ item.label }}
			<span class="required" v-if="required">*</span>
		</label>
		<v-text-field
			:id="`${forKey}-${item.key}`"
			color="secondary"
			v-model="inputVal"
			outlined
			dense
            v-mask="`${ mask ? mask : '' }`"
			:rules="rules && rules.length ? rules : []"
			:disabled="disabled"
		></v-text-field>
	</v-col>
</template>
<script>
import { VTextField } from 'vuetify/lib/components/VTextField';
import { VCol } from 'vuetify/lib/components/VGrid';
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
		value: {
			required: true,
		},
		rules: {
			type: Array,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		forKey: {
			type: String,
			required: false,
		},
		required: {
			type: Boolean,
			default: false,
			required: false,
		},
        mask: {
            type: String,
            default: null,
        },
	},
	components: {
		VCol,
		VTextField,
	},
	computed: {
		inputVal: {
			get() {
				return this.value;
			},
			set(val) {
				this.$emit('input', val);
			},
		},
	},
};
</script>
