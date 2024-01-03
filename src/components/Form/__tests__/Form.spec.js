import { shallowMount } from '@vue/test-utils';
import Form from '../Form';
import { formWithChildrenFactory, getShallowErrorsBag } from './helpers';

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
			const errorsBag = getShallowErrorsBag(component.$children);

			expect(component.errorsBag).toEqual(errorsBag);
		});

		it('should update errors bag after adding more inputs', async () => {
			const errorsBag = getShallowErrorsBag(component.$children);

			console.log(wrapper.html());

			// console.log(wrapper.find('#add-dynamic-button').trigger('click'));

			expect(component.errorsBag).toEqual(errorsBag);

			// console.log(component.addDynamic());
			// console.log(component.addDynamic());
			// console.log(component.addDynamic());

			console.log(wrapper.html());

			expect(component.errorsBag).toEqual(errorsBag);
		});
	});
});
