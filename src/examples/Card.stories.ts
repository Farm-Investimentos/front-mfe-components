import { withDesign } from 'storybook-addon-designs';
import { Card, CardContent } from '../main';
import gutters from '../configurations/gutters';

export default {
	title: 'Examples/Card',
	decorators: [withDesign],
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `Card and Card Content composition`,
			},
		},
	},
};

export const Primary = () => ({
	components: {
		'farm-card': Card,
		'farm-card-content': CardContent,
	},
	template: `<div style="width: 480px;">
    <farm-card>
		<farm-card-content>
			Content!
		</farm-card-content>
	</farm-card>
    </div>`,
});

export const MultipleContents = () => ({
	components: {
		'farm-card': Card,
		'farm-card-content': CardContent,
	},
	template: `<div style="width: 480px;">
    <farm-card>
		<farm-card-content>
			Content 1!
		</farm-card-content>
		<farm-card-content>
			Content 2!
		</farm-card-content>
		<farm-card-content>
			Content 3!
		</farm-card-content>
	</farm-card>
    </div>`,
});

export const Gutters = () => ({
	components: {
		'farm-card': Card,
		'farm-card-content': CardContent,
	},
	data() {
		return { gutters };
	},
	template: `<div style="width: 480px;">
    <farm-card v-for="gutter in gutters" :key="gutter" style="margin-bottom: 16px">
		<farm-card-content :gutter="gutter">
			Content with {{ gutter }} gutter
		</farm-card-content>
	</farm-card>
    </div>`,
});

export const Shadow = () => ({
	components: {
		'farm-card': Card,
		'farm-card-content': CardContent,
	},
	template: `<div style="width: 480px;">
    <farm-card shadow>
		<farm-card-content>
			Content!
		</farm-card-content>
	</farm-card>
    </div>`,
});
