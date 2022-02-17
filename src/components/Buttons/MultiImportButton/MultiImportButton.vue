<template>
	<v-menu
		content-class="elevation-1"
		v-model="togglePopover"
		:offset-y="true"
		:rounded="'b t-0'"
	>
		<template v-slot:activator="{ on, attrs }">
			<v-btn
				v-bind="attrs"
				v-on="on"
				dense
				@onClick="togglePopover = true"
				class="v-btn--responsive v-btn--import"
				outlined
				title="Importar"
			>
				Importar
				<v-icon class="ml-2 mr-0">
					{{ togglePopover ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
				</v-icon>
			</v-btn>
		</template>

		<v-list dense class="pa-0">
			<v-list-item
				v-for="option in optionsList"
				:key="option.listenerKey"
				link
				:title="option.title"
				@click="$emit('onClick', option.listenerKey)"
			>
				<v-list-item-content>
					<v-list-item-title>{{ option.title }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-menu>
</template>
<script>
import Vue from 'vue';
import VBtn from 'vuetify/lib/components/VBtn';
import VIcon from 'vuetify/lib/components/VIcon';
import VList from 'vuetify/lib/components/VList/VList';
import VMenu from 'vuetify/lib/components/VMenu';
import VListItem from 'vuetify/lib/components/VList/VListItem';
import { VListItemContent, VListItemTitle } from 'vuetify/lib';

export default Vue.extend({
	name: 'farm-btn-multipleimport',
	components: {
		VBtn,
		VIcon,
		VList,
		VListItem,
		VMenu,
		VListItemContent,
		VListItemTitle,
	},
	props: {
		/**
		 * Lista de opções para o menu dropdown
		 */
		optionsList: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			togglePopover: false,
		};
	},
});
</script>
<style scoped lang="scss">
@import './MultiImportButton.scss';
</style>
