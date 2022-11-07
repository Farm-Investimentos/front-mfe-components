import BodyText from './BodyText';

export default {
	title: 'Typography/BodyText',
	component: BodyText,
	parameters: {
		docs: {
			description: {
				component: `BodyText<br />
				selector: <em>farm-bodytext</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { 'farm-bodytext': BodyText },
	data() {
		return {
			types: [1, 2],
			variations: ['regular', 'medium', 'bold'],
		};
	},
	template: `<div>
	<div v-for="type in types" :key="type">
		<farm-bodytext
			v-for="variation in variations"
			:key="variation"
			:type="type"
			:variation="variation">
			BodyText {{ type }} {{ variation }}
		</farm-bodytext>
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
		<farm-bodytext
			v-for="t in tags"
			:tag="t"
			:key="t"
			:type="1"
			variation="regular"
			>
			BodyText with {{ t }} tag
		</farm-bodytext>
	
	</div>`,
});
