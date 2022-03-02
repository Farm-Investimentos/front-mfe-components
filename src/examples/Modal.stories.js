import { withDesign } from 'storybook-addon-designs';
import { DialogHeader, DialogFooter } from '../main';

export default {
	title: 'Examples/Modal',
	decorators: [withDesign],
	component: Modal,
};

export const Modal = () => ({
	/*
	 * How to create the default modal following FARM's Design System guideline
	 */
	components: {
		DialogHeader,
		DialogFooter,
	},
	data() {
		return {
			inputVal: false,
		};
	},
	template: `<div>
	<v-dialog content-class="modal-default" v-model="inputVal">
		<DialogHeader title="Exemplo" @onClose="inputVal = false;" />
		<v-main class="pa-6 pt-12">
			Place dialog content here!
		</v-main>
		<DialogFooter :hasConfirm="false" @onClose="inputVal = false;" />
	</v-dialog>
		<v-btn @click="inputVal = true;" color="secondary">
			Clique para abrir
		</v-btn>
	</div>`,
});

// Modal.storyName = 'Básico';
Modal.story = {
	name: 'Básico',
	parameters: {
		design: {
			type: 'figma',
			url:
				'https://www.figma.com/file/rkkAsX4IP0tzv1udIDXlqe/%E2%9C%8D---Onboarding---PJ?node-id=2867%3A10594',
		},
	},
};
