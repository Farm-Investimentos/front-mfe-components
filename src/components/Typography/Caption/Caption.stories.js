import Caption from './Caption';

export default {
	title: 'Typography/Caption',
	component: Caption,
	parameters: {
		docs: {
			description: {
				component: `Caption<br />
				selector: <em>farm-caption</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	data() {
		return {
			variations: ['regular', 'medium'],
		};
	},
	template: `<div>
		<farm-caption
			v-for="variation in variations"
			:key="variation"
			:variation="variation">
			Caption {{ variation }}
		</farm-caption>

	</div>`,
});

export const CustomTag = () => ({
	data() {
		return {
			tags: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'legend', 'label', 'li'],
		};
	},
	template: `<div>
		<farm-caption
			v-for="t in tags"
			:tag="t"
			:key="t"
			:type="1"
			variation="regular"
			>
			Caption with {{ t }} tag
		</farm-caption>
	
	</div>`,
});
