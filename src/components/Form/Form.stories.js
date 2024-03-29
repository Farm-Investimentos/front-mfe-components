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
	dynamicField: {
		display: 'flex',
	},
	footer: {
		display: 'flex',
		justifyContent: 'end',
	},
	footerMargin: {
		marginTop: '16px',
	},
};

export const Primary = () => ({
	data() {
		return {
			form: {
				document: 'Document',
				name: '',
				checkbox: '2',
				birthDate: new Date('1980/09/20').toISOString(),
				selectId: 1,
				rangeDate: [],
				cityName: null,
			},
			validForm: false,
			rules: {
				required: value => !!value || 'Campo obrigatório',
				checked: value => !!value || 'Deve estar marcado',
			},
			items: [
				{ value: null, text: '' },
				{ value: 1, text: 'label 1' },
				{ value: 2, text: 'label 2' },
			],
			styles,
		};
	},
	template: `
        <farm-form v-model="validForm" :style="[styles.vForm]" ref="form" autocomplete="off">
			<div>
				<farm-label :required="true">Documento</farm-label>
				<farm-textfield-v2 v-model="form.document" :rules="[rules.required]" />
			</div>
			<farm-label :required="true">Nome</farm-label>
			<farm-textfield-v2 v-model="form.name" :rules="[rules.required]" hint="Seu nome igual ao do RG" />

			<farm-label :required="true">True/false</farm-label>
			<farm-checkbox v-model="form.checkbox" value="1" :rules="[rules.checked]" />
			
			<farm-label :required="true">Select</farm-label>
			<farm-select :rules="[rules.required]" :items="items" v-model="form.selectId"/>

			<farm-label :required="true">Birthdate:</farm-label>
			<farm-input-datepicker
				ref="birthDate"
				inputId="form-pf-birthDate"
				class="mt-4"
				v-model="form.birthDate"
				:readonly="true"
				:required="true"
			/>

			<farm-label :required="true">Range date:</farm-label>
			<farm-input-rangedatepicker
				ref="rangeDate"
				inputId="form-pf-rangeDate"
				class="mt-4"
				v-model="form.rangeDate"
				:required="true"
			/>
			
			
            <div class="footer" :style="[styles.footer]">
				<farm-btn outlined @click="$refs.form.reset()" class="mr-3">Reset</farm-btn>
				<farm-btn :disabled="!validForm">Salvar</farm-btn>
            </div>
			form: {{ form }}
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
			items: [
				{ value: null, text: '' },
				{ value: 1, text: 'label 1' },
				{ value: 2, text: 'label 2' },
			],
		};
	},
	template: `
        <farm-form v-model="validForm" :style="[styles.vForm]" ref="form">
            <section>
				<div>
					<farm-label :required="true">Documento</farm-label>
					<farm-textfield-v2 v-model="form.document" :rules="[rules.required]" />
				</div>
			</section>
			<section>
				<div>
					<farm-label>not</farm-label>
					<farm-textfield-v2 v-model="form.not" />
				</div>
			</section>

			<farm-label>Not required</farm-label>
			<farm-checkbox value="1" v-model="form.checkbox" />

            <div class="footer" :style="[styles.footer]">
				<farm-btn outlined @click="$refs.form.reset()" class="mr-3">Reset</farm-btn>
				<farm-btn :disabled="!validForm">Salvar</farm-btn>
            </div>
        </farm-form>
    `,
});

export const WithDynamicFields = () => ({
	data() {
		return {
			form: {
				document: null,
				name: null,
				checkbox: null,
				birthDate: '',
				selectId: null,
				rangeDate: [],
				dynamics: [],
			},
			validForm: true,
			rules: {
				required: value => !!value || 'Campo obrigatório',
				checked: value => !!value || 'Deve estar marcado',
			},
			items: [
				{ value: null, text: '' },
				{ value: 1, text: 'label 1' },
				{ value: 2, text: 'label 2' },
			],
			styles,
		};
	},
	methods: {
		addDynamic() {
			const dynamic = {
				name2: '',
				selectId2: null,
			};
			this.form.dynamics.push({ ...dynamic });
			this.$refs.form.restart();
		},
		removeDynamic(index) {
			this.form.dynamics.splice(index, 1);
			this.$refs.form.restart();
		},
	},
	template: `
	<div>
		<farm-btn @click="addDynamic">Add field</farm-btn>

		<farm-form v-model="validForm" :style="[styles.vForm]" ref="form">
			<farm-label :required="true">Nome</farm-label>
			<farm-textfield-v2 v-model="form.name" :rules="[rules.required]" />
			
			<farm-label :required="true">Select</farm-label>
			<farm-select :rules="[rules.required]" :items="items" v-model="form.selectId"/>

			<div :style="[styles.dynamicField]" v-for="(dynamic, index) in form.dynamics">
				<div>
					<farm-label :key="index + 'label'" :required="true">Dynamic</farm-label>
					<farm-textfield-v2 :key="index" v-model="dynamic.name2" :rules="[rules.required]" />
				</div>

				<farm-icon @click="removeDynamic(index)">delete</farm-icon>
			</div>

			Is valid form: {{ validForm }}

			<farm-line />
			
			<footer class="footer" :style="[styles.footer, styles.footerMargin]">
				<farm-btn outlined @click="$refs.form.restart()" class="mr-3">Restart</farm-btn>
				<farm-btn outlined @click="$refs.form.restartValidation()" class="mr-3">Restart Validation</farm-btn>
				<farm-btn outlined @click="$refs.form.reset()" class="mr-3">Reset</farm-btn>
				<farm-btn :disabled="!validForm">Salvar</farm-btn>
			</footer>
		</farm-form>
	</div>`,
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
					<farm-textfield-v2 v-model="form.document" :rules="[rules.required]" />
				</div>
			</section>
			<section>
				<div>
					<farm-label :required="true">Nome</farm-label>
					<farm-textfield-v2 v-model="form.name" :rules="[rules.required]" />
				</div>
			</section>

			<farm-label :required="true">True/false</farm-label>
			<farm-checkbox v-model="form.checkbox" value="1" :rules="[rules.checked]" />

            <div class="footer" :style="[styles.footer]">
				<farm-btn outlined @click="$refs.form.reset()" class="mr-3">Reset</farm-btn>
				<farm-btn :disabled="!validForm">Salvar</farm-btn>
            </div>
        </farm-form>
    `,
});

export const Grid = () => ({
	data() {
		return {};
	},
	template: `
	<farm-container>
        <farm-form ref="form">
			
			<farm-row>
				<farm-col cols="12" md="3">
					<farm-label>Label 1</farm-label>
					<farm-textfield-v2 />
				</farm-col>
				<farm-col cols="12" md="3">
					<farm-label>Label 2</farm-label>
					<farm-textfield-v2 />
				</farm-col>
				<farm-col cols="12" md="3">
					<farm-label>Label 3</farm-label>
					<farm-textfield-v2 hint="some hint text" :persistent-hint="true"  />
				</farm-col>
				<farm-col cols="12" md="3">
					<farm-label>Label 4</farm-label>
					<farm-textfield-v2 />
				</farm-col>
				<farm-col cols="12" md="6">
					<farm-label>Label 6</farm-label>
					<farm-textfield-v2 />
				</farm-col>
				<farm-col cols="12" md="2">
					<farm-label>Label 7</farm-label>
					<farm-textfield-v2 />
				</farm-col>
				<farm-col cols="12" md="4">
					<farm-label>Label 4</farm-label>
					<farm-textfield-v2 />
				</farm-col>
			</farm-row>
			
            <farm-row extra-decrease>
				<farm-container-footer>
					<farm-row>
						<farm-col align="right">
							<farm-btn color="secondary" outlined @click="$refs.form.reset()" class="mr-2">Reset</farm-btn>
							<farm-btn>Salvar</farm-btn>
						</farm-col>
					</farm-row>
				</farm-container-footer>
			</farm-row>
        </farm-form>
	</farm-container>
    `,
});

export const MigrateTextVieldV2 = () => ({
	data() {
		return {
			form: {
				document: 'Document',
				name: 'Name',
			},
			validForm: false,
			rules: {
				required: value => !!value || 'Campo obrigatório',
			},
			items: [
				{ value: null, text: '' },
				{ value: 1, text: 'label 1' },
				{ value: 2, text: 'label 2' },
			],
			styles,
		};
	},
	template: `
        <farm-form v-model="validForm" :style="[styles.vForm]" ref="form">
			<div>
				<farm-label :required="true">Documento</farm-label>
				<farm-textfield-v2 v-model="form.document" :rules="[rules.required]" />
			</div>
			<farm-label :required="true">Nome</farm-label>
			<farm-textfield-v2 v-model="form.name" :rules="[rules.required]" />
			
            <div class="footer" :style="[styles.footer]">
				<farm-btn outlined @click="$refs.form.reset()" class="mr-3">Reset</farm-btn>
				<farm-btn :disabled="!validForm">Salvar</farm-btn>
            </div>
			form: {{ form }}
        </farm-form>
    `,
});

export const MigrateSelectV2 = () => ({
	data() {
		return {
			form: {
				document: '',
			},
			validForm: false,
			rules: {
				required: value => !!value || 'Campo obrigatório',
			},
			items: [
				{ value: null, text: '' },
				{ value: 1, text: 'label 1' },
				{ value: 2, text: 'label 2' },
			],
			styles,
		};
	},
	template: `
        <farm-form v-model="validForm" :style="[styles.vForm]" ref="form">
			<div>
				<farm-label :required="true">Documento</farm-label>
				<farm-select v-model="form.document" :items="items" :rules="[rules.required]" />
			</div>
			
            <div class="footer" :style="[styles.footer]">
				<farm-btn outlined @click="$refs.form.reset()" class="mr-3">Reset</farm-btn>
				<farm-btn :disabled="!validForm">Salvar</farm-btn>
            </div>
			form: {{ form }}
        </farm-form>
    `,
});

export const ValidateRadioGroup = () => ({
	data() {
		return {
			checkedValue: null,
			validForm: false,
			styles,
			rules: {
				required: value => !!value || 'Campo obrigatório',
			},
		};
	},
	template: `
        <farm-form v-model="validForm" :style="[styles.vForm]" ref="form">
			<farm-radio-group v-model="checkedValue" :rules="[rules.required]">
				<farm-radio v-model="checkedValue" value="1" /><farm-label>value 1</farm-label>
				<farm-radio v-model="checkedValue" value="2" /><farm-label>value 2</farm-label>
				<farm-radio v-model="checkedValue" value="3" /><farm-label>value 3</farm-label>
			</farm-radio-group>

            <div class="footer" :style="[styles.footer]">
				<farm-btn color="secondary" outlined @click="$refs.form.reset()" class="mr-3">Reset</farm-btn>
				<farm-btn color="secondary" :disabled="!validForm">Salvar</farm-btn>
            </div>
        </farm-form>
    `,
});

export const RestartValidation = () => ({
	data() {
		return {
			form: {
				document: null,
				name: null,
				checkbox: null,
				birthDate: '',
				selectId: null,
				rangeDate: [],
			},
			validForm: true,
			rules: {
				required: value => !!value || 'Campo obrigatório',
				checked: value => !!value || 'Deve estar marcado',
			},
			items: [
				{ value: null, text: '' },
				{ value: 1, text: 'label 1' },
				{ value: 2, text: 'label 2' },
			],
			styles,
		};
	},
	template: `
        <farm-form v-model="validForm" :style="[styles.vForm]" ref="form">
			Is valid form: {{ validForm }}

			<farm-label :required="true">Nome</farm-label>
			<farm-textfield-v2 v-model="form.name" :rules="[rules.required]" />
			
			<div>
				<farm-label :required="true">Documento</farm-label>
				<farm-textfield-v2 v-model="form.document" :rules="[rules.required]" />
			</div>
		
			
			<farm-label :required="true">True/false</farm-label>
			<farm-checkbox v-model="form.checkbox" value="1" :rules="[rules.checked]" />
			
			<farm-label :required="true">Select</farm-label>
			<farm-select :rules="[rules.required]" :items="items" v-model="form.selectId"/>
			
            <div class="footer" :style="[styles.footer]">
			<farm-btn outlined @click="$refs.form.restartValidation()" class="mr-3">Restart Validation</farm-btn>
				<farm-btn outlined @click="$refs.form.reset()" class="mr-3">Reset</farm-btn>
				<farm-btn :disabled="!validForm">Salvar</farm-btn>
            </div>
        </farm-form>
    `,
});
