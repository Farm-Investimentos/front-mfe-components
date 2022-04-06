<template>
	<v-col cols="12" sm="12" :md="config.md ? config.md : 2" class="v-col-fieldset-default">
		<div class="v-text-field">
			<label :for="inputId">
				{{ label }}
				<span class="required" v-if="config.required">*</span>
			</label>
			<v-text-field
				append-icon="mdi-magnify "
				color="secondary"
				outlined
				v-on:keyup="clearTextField"
				dense
				readonly
				:id="inputId"
				:value="selectedValueText"
				@click="openModal"
			/>
		</div>
		<v-dialog content-class="modal-default modal-default-small" v-model="showModal">
			<DialogHeader class="dialog-header" :title="modalTitle" @onClose="closeModal" />

			<v-main class="mt-9">
				<Loader class="text-center mb-2" v-if="isLoading" />
				<fieldset class="fieldset-default mx-4 mb-3" v-if="!isLoading">
					<label for="searchInput"> {{ label }} </label>
					<v-text-field
						color="secondary"
						id="searchInput"
						outlined
						dense
						hide-details
						:placeholder="placeholder"
						v-model="searchValue"
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
						<DataTableEmptyWrapper />
					</template>
					<template slot="no-results">
						<DataTableEmptyWrapper />
					</template>
					<template v-slot:[`item.label`]="{ item }">
						<td :title="getItemLabel(item)" aria-role="button">
							{{ getItemLabel(item) }}
						</td>
					</template>

					<template v-slot:footer>
						<DataTablePaginator
							class="my-6"
							hidePerPageOptions
							:initialLimitPerPage="pagination.itemsPerPage"
							:page="pagination.page"
							:totalPages="pagination.pages"
							@onChangePage="onChangePage"
						/>
					</template>
				</v-data-table>
			</v-main>
			<DialogFooter :hasConfirm="false" @onClose="closeModal" />
		</v-dialog>
	</v-col>
</template>
<script>
import Vue from 'vue';
import VTextField from 'vuetify/lib/components/VTextField';
import { VCol } from 'vuetify/lib/components/VGrid';
import { VMain } from 'vuetify/lib/components/VMain';
import { VDataTable } from 'vuetify/lib/components/VDataTable/';
import { VDialog } from 'vuetify/lib/components/VDialog/';
import { DialogHeader, DialogFooter, DataTableEmptyWrapper, DataTablePaginator } from '../../main';

export default Vue.extend({
	name: 'farm-select-modal-options',
	components: {
		VTextField,
		VCol,
		VMain,
		VDataTable,
		VDialog,
		DialogHeader,
		DialogFooter,
		DataTableEmptyWrapper,
		DataTablePaginator,
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
			this.showModal = false;
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
		},
		customFilter(_, search, item) {
			const label = this.getItemLabel(item);
			return label.toLowerCase().includes(search.toLowerCase());
		},
		clearTextField(event)  {
			if (event.key === "Delete" || event.key === "Backspace") {
				this.selectedItem = null;
			}
		}
	},
});
</script>
<style lang="scss" scoped>
.v-text-field::v-deep input  {
	cursor: pointer;
}
</style>
