<template>
	<section
		class="v-data-table-custom-footer"
		:class="{ 'hidden-perpageoptions': hidePerPageOptions }"
	>
		<div v-if="!hidePerPageOptions">
			<v-select
				outlined
				v-model="selectedLimit"
				:disabled="!totalPages || totalPages < 1"
				:items="perPageBuiltItems"
				dense
			></v-select>
		</div>
		<v-pagination
			:disabled="disabled"
			v-model="currentPage"
			:length="totalPages"
			:total-visible="7"
			color="secondary"
		></v-pagination>
	</section>
</template>
<script>
import Vue from 'vue';
import { VSelect } from 'vuetify/lib/components/VSelect';
import { VPagination } from 'vuetify/lib/components/VPagination';

/**
 * Componente de paginação usado em tabelas e listas
 * com opção de itens por página
 */
export default Vue.extend({
	name: 'farm-datatable-paginator',
	props: {
		/**
		 * Lista de opções para o controle de registros por página
		 */
		perPageOptions: {
			type: Array,
			default: () => [5, 10, 20, 50, 100],
		},
		/**
		 * Páginas atual
		 */
		page: null,
		/**
		 * Total de páginas
		 */
		totalPages: null,
		/**
		 * Desabilita controles
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
		/**
		 * Esconde controle de registros por página
		 */
		hidePerPageOptions: {
			type: Boolean,
			default: false,
		},
		/**
		 * Valor inicial de limite por página
		 */
		initialLimitPerPage: {
			type: Number,
			default: 10,
		},
	},
	data() {
		return {
			selectedLimit: this.initialLimitPerPage,
			currentPage: this.page,
		};
	},
	computed: {
		perPageBuiltItems: function() {
			return this.perPageOptions.map(value => ({
				text: value + ' registros por página',
				value,
			}));
		},
	},
	watch: {
		selectedLimit(newValue) {
			this.$emit('onChangeLimitPerPage', newValue);
		},
		currentPage(newValue) {
			this.$emit('onChangePage', newValue);
		},
		page(newValue) {
			this.currentPage = newValue;
		},
		initialLimitPerPage(newValue) {
			this.selectedLimit = newValue;
		},
	},
	components: {
		VSelect,
		VPagination,
	},
});
</script>

<style lang="scss">
.v-data-table-custom-footer {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 1rem 1.5rem 0;
	.v-pagination.theme--light {
		.v-pagination__item--active,
		.v-pagination__navigation,
		.v-pagination__item,
		.v-pagination__more {
			box-shadow: none;
			border: 1px solid var(--v-gray-lighten2);
			border-right: 0;
			border-radius: 0;
			height: 2rem;
			margin: 0;
		}
		li:first-child .v-pagination__navigation {
			border-radius: 0.25rem 0 0 0.25rem;
		}
		li:last-child .v-pagination__navigation {
			border-right: 1px solid var(--v-gray-lighten2);
			border-radius: 0 0.25rem 0.25rem 0;
		}
		.v-pagination__item {
			font-size: 0.75rem;
		}
	}
	&.hidden-perpageoptions {
		justify-content: flex-end;
	}
}
@media screen and (max-width: 600px) {
	.v-data-table-custom-footer {
		flex-direction: column;
		&.hidden-perpageoptions {
			justify-content: space-between;
		}
	}
}
</style>
