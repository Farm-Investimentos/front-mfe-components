import { ref } from 'vue';

export default () => {
	const errorBucket = ref([]);
	const valid = ref(false);
	const validatable = true;

	return {
		errorBucket,
		valid,
		validatable,
	};
};
