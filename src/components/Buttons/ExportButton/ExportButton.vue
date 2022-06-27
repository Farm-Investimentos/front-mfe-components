<template>
	<farm-btn
		v-if="optionsList.length == 0"
		@click="onClick"
		dense
		class="v-btn--responsive"
		outlined
		title="Exportar"
		:disabled="disabled"
	>
		<i :class="{ 'mr-2': true, 'mdi-file-export-outline': true, mdi: true }"></i>
		Exportar
	</farm-btn>
	<v-menu
		v-else
		content-class="elevation-1"
		v-model="togglePopover"
		:offset-y="true"
		:rounded="'b t-0'"
	>
		<template v-slot:activator="{ on, attrs }">
			<farm-btn
				v-bind="attrs"
				v-on="on"
				dense
				class="v-btn--responsive"
				outlined
				title="Exportar"
				@onClick="togglePopover = true"
				:disabled="disabled"
			>
				Exportar
				<i
					:class="{
						'ml-2': true,
						'mr-0': true,
						'mdi': true,
						'mdi-chevron-up': togglePopover,
						'mdi-chevron-down': !togglePopover,
					}"
				>
				</i>
			</farm-btn>
		</template>

		<v-list dense class="pa-0">
			<v-list-item
				v-for="item in optionsList"
				:key="item.key"
				link
				:title="item.label"
				@click="onClick(item.key)"
			>
				<v-list-item-content>
					<v-list-item-title v-text="item.label" />
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

/**
 * Botão de Exportação, com opção de gerar menu dropdown
 */
export default Vue.extend({
	name: 'farm-btn-export',
	props: {
		/**
		 * Lista de opções para o menu dropdown
		 * Se não informado, o botão emite evento no clique
		 */
		optionsList: {
			type: Array,
			default: () => [],
		},
		/**
		 * Desabilita o botão
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			togglePopover: false,
		};
	},
	components: {
		VList,
		VListItem,
		VMenu,
		VListItemContent,
		VListItemTitle,
		'farm-btn': DefaultButton,
	},
	methods: {
		onClick(key) {
			this.$emit('onClick', key);
		},
	},
});
</script>
<style scoped lang="scss">
.v-btn {
	color: var(--v-extra-lighten2);
	background: white;
}
.v-list-item {
	border-bottom: 1px solid var(--v-gray-lighten2);
	&:last-child {
		border-bottom: none;
	}
}
.v-list-item--link {
	font-size: 0.875rem;
}
</style>
