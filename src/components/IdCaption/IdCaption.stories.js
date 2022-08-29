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
    copyText="texto a copiar">
        <template v-slot:title="{}">
            Upper Line Text
        </template>
        <template v-slot:subtitle="{}">
            Lower: Line Text
        </template>
    </farm-idcaption>
    `,
});
