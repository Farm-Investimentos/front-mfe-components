import { shallowMount } from '@vue/test-utils';
import StepperHeader from '../StepperHeader';

describe('StepperHeader component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(StepperHeader, {
			propsData: {
				steps: [
					{ label: 'Step 1', icon: '' },
					{ label: 'Step 2', icon: 'monitor' },
					{ label: 'Step 3', icon: 'book' },
					{ label: 'Step 4', icon: '' },
				],
				currentStep: 3,
			},
		});
		component = wrapper.vm;
	});

	test('StepperHeader created', () => {
		expect(wrapper).toBeDefined();
	});

	describe('Methods', () => {
		it('Should check if step is current', () => {
			expect(component.isStepCurrent(1)).toBeFalsy();
			expect(component.isStepCurrent(2)).toBeTruthy();
		});

		it('Should check if step is previous', () => {
			expect(component.isStepPrevious(1)).toBeTruthy();
			expect(component.isStepPrevious(3)).toBeFalsy();
		});

		it('Should check if step is error', () => {
			expect(component.isStepError(1)).toBeFalsy();
		});

		it('Should check if has divider', () => {
			expect(component.hasDivider(4)).toBeFalsy();
			expect(component.hasDivider(1)).toBeTruthy();
		});

		it('Should check if step is next', () => {
			expect(component.isStepNext(4)).toBeTruthy();
			expect(component.isStepNext(1)).toBeFalsy();
		});

		
	});
});
