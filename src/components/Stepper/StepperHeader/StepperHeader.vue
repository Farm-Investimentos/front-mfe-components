<template>
	<div class="horizontal-step-size">
		<section :class="{ stepper__header: true, 'stepper__header--vertical': vertical }">
			<template v-for="(step, index) in steps">
				<div
					:class="{
						'stepper__header-step': true,
						'stepper__header-step--current': isStepCurrent(index),
						'stepper__header-step--previous': isStepPrevious(index),
						'stepper__header-step--error': isStepError(index),
						'stepper__header-step--next': isStepNext(index),
					}"
					:key="step.label"
				>
					<farm-icon v-if="step.icon">
						{{ step.icon }}
					</farm-icon>
					<farm-bodytext :type="2" variation="bold" v-else class="farm-icon__number">
						{{ index + 1 }}
					</farm-bodytext>
					<farm-bodytext :type="2" variation="bold">
						{{ step.label }}
					</farm-bodytext>
				</div>
				<div
					:class="{
						'stepper__divider--horizontal': !vertical,
						'stepper__divider--vertical': vertical,
						'stepper__divider--previous': isStepPrevious(index),
						'stepper__divider--previous-to-current': isStepPreviousToCurrent(index),
						'stepper__divider--previous-to-error': isStepPreviousToError(index),
						'stepper__divider--error-to-next': isStepErrorToNext(index),
						'stepper__divider--current-to-next': isStepCurrentToNext(index),
					}"
					v-if="hasDivider(index)"
					:key="'divider_' + step.label"
				/>
			</template>
		</section>
	</div>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue';
import IStep from './IStep';

export default defineComponent({
	name: 'farm-stepper-header',
	props: {
		/**
		 * Steps
		 * Implements IStep
		 */
		steps: Array as PropType<Array<IStep>>,
		/**
		 * Vertical or horizontal
		 */
		vertical: { type: Boolean, default: false },
		/**
		 * Current step
		 */
		currentStep: { type: Number },
		/**
		 * Is current step in error status?
		 */
		errorCurrentStepStatus: { type: Boolean, default: false },
	},
	setup(props) {
		const isStepCurrent = (index: number) => props.currentStep === index + 1;

		const isStepPrevious = (index: number) => props.currentStep > index + 1;

		const isStepError = (index: number) =>
			props.currentStep === index + 1 && props.errorCurrentStepStatus;

		const hasDivider = (index: number) => index < props.steps.length - 1;

		const isStepPreviousToCurrent = (index: number) =>
			index + 2 === props.currentStep && isStepCurrent(index + 1) && !isStepError(index + 1);

		const isStepPreviousToError = (index: number) =>
			index + 2 === props.currentStep && isStepCurrent(index + 1) && isStepError(index + 1);

		const isStepNext = (index: number) => index + 1 > props.currentStep;

		const isStepErrorToNext = (index: number) =>
			props.errorCurrentStepStatus && index + 1 === props.currentStep;

		const isStepCurrentToNext = (index: number) =>
			!props.errorCurrentStepStatus && index + 1 === props.currentStep;

		return {
			isStepCurrent,
			isStepPrevious,
			isStepError,
			isStepPreviousToCurrent,
			isStepPreviousToError,
			isStepNext,
			isStepErrorToNext,
			isStepCurrentToNext,
			hasDivider,
		};
	},
});
</script>
<style lang="scss" scoped>
@import './StepperHeader.scss';
</style>
