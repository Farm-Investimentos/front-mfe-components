<template>
	<v-alert dense outlined type="error" class="farm-alert-reload">
		<v-row align="center">
			<v-col class="grow">
				{{ label }}
			</v-col>
			<v-col class="shrink">
				<farm-btn color="secondary" class="ml-3" alt="Recarregar" @click="$emit('onClick')">
					<i class="mdi mdi-refresh farm-icon"></i>
					Recarregar
				</farm-btn>
			</v-col>
		</v-row>
	</v-alert>
</template>
<script>
import VIcon from 'vuetify/lib/components/VIcon';
import VAlert from 'vuetify/lib/components/VAlert';
import { VRow, VCol } from 'vuetify/lib/components/VGrid';
import DefaultButton from '../Buttons/DefaultButton';

export default {
	name: 'farm-alert-reload',
	components: {
		VIcon,
		VAlert,
		VRow,
		VCol,
		'farm-btn': DefaultButton,
	},
	props: {
		/**
		 * Label
		 */
		label: {
			type: String,
			default: '',
		},
	},
};
</script>

<style lang="scss" scoped>
.farm-btn {
	.farm-icon {
		margin-right: 1rem;
	}
}
</style>
