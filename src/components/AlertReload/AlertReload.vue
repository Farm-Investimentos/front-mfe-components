<template>
	<v-alert dense outlined type="error" class="farm-alert-reload">
		<v-row align="center">
			<v-col class="grow">
				{{ label }}
			</v-col>
			<v-col class="shrink">
				<v-btn color="secondary" class="ml-3" alt="Recarregar" @click="$emit('onClick')">
					<v-icon class="v-icon__refresh">mdi-refresh</v-icon>
					Recarregar</v-btn
				>
			</v-col>
		</v-row>
	</v-alert>
</template>
<script>
import VBtn from 'vuetify/lib/components/VBtn';
import VIcon from 'vuetify/lib/components/VIcon';
import VAlert from 'vuetify/lib/components/VAlert';
import { VRow, VCol } from 'vuetify/lib/components/VGrid';

export default {
	name: 'farm-alert-reload',
	components: {
		VBtn,
		VIcon,
		VAlert,
		VRow,
		VCol,
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
.v-btn {
	.v-icon.v-icon__refresh {
		margin-right: 1rem;
	}
}
</style>
