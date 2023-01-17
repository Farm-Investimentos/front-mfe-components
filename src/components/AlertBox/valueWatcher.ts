import { Ref, watch } from 'vue';

export default function (props, visible: Ref) {
	watch(
		() => props.value,
		(newValue: boolean) => {
			visible.value = newValue;
		}
	);
}
