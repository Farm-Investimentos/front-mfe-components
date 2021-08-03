<template>
    <v-col cols="12" sm="12" :md="item.md ? item.md : 2" class="v-col-fieldset-default pl-0">
        <label :for="`${forKey}-${item.key}`">{{ item.label }}</label>
        <v-text-field
             :id="`${forKey}-${item.key}`"
            color="secondary"
            v-model="inputVal"
            outlined
            dense
            :rules="rules && rules.length ? [rules] : []"
            :disabled="disabled"
        ></v-text-field>
    </v-col>
</template>
<script>
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
