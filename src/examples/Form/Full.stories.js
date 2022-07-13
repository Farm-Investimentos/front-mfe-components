import { Label, TextField } from '../../main.ts';

export default {
	title: 'Examples/Form/Full',
	component: Label,
};

export const Primary = () => ({
	components: { 'farm-label': Label, 'farm-textfield': TextField },
	data() {
		return {
			form: {
				document: 22055527835,
				email: '',
				name: '',
			},
			validForm: false,
			rules: {
				required: value => !!value || 'Campo obrigatório',
				email: value =>
					value === '' || value === null || emailValidator(value) || 'E-mail inválido',
			},
			styles: {
				vForm: {
					maxWidth: '480px',
				},
				footer: {
					display: 'flex',
					justifyContent: 'end',
				},
			},
		};
	},
	template: `
        <v-form v-model="validForm" :style="[styles.vForm]">
            <div>
                <farm-label :required="true">Documento</farm-label>
                <farm-textfield v-model="form.document" />
            </div>
            <div>
                <farm-label :required="true">E-mail</farm-label>
                <farm-textfield v-model="form.email" :rules="[rules.required, rules.email]" />
            </div>
            <div>
                <farm-label>Nome</farm-label>
                <farm-textfield v-model="form.name" />
            </div>
            <div class="footer" :style="[styles.footer]">
                <v-btn color="secondary" :disabled="!validForm">Salvar</v-btn>
            </div>
        </v-form>
    `,
});

Primary.storyName = 'Basic';

const emailValidator = value => {
	if (!value) {
		return false;
	}
	const pattern =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return pattern.test(value.trim()) || false;
};
