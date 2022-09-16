import Modal from './Modal.vue';

export default {
	title: 'Modal',
	component: Modal,
	parameters: {
		docs: {
			description: {
				component: `Modal<br />
				selector: <em>farm-modal</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	data() {
		return {
			value: false,
		};
	},
	template: `<div>
	<farm-btn color="secondary" @click="value = true">abrir</farm-btn>
	<farm-modal v-model="value">
		<template v-slot:content>
		inicio!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste 1!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste 2!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste 3!
		</template>
	</farm-modal>
	</div>`,
});

export const HeaderAndBottomFromDS = () => ({
	data() {
		return {
			value: false,
		};
	},
	template: `<div>
	<farm-btn color="secondary" @click="value = true">abrir</farm-btn>
	<farm-modal v-model="value" :offsetTop="24" :offsetBottom="64">
		<template v-slot:header>
			<farm-dialog-header title="Título" @onClose="() => value = false" />
		</template>
		<template v-slot:content>
		inicio!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste 1!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste 2!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste 3!
		</template>
		
		<template v-slot:footer>
			<farm-dialog-footer @onConfirm="() => value = false" @onClose="() => value = false" />
		</template>
	</farm-modal>
	</div>`,
});

export const HeaderAndBottom = () => ({
	data() {
		return {
			value: false,
		};
	},
	template: `<div>
	<farm-btn color="secondary" @click="value = true">abrir</farm-btn>
	<farm-modal v-model="value" :offsetTop="24" :offsetBottom="64">
		<template v-slot:header>
			header vai aqui
		</template>
		<template v-slot:content>
		inicio!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste 1!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste 2!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste!<br />
		teste 3!
		</template>
		
		<template v-slot:footer>
			footer vai aqui
		</template>
	</farm-modal>
	</div>`,
});
