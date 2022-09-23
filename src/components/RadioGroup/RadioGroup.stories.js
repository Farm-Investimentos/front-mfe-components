import RadioGroup from './RadioGroup';

export default {
	title: 'Form/RadioGroup',
	component: RadioGroup,
	parameters: {
		docs: {
			description: {
				component: `RadioGroup<br />
				selector: <em>farm-radio-group</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	data() {
		return {
			buttons: [
                { label: 'Button 1', id: 1 }, 
                { label: 'Button 2', id: 2 }, 
                { label: 'Button 3', id: 3 }
            ],
			checkedValue: 1
		};
	},
	template: `<div>
	    <farm-radio-group v-model="checkedValue" column :buttons="buttons" />
	</div>`,
});

Primary.storyName = 'Basic';
