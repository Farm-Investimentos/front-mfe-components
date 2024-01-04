import { shallowMount } from '@vue/test-utils';
import Form from '../Form';
import { formWithChildrenFactory, getDeepErrorsBag } from './helpers';

describe('Form component', () => {
	let wrapper, component;

	beforeEach(() => {
		wrapper = shallowMount(Form);
		component = wrapper.vm;
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});

	describe('errors bag', () => {
		beforeEach(() => {
			const helper = formWithChildrenFactory(Form);

			wrapper = helper.wrapper;
			component = helper.component;
		});

		it('should have errors bag after mount form', () => {
			const { errorsBag, errorsBagLength } = getDeepErrorsBag(component);

			expect(component.errorsBag).toStrictEqual(errorsBag.value);
			expect(Object.keys(component.errorsBag).length).toBe(errorsBagLength);
		});

		it('should update errors bag after change validatable items', async () => {
			const { errorsBag, errorsBagLength } = getDeepErrorsBag(component);

			expect(component.errorsBag).toStrictEqual(errorsBag.value);
			expect(Object.keys(component.errorsBag).length).toBe(errorsBagLength);

			await component.addDynamic();
			await component.restart();

			const { errorsBag: plusOneErrorsBag, errorsBagLength: plusOneErrorsBagLength } =
				getDeepErrorsBag(component);

			expect(Object.keys(component.errorsBag).length).toBe(plusOneErrorsBagLength);
			expect(component.errorsBag).toStrictEqual(plusOneErrorsBag.value);

			await component.removeDynamic(1);
			await component.restart();

			const { errorsBag: minusOneErrorsBag, errorsBagLength: minusOneErrorsBagLength } =
				getDeepErrorsBag(component);

			expect(Object.keys(component.errorsBag).length).toBe(minusOneErrorsBagLength);
			expect(component.errorsBag).toStrictEqual(minusOneErrorsBag.value);
		});
	});
});
