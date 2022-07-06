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
					<span v-else class="farm-icon__number">
						{{ index + 1 }}
					</span>
					<span>
						{{ step.label }}
					</span>
				</div>
				<div
					:class="{
						'stepper__divider--horizontal': !vertical,
						'stepper__divider--vertical': vertical,
						'stepper__divider--previous': isStepPrevious(index),
						'stepper__divider--previous-to-current': isStepPreviousToCurrent(index),
						'stepper__divider--previous-to-error': isStepPreviousToError(index),
					}"
					v-if="hasDivider(index)"
					:key="'divider_' + step.label"
				/>
			</template>
		</section>
	</div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import IStep from './IStep';
import Icon from '../../Icon';

export default Vue.extend({
	name: 'farm-stepper-header',
	components: {
		'farm-icon': Icon,
	},
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
		isStepPreviousToCurrent(index: number): boolean {
			return (
				index + 2 == this.currentStep &&
				this.isStepCurrent(index + 1) &&
				!this.isStepError(index + 1)
			);
		},
		isStepPreviousToError(index: number): boolean {
			return (
				index + 2 == this.currentStep &&
				this.isStepCurrent(index + 1) &&
				this.isStepError(index + 1)
			);
		},
		isStepNext(index: number): boolean {
			return index + 1 > this.currentStep;
		},
	},
});
</script>
<style lang="sass" scoped>
@import './StepperHeader.scss'
</style>
