import { shallowMount, mount } from '@vue/test-utils';
import { ref } from 'vue';

export function getShallowErrorsBag(children) {
	const errorsBag = children.reduce((accumulator, { _uid }) => {
		return {
			...accumulator,
			[_uid]: true,
		};
	}, {});

	return {
		errorsBag,
		errorsBagLength: Object.keys(errorsBag).length,
	};
}

function mountSlot() {
	return `
  <div>
    <farm-textfield-v2 />
    <farm-textfield-v2 />
    <farm-textfield-v2 />
  
    <section id="dynamics">
      <template v-for="(dynamic, index) in props?.form?.dynamics">
        <farm-textfield-v2 :key="index" name="dynamic + '-index'" />
      </template>
    </section>
  </div>
`;
	/* return {
		props: {
			form: {
				type: Object,
				required: true,
			},
		},
		render(h) {
			return h(
				`
        <div>
          <farm-textfield-v2 />
          <farm-textfield-v2 />
          <farm-textfield-v2 />
        
          <section id="dynamics">
            <template v-for="(dynamic, index) in form.dynamics">
              <farm-textfield-v2 :key="index" name="dynamic + '-index'" />
            </template>
          </section>
        </div>
    `,
				{
					props: {
						form: this.form,
					},
				}
			);
		},
	}; */
}

export function formWithChildrenFactory(formComponent) {
	const formSlot = mountSlot();
	const form = ref({
		dynamics: [1, 2],
	});
	const isValidForm = ref(false);

	/* const wrapper2 = shallowMount(formComponent, {
		props: {
			value: isValidForm,
		},
		render: function (createElement) {
			// `<div><slot :text="message"></slot></div>`
			return createElement('div', [
				this.$scopedSlots.default({
					form,
				}),
			]);
		},
	}); */

	const wrapper = mount(formComponent, {
		propsData: {
			value: isValidForm,
		},
		props: {
			form,
		},
		scopedSlots: {
			default: formSlot,
		},
		/* mocks: {
			addDynamic() {
				form.value.dynamics.push({
					name: '',
				});

				return form.value.dynamics;
			},
			removeDynamic(index) {
				form.value.splice(index, 1);
			},
		}, */
	});

	return {
		isValidForm,
		wrapper,
		component: wrapper.vm,
	};
}
