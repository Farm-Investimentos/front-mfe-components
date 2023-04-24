// import { withDesign } from 'storybook-addon-designs';
import AlertReload from './AlertReload';

export default {
	title: 'Feedback/AlertReload',
	// decorators: [withDesign],
	parameters: {
		viewMode: 'docs',
		docs: {
			description: {
				component: `AlertReload<br />
				selector: <em>farm-alert-reload</em>`,
			},
		},
	},
};

export const Primary = () => ({
	components: {
		'farm-alert-reload': AlertReload,
	},
	template: `<div style="width: 480px;">
    <farm-alert-reload label="Text" />
    </div>`,
});

export const Vertical = () => ({
	components: {
		'farm-alert-reload': AlertReload,
	},
	template: `<div style="width: 480px;">
    <farm-alert-reload label="Text" vertical />
    </div>`,
});
