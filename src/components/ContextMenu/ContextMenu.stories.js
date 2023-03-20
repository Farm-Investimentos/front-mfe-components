import { withDesign } from 'storybook-addon-designs';
import ContextMenu from './';

export default {
	title: 'Interactions/ContextMenu',
	component: ContextMenu,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `ContextMenu<br />
				selector: <em>farm-contextmenu</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: `<div style="padding-left: 120px; padding-top: 80px; display: flex;">
		<farm-contextmenu>
			some text
			<template v-slot:activator="{ on, attrs }">
                <farm-btn
					v-bind="attrs"
					v-on="on"
				>
					open
				</farm-btn>
            </template>
        </farm-contextmenu>
	</div>`,
});

export const LongActivator = () => ({
	template: `<div style="padding-left: 120px; padding-top: 80px; display: flex;">
        <farm-contextmenu>
            some text
            <template v-slot:activator="{ on, attrs }">
                <farm-btn
					v-bind="attrs"
					v-on="on"
				>
					Very long Activator
				</farm-btn>
            </template>
        </farm-contextmenu>
	</div>`,
});

export const IconActivator = () => ({
	template: `<div style="padding-left: 120px; padding-top: 80px; display: flex;">
        <farm-contextmenu>
            some text
            <template v-slot:activator="{ on, attrs }">
                <farm-btn
					v-bind="attrs"
					v-on="on"
					icon
				>
					<farm-icon>help-circle</farm-icon>
				</farm-btn>
            </template>
        </farm-contextmenu>
	</div>`,
});

export const LongContent = () => ({
	data() {
		return {
			value: false,
		};
	},
	methods: {
		toggleValue(event) {
			this.value = !this.value;
			event.stopPropagation();
		},
	},
	template: `<div style="padding-left: 120px; padding-top: 80px;">
        <farm-contextmenu v-model="value">
            <div style="width: 160px">long content<br />
			with breakline</div>
            <template v-slot:activator="{ on, attrs }">
                <farm-btn @click="toggleValue">toggle</farm-btn>
            </template>
        </farm-contextmenu>
	</div>`,
});

export const Bottom = () => ({
	data() {
		return {
			value: false,
		};
	},
	methods: {
		toggleValue(event) {
			this.value = !this.value;
			event.stopPropagation();
		},
	},
	template: `<div style="padding-left: 120px; padding-top: 80px; display: flex;">
        <farm-contextmenu v-model="value" :bottom="true">
            some text
            <template v-slot:activator="{ on, attrs }">
                <farm-btn @click="toggleValue">toggle</farm-btn>
            </template>
        </farm-contextmenu>
	</div>`,
});

export const ComplexContent = () => ({
	data() {
		return {
			value: false,
		};
	},
	methods: {
		toggleValue(event) {
			this.value = !this.value;
			event.stopPropagation();
		},
	},
	template: `<div style="padding-left: 120px; padding-top: 80px; display: flex;">
        <farm-contextmenu v-model="value">
            <farm-chip>farm chip</farm-chip>
            <template v-slot:activator="{ on, attrs }">
                <farm-btn @click="toggleValue">toggle</farm-btn>
            </template>
        </farm-contextmenu>
	</div>`,
});

export const OverflowContent = () => ({
	data() {
		return {
			value: false,
		};
	},
	methods: {
		toggleValue(event) {
			this.value = !this.value;
			event.stopPropagation();
		},
	},
	template: `<div style="padding-left: 120px; padding-top: 80px; display: flex; flex-direction: column">
		<div>
		default: 360px
		</div>
        <farm-contextmenu v-model="value">
            first line<br />new line<br />new line<br />
			new line<br />new line<br />new line<br />
			new line<br />new line<br />new line<br />
			new line<br />new line<br />new line<br />
			new line<br />new line<br />new line<br />
			new line<br />new line<br />new line<br />
			new line<br />new line<br />new line<br />
			new line<br />new line<br />last line<br />
            <template v-slot:activator="{ on, attrs }">
                <farm-btn @click="toggleValue">toggle</farm-btn>
            </template>
        </farm-contextmenu>
	</div>`,
});

export const MaxHeight = () => ({
	data() {
		return {
			value: false,
		};
	},
	methods: {
		toggleValue(event) {
			this.value = !this.value;
			event.stopPropagation();
		},
	},
	template: `<div style="padding-left: 120px; padding-top: 80px; display: flex; flex-direction: column;">
        <farm-contextmenu v-model="value" maxHeight="160">
            first line<br />new line<br />new line<br />
			new line<br />new line<br />new line<br />
			new line<br />new line<br />new line<br />
			new line<br />new line<br />new line<br />
			new line<br />new line<br />new line<br />
			new line<br />new line<br />new line<br />
			new line<br />new line<br />new line<br />
			new line<br />new line<br />last line<br />
            <template v-slot:activator="{ on, attrs }">
                <farm-btn @click="toggleValue">toggle</farm-btn>
            </template>
        </farm-contextmenu>
	</div>`,
});

export const Right = () => ({
	template: `<div style="width: 100%; display: flex; justify-content: right;">
			<farm-contextmenu>
				<farm-list>
				<farm-listitem clickable hoverColor="primary">primary</farm-listitem>
				<farm-listitem clickable hoverColor="extra-1" hoverColorVariation="lighten">extra 1 lighten</farm-listitem>
				<farm-listitem clickable hoverColor="error" hoverColorVariation="lighten">
					<farm-icon size="sm" color="error">trash-can</farm-icon>
					<farm-typography color="error" tag="span">Error</farm-typography>
				</farm-listitem>
			</farm-list>
			<template v-slot:activator="{ on, attrs }">
                <farm-btn
					v-bind="attrs"
					v-on="on"
				>
					open
				</farm-btn>
            </template>
        </farm-contextmenu>
	</div>`,
});

export const VModel = () => ({
	data() {
		return {
			value: false,
		};
	},
	methods: {
		toggleValue(event) {
			this.value = true;

			setTimeout(() => {
				this.value = false;
			}, 2000);
			event.preventDefault();
			event.stopPropagation();
		},
	},
	template: `<div style="padding-left: 120px; padding-top: 80px; display: flex;">
        <farm-contextmenu bottom v-model="value">
            some text
            <template v-slot:activator="{ on, attrs }">
                <farm-btn :disabled="value" @click="toggleValue">
					{{ !value ? 'Open' : 'Will close in 2s' }}
				</farm-btn>
            </template>
        </farm-contextmenu>
	</div>`,
});
