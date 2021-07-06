import { shallowMount } from '@vue/test-utils';
import Loader from "./Loader";

describe("Loader component", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Loader);
    });

    test('Created hook', () => {
        expect(wrapper).toBeDefined();
    });

    describe('mount component', () => {
        it('renders correctly', () => {
            expect(wrapper.element).toMatchSnapshot();
        });
    });


});