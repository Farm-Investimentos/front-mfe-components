import AlertBox from './AlertBox.vue';
import baseThemeColors from '../../configurations/_theme-colors-base.scss';
const colors = Object.keys(baseThemeColors);

export default {
	title: 'Feedback/AlertBox',
	component: AlertBox,
	parameters: {
		docs: {
			description: {
				component: `Alert Box<br />
					selector: <em>farm-alertbox</em><br />
					<span style="color: var(--farm-primary-base);">ready for use</span>
`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: '<farm-alertbox>alert box</farm-alertbox>',
});

export const withIcon = () => ({
	template: '<farm-alertbox icon="book">alert box</farm-alertbox>',
});

export const withDismissable = () => ({
	template: '<farm-alertbox dismissable>alert box</farm-alertbox>',
});

export const dense = () => ({
	template: '<farm-alertbox dismissable dense>alert box</farm-alertbox>',
});

export const full = () => ({
	template: '<farm-alertbox icon="book" dismissable>alert box</farm-alertbox>',
});

export const moreThanOneLine = () => ({
	data() {
		return {
			text: `lorem ipsu lorem ipsu lorem ipsu lorem ipsu
		lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu
		lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu
		lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu
		lorem ipsu lorem ipsu lorem ipsu`,
		};
	},
	template: '<farm-alertbox icon="book" dismissable>{{text}}</farm-alertbox>',
});

export const Colors = () => ({
	data() {
		return {
			colors,
		};
	},
	template: `
		<div>
		<farm-alertbox class="mt-3" v-for="color of colors" :key="'random_10_' + color" :color="color" icon="book" dismissable>alert box</farm-alertbox>
		</div> `,
});

export const withDismissableShowAgain = () => ({
	data() {
		return {
			v: true,
		};
	},
	template: `<div>
		<farm-alertbox v-model="v" dismissable>alert box</farm-alertbox>
		<farm-btn v-if="!v" @click="v = true;">
			show
		</farm-btn>
	</div>`,
});