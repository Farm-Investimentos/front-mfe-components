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

export const ModalSmall = () => ({
	components: {
		DialogHeader,
		DialogFooter,
	},
	data() {
		return {
			showModalSmall: false,
		};
	},
	template: `<div>
	<v-dialog content-class="modal-default modal-default-small" v-model="showModalSmall">
		<DialogHeader title="Exemplo" @onClose="showModalSmall = false;" />
		<v-main class="pa-6 pt-12">
			Place dialog content here!
		</v-main>
		<DialogFooter :hasConfirm="false" @onClose="showModalSmall = false;" />
	</v-dialog>
		<v-btn @click="showModalSmall = true;" color="secondary">
			Clique para abrir
		</v-btn>
	</div>`,
});

export const ModalScrollVertical = () => ({
	components: {
		DialogHeader,
		DialogFooter,
	},
	data() {
		return {
			showModalSmall: false,
		};
	},
	template: `<div>
	<v-dialog content-class="modal-default modal-default-small" v-model="showModalSmall">
		<DialogHeader title="Exemplo" @onClose="showModalSmall = false;" />
		<v-main class="pa-6 pt-12">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		</v-main>
		<DialogFooter :hasConfirm="false" @onClose="showModalSmall = false;" />
	</v-dialog>
		<v-btn @click="showModalSmall = true;" color="secondary">
			Clique para abrir
		</v-btn>
	</div>`,
});

export const ModalScrollHorizontal = () => ({
	components: {
		DialogHeader,
		DialogFooter,
	},
	data() {
		return {
			open: false,
		};
	},
	template: `<div>
	<v-dialog content-class="modal-default modal-default-small" v-model="open">
		<DialogHeader title="Exemplo" @onClose="open = false;" />
		<v-main class="pa-6 pt-12" >
			<table>
				<tr>
					<th>Company</th>
					<th>Name</th>
					<th>Country</th>
					<th>Contact</th>
					<th>Email</th>
				</tr>
				<tr>
					<td>Alfreds Futterkiste</td>
					<td>Maria Anders</td>
					<td>Germany</td>
					<td>+55193764-8418</td>
					<td>najes39390@dufeed.com</td>
				</tr>
				<tr>
					<td>Centro comercial Moctezuma</td>
					<td>Francisco Chang</td>
					<td>Mexico</td>
					<td>+55193764-8418</td>
					<td>najes39390@dufeed.com</td>
				</tr>
				<tr>
					<td>Ernst Handel</td>
					<td>Roland Mendel</td>
					<td>Austria</td>
					<td>+55193764-8418</td>
					<td>najes39390@dufeed.com</td>
				</tr>
				<tr>
					<td>Island Trading</td>
					<td>Helen Bennett</td>
					<td>UK</td>
					<td>+55193764-8418</td>
					<td>najes39390@dufeed.com</td>
				</tr>
				<tr>
					<td>Laughing Bacchus Winecellars</td>
					<td>Yoshi Tannamuri</td>
					<td>Canada</td>
					<td>+55193764-8418</td>
					<td>najes39390@dufeed.com</td>
				</tr>
				<tr>
					<td>Magazzini Alimentari Riuniti</td>
					<td>Giovanni Rovelli</td>
					<td>Italy</td>
					<td>+55193764-8418</td>
					<td>najes39390@dufeed.com</td>
				</tr>
			</table>
		</v-main>
	</v-dialog>
		<v-btn @click="open = true;" color="secondary">
			Clique para abrir
		</v-btn>
	</div>`,
});

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

ModalSmall.story = {
	name: 'Pequeno',
	parameters: {
		design: {
			type: 'figma',
			url:
				'https://www.figma.com/file/rkkAsX4IP0tzv1udIDXlqe/%E2%9C%8D---Onboarding---PJ?node-id=5336%3A32496',
		},
	},
};

ModalScrollVertical.storyName = 'Rolagem vertical';

ModalScrollHorizontal.storyName = 'Rolagem horizontal';