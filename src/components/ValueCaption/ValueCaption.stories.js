// import { withDesign } from 'storybook-addon-designs';
import ValueCaption from '.';
import baseThemeColors from '../../configurations/_theme-colors-base.module.scss';
const colors = Object.keys(baseThemeColors);

export default {
	title: 'Display/ValueCaption',
	component: ValueCaption,
	// decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Value Caption<br />
				selector: <em>farm-valuecaption</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>`,
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

export const Colors = () => ({
	data() {
		return {
			colors: [...colors],
		};
	},
	template: `<div class="d-flex flex-column">
       <farm-valuecaption
			icon="account-box-outline"
			v-for="color of colors" :key="color"
			:iconBoxColor="color"
			class="mb-3"
		>
			<template v-slot:title>
				color: {{ color }}
			</template>
			<template v-slot:subtitle>
				R$ 1.000,00
			</template>
		</farm-valuecaption>
	</div>`,
});
