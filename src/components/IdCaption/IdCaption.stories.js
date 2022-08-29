import IdCaption from './';

export default {
	title: 'IdCaption',
	component: IdCaption,
};

export const Primary = () => ({
	template: `
    <farm-idcaption 
    icon="account-box-outline" 
    link="/admin/dashboard" 
    copyText="texto a copiar"
    >
        <template v-slot:title="{}">
            Upper Line Text
        </template>
        <template v-slot:subtitle="{}">
            Lower: Line Text
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
        <template v-slot:title="{}">
            Upper Line Text
        </template>
        <template v-slot:subtitle="{}">
            Lower: Line Text
        </template>
    </farm-idcaption>
    
    `,
});

export const NoUpperText = () => ({
	template: `
    <farm-idcaption 
    icon="account-box-outline"
    copyText="texto a copiar"
    link="/admin/dashboard" 

    >
        <template v-slot:subtitle="{}">
            Lower: Line Text
        </template>
    </farm-idcaption>
    
    `,
});

export const NoBottomText = () => ({
	template: `
    <farm-idcaption 
    icon="account-box-outline" 
    link="/admin/dashboard" 
    copyText="texto a copiar"
    >
        <template v-slot:title="{}">
            Upper Line Text
        </template>
       
    </farm-idcaption>
    `,
});

export const Iconless = () => ({
	template: `
    <farm-idcaption 
    link="/admin/dashboard" 
    copyText="texto a copiar"
    >
        <template v-slot:title="{}">
            Upper Line Text
        </template>
        <template v-slot:subtitle="{}">
            Lower: Line Text
        </template>
    </farm-idcaption>
    `,
});

export const NoTextToClip = () => ({
	template: `
    <farm-idcaption 
    icon="account-box-outline" 
    link="/admin/dashboard" 
    >
        <template v-slot:title="{}">
            Upper Line Text
        </template>
        <template v-slot:subtitle="{}">
            Lower: Line Text
        </template>
    </farm-idcaption>
    `,
});
