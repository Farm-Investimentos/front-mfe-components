import Subtitle from './Subtitle';

export default {
	title: 'Typography/Subtitle',
	component: Subtitle,
	parameters: {
		docs: {
			description: {
				component: `Subtitle<br />
				selector: <em>farm-subtitle</em><br />
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
			types: [1, 2],
			variations: ['regular', 'medium'],
		};
	},
	template: `<div>
	<div v-for="type in types" :key="type">
		<farm-subtitle
			v-for="variation in variations"
			:key="'primary_' + variation + type"
			:type="type"
			:variation="variation">
			Subtitle {{ type }} {{ variation }}
		</farm-subtitle>
	</div>
	</div>`,
});

export const CustomTag = () => ({
	data() {
		return {
			tags: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'legend', 'label', 'li'],
		};
	},
	template: `<div>
		<farm-subtitle
			v-for="t in tags"
			:tag="t"
			:key="'customtag_' + t"
			:type="1"
			variation="regular"
			>
			Subtitle with {{ t }} tag
		</farm-subtitle>
	
	</div>`,
});
