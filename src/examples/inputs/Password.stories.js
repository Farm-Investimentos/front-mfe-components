export default {
	title: 'Examples/Inputs/Password',
	component: Password,
	parameters: {
		docs: {
			description: {
				component: `How to toggle password visivility.<br />
- Password visibility: hidden -> eye on icon (the click/tap will show the password)
- Password visibility: show -> eye off icon (the click/tap will hide the password)`,
			},
		},
	},
};

export const Password = () => ({
	data() {
		return {
			password: '',
			showHidden: false,
		};
	},
	template: `
        <v-col cols="12" sm="12" md="4" class="v-col-fieldset-default pl-0">
        <label>
			Toggle visibility from password field
		</label>
        <v-text-field
            color="secondary"
            dense
            outlined
            v-model="password"
            :append-icon="showHidden ? 'mdi-eye-off' : 'mdi-eye'"
            :type="showHidden ? 'text' : 'password'"
            @click:append="showHidden = !showHidden"
        />
        </v-col>
    `,
});

// Modal.storyName = 'Básico';
Password.story = {
	name: 'Básico',
};
