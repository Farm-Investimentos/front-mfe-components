<template>
    <div 
    :class="{
        'farm-radio_wrapper': true,
        'farm-radio_wrapper--column': $props.column,
    }">
        <div class="farm-radio-group"
            v-for="(button, index) in buttons" 
            :key="`farm-radio-group_` + index"
            @click="clicked(button.id)"
        >   
            <input :checked="button.id === $props.value" type="radio" :id="`farm-radio-group_` + index" name="radio" :value="button.id">
            <label>
                {{button.label}}
            </label>
        </div>
    </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import IRadioGroup from './IRadioGroup';
export default Vue.extend({
	name: 'farm-radio-group',
	props: {
		/**
		 * Array of buttons
		 */
		buttons: {
			type: Array as PropType<Array<IRadioGroup>>,
			default: () => [],
		},
        /**
		 * v-model
		 */
		value: {
			required: true,
		},
        column: {
            type: Boolean,
            default: false
        }
	},
    methods: {
        clicked(value) {
            this.$emit('input', value);
        }
    }

});
</script>
<style lang="scss" scoped>
@import './RadioGroup.scss';
</style>
