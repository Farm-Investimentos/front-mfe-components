import Collapsible from './Collapsible';

export default {
	title: 'Surfaces/Collapsible',
	components: Collapsible,
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
	template: '<farm-collapsible title="">collapsible content</farm-collapsible>',
});

export const Title = () => ({
	template: '<farm-collapsible title="Title">collapsible content</farm-collapsible>',
});

export const Icon = () => ({
	template: '<farm-collapsible icon="book" title="With Icon">collapsible content</farm-collapsible>',
});

export const Opened = () => ({
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
