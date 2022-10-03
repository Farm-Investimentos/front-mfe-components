import Box from './Box.vue';
import gutters from '../../../configurations/gutters';

export default {
	title: 'Layout/Box',
	component: Box,
	parameters: {
		docs: {
			description: {
				component: `Box<br />
				selector: <em>farm-box</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: `<div>
		<farm-box>box</farm-box>
	</div>`,
});

export const Tag = () => ({
	template: `<div>
		<farm-box tag="section">tag: section</farm-box>
	</div>`,
});

export const Gutters = () => ({
	data() {
		return { gutters };
	},
	template: `<div style="width: 480px;">
		<farm-box v-for="gutter in gutters" :key="gutter" :gutter="gutter" style="margin-bottom: 16px">
			box with gutter {{ gutter }}
		</farm-box>
    </div>`,
});
