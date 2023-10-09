<template>
	<farm-col cols="12" :md="config.md ? config.md : 2">
		<farm-label :for="inputId" :required="config.required">
			{{ label }}
		</farm-label>
		<farm-textfield-v2
			ref="searchTextField"
			icon="magnify"
			readonly
			:id="inputId"
			:value="selectedValueText"
			@click="openModal"
			@keyup="clearTextField"
		/>

		<farm-modal v-model="showModal" size="sm" :offsetTop="48" :offsetBottom="68">
			<template v-slot:header>
				<farm-dialog-header :title="modalTitle" @onClose="closeModal" />
			</template>
			<template v-slot:content>
				<div class="mx-n4">
					<farm-box class="mt-3">
						<farm-loader class="text-center mb-2" v-if="isLoading" />
						<fieldset class="fieldset-default mx-4 mb-3" v-if="!isLoading">
							<farm-label for="searchInput"> {{ label }} </farm-label>
							<farm-textfield-v2
								id="searchInput"
								v-model="searchValue"
								:placeholder="placeholder"
							/>
						</fieldset>

						<v-data-table
							v-if="!isLoading"
							id="inputModalOptionsTable"
							class="v-data-table__clickable v-data-table__select-modal"
							hide-default-footer
							hide-default-header
							:items="items"
							:headers="headers"
							:options.sync="pagination"
							:search="searchValue"
							:custom-filter="customFilter"
							@click:row="handleClick"
							@pagination="handlePagination"
						>
							<template slot="no-data">
								<farm-emptywrapper />
							</template>
							<template slot="no-results">
								<farm-emptywrapper />
							</template>
							<template v-slot:[`item.label`]="{ item }">
								<td :title="getItemLabel(item)" aria-role="button">
									{{ getItemLabel(item) }}
								</td>
							</template>

							<template v-slot:footer>
								<farm-datatable-paginator
									class="my-6"
									hidePerPageOptions
									:initialLimitPerPage="pagination.itemsPerPage"
									:page="pagination.page"
									:totalPages="pagination.pages"
									@onChangePage="onChangePage"
								/>
							</template>
						</v-data-table>
					</farm-box>
				</div>
			</template>

			<template v-slot:footer>
				<farm-dialog-footer :hasConfirm="false" @onClose="closeModal" />
			</template>
		</farm-modal>
	</farm-col>
</template>
<script lang="ts">

// import { VDataTable } from 'vuetify/labs/VDataTable';

export default {
	name: 'farm-select-modal-options',
	components: {
		// 'v-data-table': VDataTable,
	},
	props: {
		/**
		 * Input Label
		 */
		label: {
			type: String,
			required: true,
		},
		/**
		 * Input ID
		 */
		inputId: {
			type: String,
			required: true,
		},
		/**
		 * Key used to get value from selected item
		 */
		selectIdentifier: {
			type: String,
			default: 'id',
		},
		/**
		 * Format label from each item
		 * If value is a function, it is evaluted (use it to build complex strings)
		 * Otherwise, will get item value from the key with the prop value
		 */
		itemLabelFormatter: {
			default: 'name',
		},
		/**
		 * Items to be shown in the table
		 */
		items: {
			type: Array,
			default: () => [],
		},
		/**
		 * Function that will be called when user focus/click the input
		 */
		loadFn: {
			type: Function,
			default: () => {},
		},
		/**
		 * Request Status from the loader function
		 */
		loadingRequestStatus: {
			default: 'IDLE',
		},
		/**
		 * Title from the modal
		 */
		modalTitle: {
			type: String,
			default: 'Selecione um item',
		},
		/**
		 * General configuration
		 */
		config: {
			default: () => ({ md: 2, required: false }),
		},
		/**
		 * Placeholder from the search input
		 */
		placeholder: {
			type: String,
			default: 'Pesquise',
		},
		/**
		 * v-model
		 */
		value: {
			required: true,
		},
	},
	computed: {
		inputVal: {
			get() {
				return this.value;
			},
			set(val) {
				this.$emit('input', val);
			},
		},
		isLoading() {
			return this.loadingRequestStatus === 'START';
		},
		selectedValueText: {
			get() {
				return this.selectedItem ? this.getItemLabel(this.selectedItem) : '';
			},
		},
		totalPages() {
			if (this.items !== undefined) {
				return Math.ceil(this.items.length / 10);
			}
			return 0;
		},
	},
	data() {
		return {
			selectedValue: {},
			showModal: false,
			selectedItem: null,
			searchValue: '',
			headers: [
				{
					text: 'Label',
					sortable: false,
					value: 'label',
					align: 'left',
				},
			],
			pagination: {
				page: 1,
				itemsPerPage: 10,
				pages: 0,
			},
		};
	},
	watch: {
		value(newValue) {
			if (!newValue || newValue === undefined) {
				this.selectedItem = null;
			}
		},
		items(newValue) {
			this.pagination.pages = Math.ceil(newValue.length / 10);
		},
	},
	mounted() {
		this.selectedItem = { [this.itemLabelFormatter]: this.value };
	},
	methods: {
		handlePagination(tablePagination) {
			if (
				tablePagination.page === 1 &&
				tablePagination.itemsLength !== this.pagination.pages
			) {
				this.pagination.pages = Math.ceil(tablePagination.itemsLength / 10);
			}
		},
		openModal() {
			this.loadFn();
			this.showModal = true;
		},
		closeModal() {
			this.focusOnInput();
			this.showModal = false;
		},
		focusOnInput() {
			this.$refs.searchTextField.$el.firstChild.firstElementChild.focus();
		},
		onChangePage(newPage) {
			this.pagination.page = newPage;
		},
		getItemLabel(item) {
			if (typeof this.itemLabelFormatter === 'function') {
				return this.itemLabelFormatter(item);
			}
			return item[this.itemLabelFormatter];
		},
		handleClick(item) {
			this.inputVal = item[this.selectIdentifier];
			this.showModal = false;
			this.selectedItem = item;
			this.focusOnInput();
		},
		customFilter(_, search, item) {
			const label = this.getItemLabel(item);
			return label.toLowerCase().includes(search.toLowerCase());
		},
		clearTextField(event) {
			if (event.key === 'Delete' || event.key === 'Backspace') {
				this.selectedItem = null;
			}
		},
	},
};
</script>
<style lang="scss" scoped>
@import 'SelectModalOptions.scss';
</style>
