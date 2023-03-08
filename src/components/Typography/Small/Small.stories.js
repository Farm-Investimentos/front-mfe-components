import Small from './Small';

export default {
	title: 'Typography/Small',
	component: Small,
	parameters: {
		docs: {
			description: {
				component: `Small<br />
				selector: <em>farm-bodysmall</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	data() {
		return {
			variations: ['regular', 'medium', 'bold'],
		};
	},
	template: `<div >
        <div v-for="variation in variations" :key="variation">
            <farm-bodysmall  :variation="variation">
                Small {{ variation }}
            </farm-bodysmall>
        </div>
	</div>`,
});

Primary.storyName = 'Basic';
