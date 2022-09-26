import Modal from './Modal.vue';

export default {
	title: 'Display/Modal',
	component: Modal,
	parameters: {
		docs: {
			description: {
				component: `Modal<br />
				selector: <em>farm-modal</em>
				<span style="color: yellow;">wait</span>
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
			text,
		};
	},
	template: `<div>
	<farm-btn color="secondary" @click="value = true">abrir</farm-btn>
	<farm-modal v-model="value">
		<template v-slot:content>
			<div v-html="text" />
		</template>
	</farm-modal>
	</div>`,
});

export const HeaderAndBottomFromDS = () => ({
	data() {
		return {
			value: false,
			text,
		};
	},
	template: `<div>
	<farm-btn color="secondary" @click="value = true">abrir</farm-btn>
	<farm-modal v-model="value" :offsetTop="48" :offsetBottom="68">
		<template v-slot:header>
			<farm-dialog-header title="Título" @onClose="() => value = false" />
		</template>
		<template v-slot:content>
		<div v-html="text" />
		</template>
		
		<template v-slot:footer>
			<farm-dialog-footer @onConfirm="() => value = false" @onClose="() => value = false" />
		</template>
	</farm-modal>
	</div>`,
});

export const SizeMD = () => ({
	data() {
		return {
			value: false,
			text,
		};
	},
	template: `<div>
	<farm-btn color="secondary" @click="value = true">abrir</farm-btn>
	<farm-modal v-model="value" size="md">
		<template v-slot:content>
			<div v-html="text" />
		</template>
	</farm-modal>
	</div>`,
});

export const SizeSmall = () => ({
	data() {
		return {
			value: false,
			text,
		};
	},
	template: `<div>
	<farm-btn color="secondary" @click="value = true">abrir</farm-btn>
	<farm-modal v-model="value" size="sm">
		<template v-slot:content>
			<div v-html="text" />
		</template>
	</farm-modal>
	</div>`,
});

export const SizeXs = () => ({
	data() {
		return {
			value: false,
			text,
		};
	},
	template: `<div>
	<farm-btn color="secondary" @click="value = true">abrir</farm-btn>
	<farm-modal v-model="value" size="xs">
		<template v-slot:content>
			<div v-html="text" />
		</template>
	</farm-modal>
	</div>`,
});

export const HeaderAndBottom = () => ({
	data() {
		return {
			value: false,
			text,
		};
	},
	template: `<div>
	<farm-btn color="secondary" @click="value = true">abrir</farm-btn>
	<farm-modal v-model="value" :offsetTop="24" :offsetBottom="68">
		<template v-slot:header>
			Header
		</template>
		<template v-slot:content>
		<div v-html="text" />
		</template>
		
		<template v-slot:footer>
			Footer
		</template>
	</farm-modal>
	</div>`,
});

export const HorizontalScroll = () => ({
	data() {
		return {
			value: false,
		};
	},
	template: `<div>
	<farm-btn color="secondary" @click="value = true">abrir</farm-btn>
	<farm-modal v-model="value" size="md" :offsetBottom="68">
		<template v-slot:content>
			<div style="width: 800px;">
			horizontal scroll horizontal scroll horizontal scroll horizontal scroll horizontal scroll horizontal scroll horizontal scroll horizontal scroll horizontal scroll
			</div>
		</template>
		<template v-slot:footer>
			<farm-dialog-footer @onConfirm="() => value = false" @onClose="() => value = false" />
		</template>
	</farm-modal>
	</div>`,
});

export const CustomHeader = () => ({
	data() {
		return {
			value: false,
			text,
		};
	},
	template: `<div>
	<farm-btn color="secondary" @click="value = true">abrir</farm-btn>
	<farm-modal v-model="value" :offsetTop="24" :offsetBottom="68">
		<template v-slot:header>
		<farm-dialog-header>
			Template Slot <farm-chip :dense="true">chip</farm-chip>
		</farm-dialog-header>
		</template>
		<template v-slot:content>
		<div v-html="text" />
		</template>
		
		<template v-slot:footer>
			<farm-dialog-footer @onConfirm="() => value = false" @onClose="() => value = false" />
		</template>
	</farm-modal>
	</div>`,
});

export const Persistent = () => ({
	data() {
		return {
			value: false,
			text,
		};
	},
	template: `<div>
	<farm-btn color="secondary" @click="value = true">abrir</farm-btn>
	<farm-modal v-model="value" :offsetTop="48" :offsetBottom="64" :persistent="true">
		<template v-slot:header>
			<farm-dialog-header title="Título" @onClose="() => value = false" />
		</template>
		<template v-slot:content>
		<br />persistent modal<br />
		</template>
		
		<template v-slot:footer>
			<farm-dialog-footer @onConfirm="() => value = false" @onClose="() => value = false" />
		</template>
	</farm-modal>
	</div>`,
});

const text = `inicio!<br />
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
teste 3!`;
