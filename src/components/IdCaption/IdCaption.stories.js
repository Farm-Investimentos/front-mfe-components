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
				selector: <em>farm-idcaption</em>
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
	template: `
    <farm-idcaption 
    icon="account-box-outline"
    copyText="texto a copiar"
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
    :link="true"
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
    copyText="texto a copiar"
    :link="true"
    >
        <template v-slot:title>
            Upper Line Text
        </template>
    </farm-idcaption>
    `,
});

export const NoTextToClip = () => ({
	template: `
    <farm-idcaption 
    icon="account-box-outline" 
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

export const CustomTooltipColor = () => ({
	template: `
    <farm-idcaption 
        icon="account-box-outline"
        copy-text="Custom Success Message to be copied"
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


export const Teste = () => ({
	template: `
    <farm-idcaption 
    icon="account-box-outline"
    copy-text=""
    :link="true"
    >
        <template v-slot:title>
            Upper Line Text
        </template>
        <template v-slot:subtitle>
            0
        </template>
    </farm-idcaption>
    `,
});