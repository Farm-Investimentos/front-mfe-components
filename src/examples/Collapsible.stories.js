import { Collapsible } from '../main.ts';

export default {
	title: 'Examples/Collapsible',
	parameters: {
		docs: {
			description: {
				component: `Collapsible<br />selector: <em>farm-collapsible</em>`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { 'farm-collapsible': Collapsible },
	template: '<farm-collapsible title="">collapsible content</farm-collapsible>',
});

export const Title = () => ({
	components: { 'farm-collapsible': Collapsible },
	template: '<farm-collapsible title="Title">collapsible content</farm-collapsible>',
});

export const Icon = () => ({
	components: { 'farm-collapsible': Collapsible },
	template: '<farm-collapsible icon="book" title="">collapsible content</farm-collapsible>',
});

export const Opened = () => ({
	components: { 'farm-collapsible': Collapsible },
	data() {
		return {
			isOpen: true,
		};
	},
	template: `<div>
        status: {{ isOpen }}
        <farm-collapsible
            title=""
            :open="isOpen"
            @open="value => isOpen = value"
        >
            collapsible content
        </farm-collapsible>
    </div>`,
});

Primary.storyName = 'Basic';
Title.storyName = 'Title';
Icon.storyName = 'Icon';
Opened.storyName = 'Opened';
