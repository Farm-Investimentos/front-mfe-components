<template>
	<v-menu content-class="elevation-1" v-model="togglePopover" :offset-y="true" :rounded="'b t-0'">
		<template v-slot:activator="{ on, attrs }">
			<farm-btn
				v-bind="attrs"
				v-on="on"
				dense
				class="farm-btn--responsive farm-btn--import"
				outlined
				title="Importar"
				@onClick="togglePopover = true"
			>
				Importar
				<i
					:class="{
						'ml-2': true,
						'mr-0': true,
						mdi: true,
						'mdi-chevron-up': togglePopover,
						'mdi-chevron-down': !togglePopover,
					}"
				>
				</i>
			</farm-btn>
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
import VList from 'vuetify/lib/components/VList/VList';
import VMenu from 'vuetify/lib/components/VMenu';
import VListItem from 'vuetify/lib/components/VList/VListItem';
import { VListItemContent, VListItemTitle } from 'vuetify/lib';
import DefaultButton from '../DefaultButton';

export default Vue.extend({
	name: 'farm-btn-multipleimport',
	components: {
		VList,
		VListItem,
		VMenu,
		VListItemContent,
		VListItemTitle,
		'farm-btn': DefaultButton,
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
