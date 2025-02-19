import { withDesign } from 'storybook-addon-designs';
import IdCaption from './';

export default {
	title: 'Display/IdCaption',
	component: IdCaption,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Id Caption<br />
				selector: <em>farm-idcaption</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p62YDSTfWg0Mcnf5APfdvI/%E2%9C%8D-Design-System-%7C-v2?node-id=4087%3A6463',
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	methods: {
		onLinkClick() {
			alert('onLinkClick');
		},
	},
	template: `
    <farm-idcaption 
    icon="account-box-outline"
    copyText="texto a copiar"
    :link="true"
    @onLinkClick="onLinkClick"
    >
        <template v-slot:title>
            Upper Line Text
        </template>
        <template v-slot:subtitle>
            Lower: Line Text Line Text Line Text
        </template>
    </farm-idcaption>
    `,
});

export const Linkless = () => ({
	template: `
    <farm-idcaption 
    icon="account-box-outline"
    copyText="texto a copiar"
    >
        <template v-slot:title>
            Upper Line Text
        </template>
        <template v-slot:subtitle>
            Lower:Line Text
        </template>
    </farm-idcaption>
    
    `,
});

export const CopyBtnHidden = () => ({
	template: `
    <farm-idcaption 
    icon="account-box-outline"
    copyText="texto a copiar"
    hide-copy-btn
    >
        <template v-slot:title>
            Upper Line Text
        </template>
        <template v-slot:subtitle>
            Lower:Line Text
        </template>
    </farm-idcaption>
    
    `,
});

export const Iconless = () => ({
	template: `
    <farm-idcaption 
    copyText="texto a copiar"
    :link="true"
    >
        <template v-slot:title>
            Upper Line Text
        </template>
        <template v-slot:subtitle>
            Lower:Line Text
        </template>
    </farm-idcaption>
    `,
});

export const NoUpperText = () => ({
	template: `
    <farm-idcaption 
    icon="account-box-outline"
    copyText="texto a copiar"
    >
        <template v-slot:subtitle>
            Lower:Line Text
        </template>
    </farm-idcaption>
    `,
});

export const NoBottomText = () => ({
	template: `
    <farm-idcaption 
    icon="account-box-outline" 
    :link="true"
    >
        <template v-slot:title>
            Upper Line Text
        </template>
    </farm-idcaption>
    `,
});

export const NoTextToCopy = () => ({
	template: `
    <farm-idcaption 
    icon="account-box-outline"
    copyText=""
    :link="true"
    >
        <template v-slot:title>
            Upper Line Text
        </template>
        <template v-slot:subtitle>
            Lower:Line Text
        </template>
    </farm-idcaption>
    `,
});

export const IconBoxCustomColor = () => ({
	template: `
    <farm-idcaption 
    icon="account-box-outline"
    copyText="texto a copiar"
    iconBoxColor="error"
    :link="true"
    >
        <template v-slot:title>
            Upper Line Text
        </template>
        <template v-slot:subtitle>
            Lower: Line Text Line Text Line Text
        </template>
    </farm-idcaption>
    `,
});

export const CustomTag = () => ({
	template: `
    <farm-idcaption 
    icon="account-box-outline"
    copyText="texto a copiar"
    :link="true"
    >
        <template v-slot:title>
            <b>Upper Line Text</b>
        </template>
        <template v-slot:subtitle>
            <b>Lower:</b> Line Text Line Text Line Text
        </template>
    </farm-idcaption>
    `,
});

export const CustomSuccessMessageAfterCopyToClipboard = () => ({
	template: `
    <farm-idcaption 
        icon="account-box-outline"
        copy-text="Custom Success Message to be copied"
        success-message="Custom Success Message"
    >
        <template v-slot:title>
            <b>Upper Line Text</b>
        </template>
        <template v-slot:subtitle>
            <b>Lower:</b> Line Text Line Text Line Text
        </template>
    </farm-idcaption>
    `,
});

export const CustomColors = () => ({
	template: `
    <farm-idcaption 
        icon="account-box-outline"
        copy-text="Custom Success Message to be copied"
        buttons-color="extra-1"
        tooltip-color="info"
    >
        <template v-slot:title>
            <b>Upper Line Text</b>
        </template>
        <template v-slot:subtitle>
            <b>Lower:</b> Line Text Line Text Line Text
        </template>
    </farm-idcaption>
    `,
});

export const LongTitles = () => ({
	template: `
    <farm-col sm="3">
    <farm-idcaption 
    icon="account-box-outline"
    copyText="texto a copiar"
    :link="true"
    >
        <template v-slot:title>
            Upper Line Text Upper Line Text
        </template>
        <template v-slot:subtitle>
            Lower: Line Text Line Text Line Text Line
        </template>
    </farm-idcaption>
    </farm-col>`,
});

export const NoHeight = () => ({
	template: `
    <farm-col sm="3">
    <farm-idcaption 
    copyText=""
    :noHeight="true"
    >
        <template v-slot:subtitle>
            Lower: Line Text Line Text Line Text Line
        </template>
    </farm-idcaption>
    </farm-col>`,
});
