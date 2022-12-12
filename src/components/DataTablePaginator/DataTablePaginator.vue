<template>
	<section
		:class="{
			'farm-paginator-footer': true,
			'hidden-perpageoptions': hidePerPageOptions,
			'farm-paginator--gutter': hasGutter,
		}"
	>
		<div v-if="!hidePerPageOptions">
			<farm-select
				v-model="selectedLimit"
				:disabled="disabled || !totalPages || totalPages < 1"
				:items="perPageBuiltItems"
			/>
		</div>

		<ul
			:class="{
				'farm-paginator': true,
				'farm-paginator--disabled': disabled || totalPages == null,
			}"
		>
			<li>
				<button :disabled="canGoBack" @click="firstPage">
					<farm-icon size="sm">chevron-double-left</farm-icon>
				</button>
			</li>
			<li>
				<button :disabled="canGoBack" @click="previousPage">
					<farm-icon size="sm">chevron-left</farm-icon>
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
					<farm-bodytext :type="2" variation="regular">{{ item }}</farm-bodytext>
				</button>
			</li>

			<li>
				<button :disabled="canGoForward" @click="nextPage">
					<farm-icon size="sm">chevron-right</farm-icon>
				</button>
			</li>
			<li>
				<button :disabled="canGoForward" @click="lastPage">
					<farm-icon size="sm">chevron-double-right</farm-icon>
				</button>
			</li>
		</ul>
	</section>
</template>
<script lang="ts">
import Vue from 'vue';

/**
 * Componente de paginação usado em tabelas e listas
 * com opção de itens por página
 */
export default Vue.extend({
	name: 'farm-datatable-paginator',
	props: {
		/**
		 * Ietms per page list
		 */
		perPageOptions: {
			type: Array,
			default: () => [5, 10, 20, 50, 100],
		},
		/**
		 * Current page
		 */
		page: null,
		/**
		 * Total pages
		 */
		totalPages: {
			type: Number,
			default: null,
		},
		/**
		 * DDisable controls
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
		/**
		 * Hide items per page select 
		 */
		hidePerPageOptions: {
			type: Boolean,
			default: false,
		},
		/**
		 * Items per page initial value
		 */
		initialLimitPerPage: {
			type: Number,
			default: 10,
		},
		/**
		 * Toggle gutters
		*/
		hasGutter: {
			type: Boolean,
			default: true,
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
		firstPage() {
			this.currentPage = 1;
		},
		lastPage() {
			this.currentPage = this.totalPages;
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
				return this.range(1, this.totalPages);
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
		canGoBack: function () {
			const goBack = this.currentPage === 1 || this.disabled || this.totalPages == null;

			return goBack;
		},
		canGoForward: function () {
			const goNext =
				this.currentPage === this.totalPages ||
				this.disabled ||
				this.totalPages == null ||
				this.totalPages === 0;

			return goNext;
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
});
</script>

<style lang="scss" scoped>
@import './DataTablePaginator';
</style>
