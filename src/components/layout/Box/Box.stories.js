import Box from './Box.vue';
import { directions, justifications } from '../../../configurations/flexVariables';
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

export const Justify = () => ({
	data() {
		return {
			justifications,
		};
	},
	template: `<div>
		<farm-box :justify="k" v-for="k in justifications" :key="'justify-_' + k" style="border:1px solid var(--farm-stroke-base); margin-bottom: 16px;">
			<div>
				justify {{ k }}
			</div>
			<div>
				another div
			</div>
		</farm-box>
	</div>`,
});

export const Directions = () => ({
	data() {
		return {
			directions,
		};
	},
	template: `<div>
		<farm-box :direction="k" v-for="k in directions" :key="'direction-_' + k" style="border:1px solid var(--farm-stroke-base); margin-bottom: 16px;">
			<div>
			direction {{ k }}
			</div>
			<div>
				another div
			</div>
		</farm-box>
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
