import { withDesign } from 'storybook-addon-designs';
import { Loader } from '../../main';

export default {
	title: 'Feedback/Loader',
	decorators: [withDesign],
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `Loader<br />
				selector: <em>farm-loader</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>`,
			},
		},
	},
};

export const Primary = () => ({
	template: `<div style="width: 480px;">
    <farm-loader />
    </div>`,
});

export const Small = () => ({
	template: `<div style="width: 480px;">
    <farm-loader size="small" />
    </div>`,
});

export const Overlay = () => ({
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
			}, 5000);
		},
	},
});
