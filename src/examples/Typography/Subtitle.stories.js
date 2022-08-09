import { Subtitle } from '../../main';

export default {
	title: 'Examples/Typography/Subtitle',
	component: Subtitle,
	parameters: {
		docs: {
			description: {
				component: `Subtitle<br />
				selector: <em>farm-subtitle</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { 'farm-subtitle': Subtitle },
	data() {
		return {
			types: [1, 2],
			variations: ['regular', 'medium'],
		};
	},
	template: `<div>
	<template v-for="type in types" :key="type">
		<farm-subtitle
			v-for="variation in variations"
			:key="variation"
			:type="type"
			:variation="variation">
			Subtitle {{ type }} {{ variation }}
		</farm-subtitle>
	</template>
	</div>`,
});

export const CustomTag = () => ({
	components: { 'farm-subtitle': Subtitle },
	data() {
		return {
			tags: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'legend', 'label', 'li'],
		};
	},
	template: `<div>
		<farm-subtitle
			v-for="t in tags"
			:tag="t"
			:key="t"
			:type="1"
			variation="regular"
			>
			Subtitle with {{ t }} tag
		</farm-subtitle>
	
	</div>`,
});
