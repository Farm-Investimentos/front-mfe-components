import { shallowMount } from '@vue/test-utils';
import OriginatorLogo from '../OriginatorLogo';

describe('OriginatorLogo component', () => {
	let wrapper;
	let component;

	beforeEach(() => {
		wrapper = shallowMount(OriginatorLogo, {
			propsData: {
				id: 10,
			},
		});
		component = wrapper.vm;
	});

	test('Created hook', () => {
		expect(wrapper).toBeDefined();
	});

	describe('mount component', () => {
		it('renders correctly', () => {
			expect(wrapper.element).toMatchSnapshot();
		});
	});

	describe('Computed properties', () => {
		it('Should have imgSrc', () => {
			expect(component.imgSrc).toEqual('/public/logos/originadores/10/full.svg');
		});
	});
});
