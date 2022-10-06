import Form from './Form.vue';

export default {
	title: 'Form/Form',
	component: Form,
	parameters: {
		docs: {
			description: {
				component: `Form<br />
				selector: <em>farm-form</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

const styles = {
	vForm: {
		maxWidth: '480px',
	},
	footer: {
		display: 'flex',
		justifyContent: 'end',
	},
};

export const Primary = () => ({
	data() {
		return {
			form: {
				document: 'Document',
				name: 'Name',
				checkbox: true,
			},
			validForm: false,
			rules: {
				required: value => !!value || 'Campo obrigatório',
				checked: value => !!value || 'Deve estar marcado',
			},
			styles,
		};
	},
	template: `
        <farm-form v-model="validForm" :style="[styles.vForm]" ref="form">
			<div>
				<farm-label :required="true">Documento</farm-label>
				<farm-textfield v-model="form.document" :rules="[rules.required]" />
			</div>
			<farm-label :required="true">Nome</farm-label>
			<farm-textfield v-model="form.name" :rules="[rules.required]" />
			
			<farm-label :required="true">True/false</farm-label>
			<farm-checkbox v-model="form.checkbox" :rules="[rules.checked]" />
			
			
            <div class="footer" :style="[styles.footer]">
				<farm-btn color="secondary" outlined @click="$refs.form.reset()" class="mr-3">Reset</farm-btn>
				<farm-btn color="secondary" :disabled="!validForm">Salvar</farm-btn>
            </div>
        </farm-form>
    `,
});

export const Secondary = () => ({
	data() {
		return {
			form: {
				document: 'Document',
				not: 'Not required field',
				checkbox: false,
			},
			validForm: false,
			rules: {
				required: value => !!value || 'Campo obrigatório',
			},
			styles,
		};
	},
	template: `
        <farm-form v-model="validForm" :style="[styles.vForm]" ref="form">
            <section>
				<div>
					<farm-label :required="true">Documento</farm-label>
					<farm-textfield v-model="form.document" :rules="[rules.required]" />
				</div>
			</section>
			<section>
				<div>
					<farm-label>not</farm-label>
					<farm-textfield v-model="form.not" />
				</div>
			</section>

			<farm-label>Not required</farm-label>
			<farm-checkbox v-model="form.checkbox" />

            <div class="footer" :style="[styles.footer]">
				<farm-btn color="secondary" outlined @click="$refs.form.reset()" class="mr-3">Reset</farm-btn>
				<farm-btn color="secondary" :disabled="!validForm">Salvar</farm-btn>
            </div>
        </farm-form>
    `,
});

export const InitInvalid = () => ({
	data() {
		return {
			form: {
				document: '',
				name: '',
				checkbox: false,
			},
			validForm: false,
			rules: {
				required: value => !!value || 'Campo obrigatório',
				checked: value => !!value || 'Deve estar marcado',
			},
			styles,
		};
	},
	template: `
        <farm-form v-model="validForm" :style="[styles.vForm]" ref="form">
            <section>
				<div>
					<farm-label :required="true">Documento</farm-label>
					<farm-textfield v-model="form.document" :rules="[rules.required]" />
				</div>
			</section>
			<section>
				<div>
					<farm-label :required="true">Nome</farm-label>
					<farm-textfield v-model="form.name" :rules="[rules.required]" />
				</div>
			</section>

			<farm-label :required="true">True/false</farm-label>
			<farm-checkbox v-model="form.checkbox" :rules="[rules.checked]" />

            <div class="footer" :style="[styles.footer]">
				<farm-btn color="secondary" outlined @click="$refs.form.reset()" class="mr-3">Reset</farm-btn>
				<farm-btn color="secondary" :disabled="!validForm">Salvar</farm-btn>
            </div>
        </farm-form>
    `,
});

export const RadioGroupReset = () => ({
	data() {
		return {
			checkedValue: 1,
			buttons: [
				{ label: 'Button 1', id: 1 },
				{ label: 'Button 2', id: 2 },
				{ label: 'Button 3', id: 3 },
			],
			validForm: false,
			styles,
		};
	},
	template: `
        <farm-form v-model="validForm" :style="[styles.vForm]" ref="form">
			<farm-radio-group v-model="checkedValue" column :buttons="buttons" />

            <div class="footer" :style="[styles.footer]">
				<farm-btn color="secondary" outlined @click="$refs.form.reset()" class="mr-3">Reset</farm-btn>
				<farm-btn color="secondary" :disabled="!validForm">Salvar</farm-btn>
            </div>
        </farm-form>
    `,
});

export const DatePickers = () => ({
	data() {
		return {
			birthDate: '',
			rangeDate: [],
			validForm: false,
			styles,
		};
	},
	template: `
        <farm-form v-model="validForm" :style="[styles.vForm]" ref="form">

			<farm-label :required="true">Birthdate: {{ birthDate }}</farm-label>
			<DatePicker
				ref="birthDate"
				inputId="form-pf-birthDate"
				class="mt-4"
				v-model="birthDate"
				:readonly="true"
				:required="true"
			/>
		
			<farm-label :required="true">Range: {{ rangeDate }}</farm-label>
			<RangeDatePicker
				ref="rangeDate"
				inputId="form-pf-rangeDate"
				class="mt-4"
				v-model="rangeDate"
				:readonly="true"
				:required="true"
			/>
			
            <div class="footer" :style="[styles.footer]">
				<farm-btn color="secondary" outlined @click="$refs.form.reset()" class="mr-3">Reset</farm-btn>
				<farm-btn color="secondary" :disabled="!validForm">Salvar</farm-btn>
            </div>
        </farm-form>
    `,
});
