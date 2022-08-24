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
        <template v-slot:text="{}">
            teste
        </template>
        <template v-slot:subtitle="{}">
            teste 2
        </template>
    </farm-idcaption>
    `,
});
