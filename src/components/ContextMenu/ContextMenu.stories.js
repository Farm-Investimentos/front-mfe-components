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
	data() {
		return {
			value: false,
		};
	},
	methods: {
		toggleValue() {
			this.value = !this.value;
		},
	},
	template: `<div style="padding-left: 120px; padding-top: 80px; display: flex;">
        <farm-contextmenu v-model="value">
            some text
            <template v-slot:activator="{ on, attrs }">
                <farm-btn @click="toggleValue">toggle</farm-btn>
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
		toggleValue() {
			this.value = !this.value;
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
		toggleValue() {
			this.value = !this.value;
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
		toggleValue() {
			this.value = !this.value;
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
		toggleValue() {
			this.value = !this.value;
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
		toggleValue() {
			this.value = !this.value;
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