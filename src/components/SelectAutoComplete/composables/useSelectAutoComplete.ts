import { ref } from 'vue';

export default function useSelectAutoComplete (props) {
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
	const filteredItems = ref();

	const keys = {
		ArrowDown: 'next',
		ArrowUp: 'prev',
		Home: 'first',
		End: 'last',
	};

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
		keys,
		filteredItems,
	};
}
