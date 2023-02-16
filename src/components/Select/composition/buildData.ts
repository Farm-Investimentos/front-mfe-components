import { ref } from 'vue';

export default function (props) {
	const multipleValues = ref(Array.isArray(props.value) ? [...props.value] : []);
	const innerValue = ref(props.value);
	const isTouched = ref(false);
	const isFocus = ref(false);
	const isBlured = ref(false);
	const isVisible = ref(false);
	const selectedText = ref('');
	const checked = ref('1');
	const notChecked = ref(false);
	const inputField = ref();

	return {
		multipleValues,
		innerValue,
		isTouched,
		isFocus,
		isBlured,
		isVisible,
		selectedText,
		checked,
		notChecked,
		inputField,
	};
}
