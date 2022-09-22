<template>
    <div 
    :class="{
        'farm-radio-group': true,
        'farm-radio-group--column': $props.column,
    }">
        <div class="farm-radio-group__item"
            v-for="(button, index) in buttons" 
            :key="`farm-radio-group_` + index"
            @click="clicked(button.id)"
        >   
            <input  
                type="radio" 
                name="radio" 
                :checked="button.id === $props.value"
                :id="`farm-radio-group_` + index"
                :style="cssVars" 
                :value="button.id"
               >
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
        },
        color: {
            type: String,
			default: '#00B493',
        }
	},
    methods: {
        clicked(value) {
            this.$emit('input', value);
        }
    },
    computed: {
        cssVars () {
            return {
                '--radio-group-color': this.color
            };
        }
    }

});
</script>
<style lang="scss" scoped>
@import './RadioGroup.scss';
</style>
