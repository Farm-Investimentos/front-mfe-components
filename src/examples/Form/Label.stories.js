import { Label } from '../../main.ts';

export default {
	title: 'Examples/Form/Label',
	component: Label,
};

export const Primary = () => ({
	components: { 'farm-label': Label },
	template: '<farm-label>Label</farm-label>',
});
export const Required = () => ({
	components: { 'farm-label': Label },
	template: '<farm-label :required="true">Label</farm-label>',
});

Primary.storyName = 'Basic';
Required.storyName = 'Required';
