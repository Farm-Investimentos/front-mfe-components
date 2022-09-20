<template>
    <div>
        <div 
            v-for="(button, index) in buttons" 
            :key="`farm-radio-group_` + index"
        >
            <input type="radio" :id="`farm-radio-group_` + index" :name="button.label" value="30">
            <label :for="`farm-radio-group_` + index">
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
	},

});
</script>
<style lang="scss" scoped>
@import './RadioGroup.scss';
</style>
