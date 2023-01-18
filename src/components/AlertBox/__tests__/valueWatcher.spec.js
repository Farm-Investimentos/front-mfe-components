import { ref, reactive } from 'vue';
import valueWatcher from '../valueWatcher';

describe('valueWatcher', () => {
	it('Should change value for visible', done => {
		const visible = ref(false);
		const mockProps = reactive({ value: false });
		valueWatcher(mockProps, visible);
		mockProps.value = true;
		setTimeout(() => {
			expect(visible.value).toBeTruthy();
			done();
		});
	});
});
