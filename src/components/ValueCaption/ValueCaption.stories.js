import { withDesign } from 'storybook-addon-designs';
import ValueCaption from '.';

export default {
	title: 'Display/ValueCaption',
	component: ValueCaption,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Value Caption<br />
				selector: <em>farm-valuecaption</em>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: `
    <farm-valuecaption
    icon="account-box-outline"
    >
        <template v-slot:title>
            Upper Line Text
        </template>
        <template v-slot:subtitle>
            R$ 1.000.000,00
        </template>
    </farm-valuecaption>
    `,
});