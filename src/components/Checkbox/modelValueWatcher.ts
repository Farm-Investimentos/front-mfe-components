import { Ref, watch } from 'vue';

export default function (props, isTouched: Ref, innerValue: Ref, validate: Function) {
	watch(
		() => props.modelValue,
		newValue => {
			isTouched.value = true;
			innerValue.value = newValue;
			validate(innerValue.value);
		}
	);
}
