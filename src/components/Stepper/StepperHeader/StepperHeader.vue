<template>
	<section :class="{ stepper__header: true, 'stepper__header--vertical': vertical }">
		<template v-for="(step, index) in steps">
			<div
				:class="{
					'stepper__header-step': true,
					'stepper__header-step--current': isStepCurrent(index),
					'stepper__header-step--previous': isStepPrevious(index),
					'stepper__header-step--error': isStepError(index),
				}"
				:key="step.label"
			>
				{{ step.label }}
				<i
					:class="{
						mdi: true,
						['mdi-' + step.icon]: true,
					}"
					v-if="step.icon"
				></i>
			</div>
			<hr
				:class="{
					'stepper__divider--previous': isStepCurrent(index),
				}"
				v-if="!vertical && hasDivider(index)"
				:key="'divider_' + step.label"
			/>
			<div
				:class="{
					'stepper__divider--vertical': true,
					'stepper__divider--previous': isStepCurrent(index),
				}"
				v-if="vertical && hasDivider(index)"
				:key="'divider_' + step.label"
			/>
		</template>
	</section>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import IStep from './IStep';

export default Vue.extend({
	name: 'farm-stepper-header',
	props: {
		steps: Array as PropType<Array<IStep>>,
		vertical: Boolean,
		currentStep: Number,
		errorCurrentStepStatus: Boolean,
	},
	methods: {
		isStepCurrent(index: number): boolean {
			return this.currentStep === index + 1;
		},
		isStepPrevious(index: number): boolean {
			return this.currentStep > index + 1;
		},
		isStepError(index: number): boolean {
			return this.currentStep === index + 1 && this.errorCurrentStepStatus;
		},
		hasDivider(index: number): boolean {
			return index < this.steps.length - 1;
		},
	},
});
</script>
<style lang="sass" scoped>
@import './StepperHeader.scss'
</style>
