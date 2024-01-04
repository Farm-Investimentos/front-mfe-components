import { mount } from '@vue/test-utils';
import { ref } from 'vue';

export const errorsBag = ref({});

export function getDeepErrorsBag($node) {
	const getDeep = $node => {
		$node.$children.forEach($leaf => {
			if ($leaf.validate) {
				errorsBag.value[$leaf._uid] = $leaf.valid;
			} else if ($leaf.$children.length > 1) {
				getDeep($leaf);
			} else if ($leaf.$children[0] && $leaf.$children[0].validate) {
				errorsBag.value[$leaf.$children[0]._uid] = $leaf.$children[0].valid;
			} else if ($leaf.validatable) {
				errorsBag.value[$leaf._uid] = $leaf.valid;
			} else {
				getDeep($leaf);
			}
		});
	};

	getDeep($node);

	return {
		errorsBag,
		errorsBagLength: errorsBag.value ? Object.keys(errorsBag.value).length : 0,
	};
}

export function resetErrorsBag() {
	errorsBag.value = {};
}

function mountSlot() {
	const normalComponent = {
		props: {
			form: {
				type: Object,
				required: true,
			},
		},
		template: `
		<div>
			<farm-textfield-v2 />
			<farm-textfield-v2 />
			<farm-textfield-v2 />
	
			section id="dynamics">
					<farm-textfield-v2 v-for="(dynamic, index) in form?.dynamics" :key="index" :name="'dynamic-' + index" />
			</section>
		</div>
	`,
	};

	return {
		normalComponent,
	};
}

export function formWithChildrenFactory(formComponent) {
	resetErrorsBag();

	const { normalComponent } = mountSlot();

	const form = ref({
		dynamics: [],
	});
	const isValidForm = ref(false);

	const wrapper = mount(formComponent, {
		propsData: {
			value: isValidForm,
		},
		slots: {
			default: '<normal-component :form="form" />',
		},
		mocks: {
			form,
			addDynamic() {
				form.value.dynamics.push({
					name: '',
				});

				return form.value.dynamics;
			},
			removeDynamic(index) {
				form.value.dynamics.splice(index, 1);

				return form.value.dynamics;
			},
		},
		stubs: {
			'normal-component': normalComponent,
		},
	});

	return {
		isValidForm,
		wrapper,
		component: wrapper.vm,
	};
}
