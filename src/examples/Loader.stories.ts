import { withDesign } from 'storybook-addon-designs';
import { Loader } from '../main';

export default {
	title: 'Examples/Loader',
	decorators: [withDesign],
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `Loader<br />
				selector: <em>farm-loader</em>`,
			},
		},
	},
};

export const Primary = () => ({
	components: {
		'farm-loader': Loader,
	},
	template: `<div style="width: 480px;">
    <farm-loader />
    </div>`,
});

export const Overlay = () => ({
	components: {
		'farm-loader': Loader,
	},
	data() {
		return {
			show: false,
		};
	},
	template: `<div style="width: 480px;">
    <farm-loader mode="overlay" v-if="show" />
		<button @click="onClick">click to show</button>
	</div>`,
	methods: {
		onClick() {
			this.show = true;
			setTimeout(() => {
				this.show = false;
			}, 2000);
		},
	},
});
