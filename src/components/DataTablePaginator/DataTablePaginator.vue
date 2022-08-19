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

		<ul :class="{ 'farm-paginator': true, 'farm-paginator--disabled': disabled }">
			<li>
				<button :disabled="currentPage === 1 || disabled" @click="previousPage">
					<farm-icon color="gray" size="sm">chevron-left</farm-icon>
				</button>
			</li>

			<li
				v-for="(item, index) in itemsInPagination"
				:key="'button_' + index"
				:class="{ 'farm-paginator__item--selected': item === currentPage && !disabled }"
			>
				<button
					:disabled="currentPage === item || item === '...' || disabled"
					@click="currentPage = item"
				>
					{{ item }}
				</button>
			</li>

			<li>
				<button :disabled="currentPage === totalPages || disabled">
					<farm-icon color="gray" size="sm">chevron-right</farm-icon>
				</button>
			</li>
		</ul>
	</section>
</template>
<script lang="ts">
import Vue from 'vue';
import { VSelect } from 'vuetify/lib/components/VSelect';
import Icon from '../Icon';

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
	methods: {
		range(from: number, to: number) {
			const range = [];

			from = from > 0 ? from : 1;

			for (let i = from; i <= to; i++) {
				range.push(i);
			}

			return range;
		},
		previousPage() {
			this.currentPage--;
		},
		nextPage() {
			this.currentPage++;
		},
	},
	data() {
		return {
			selectedLimit: this.initialLimitPerPage,
			currentPage: this.page,
		};
	},
	computed: {
		perPageBuiltItems: function () {
			return this.perPageOptions.map(value => ({
				text: value + ' registros por página',
				value,
			}));
		},
		itemsInPagination: function () {
			const maxLength = 7;
			if (this.totalPages <= maxLength) {
				return this.range(1, maxLength);
			}

			const even = maxLength % 2 === 0 ? 1 : 0;
			const left = Math.floor(maxLength / 2);
			const right = this.totalPages - left + 1 + even;

			if (this.currentPage > left && this.currentPage < right) {
				const firstItem = 1;
				const lastItem = this.totalPages;
				const start = this.currentPage - left + 2;
				const end = this.currentPage + left - 2 - even;
				const secondItem = start - 1 === firstItem + 1 ? 2 : '...';
				const beforeLastItem = end + 1 === lastItem - 1 ? end + 1 : '...';

				return [1, secondItem, ...this.range(start, end), beforeLastItem, this.totalPages];
			} else if (this.currentPage === left) {
				const end = this.currentPage + left - 1 - even;
				return [...this.range(1, end), '...', this.totalPages];
			} else if (this.currentPage === right) {
				const start = this.currentPage - left + 1;
				return [1, '...', ...this.range(start, this.totalPages)];
			} else {
				return [...this.range(1, left), '...', ...this.range(right, this.totalPages)];
			}
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
		'farm-icon': Icon,
	},
});
</script>

<style lang="scss" scoped>
@import './DataTablePaginator';
</style>
