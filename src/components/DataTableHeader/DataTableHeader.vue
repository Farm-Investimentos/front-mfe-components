<template>
	<thead>
		<tr>
			<th
				v-for="(item, $index) in headers"
				:key="item.value"
				v-bind:class="[
					item.sortable ? 'sortable' : '',
					sortClick[$index].clicked ? 'active' : '',
					item.sortable ? (sortClick[$index].descending === 'DESC' ? 'DESC' : 'ASC') : '',
				]"
				v-bind:style="{
					textAlign: item.align ? item.align : '',
					width: thWidth(item),
					minWidth: thWidth(item),
				}"
				@click="item.sortable ? clickSort(item.value, $index) : ''"
				@mouseover="changeShow($index)"
				@mouseout="changeHidden($index)"
			>
				<span class="header-text" v-if="!isTHDataTableSelect(item)">
					{{ item.text }}

					<v-icon
						v-if="item.sortable && sortClick[$index].show"
						v-bind:class="[
							sortClick[$index][item.value] ? 'v-icon--desc' : 'v-icon--asc',
						]"
						small
					>
						mdi-sort-descending
					</v-icon>
				</span>

				<span v-if="isTHDataTableSelect(item) && showCheckbox">
					<v-simple-checkbox
						:indeterminate="headerProps.someItems && !headerProps.everyItem"
						v-model="inputVal"
						@input="selectAll"
					></v-simple-checkbox>
				</span>
			</th>
		</tr>
	</thead>
</template>

<script>
/* eslint-disable */
import Vue from 'vue';
import VIcon from 'vuetify/lib/components/VIcon';
import VSimpleCheckbox from 'vuetify/lib/components/VCheckbox/VSimpleCheckbox';

export default Vue.extend({
	name: 'farm-datatable-header',
	components: {
		VIcon,
		VSimpleCheckbox,
	},
	props: {
		/**
		 * Cabeçalho
		 */
		headers: {
			type: Array,
			require: true,
		},
		/**
		 * Array para controle da exibição da ordenação
		 */
		sortClick: {
			type: Array,
			require: true,
		},
		/**
		 * Começar selecionado
		 */
		firstSelected: {
			type: Boolean,
			default: false,
		},
		/**
		 * Index do item do cabeçalho que deve começar selecionado
		 */
		selectedIndex: {
			type: Number,
			default: 0,
		},
		/**
		 * v-model for data-table-select
		 */
		value: {
			default: false,
		},
		/**
		 * Original header props
		 */
		headerProps: {
			type: Object,
		},
		/**
		 * Hide/show checkbox
		 */
		showCheckbox: {
			default: true,
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
	},
	methods: {
		getTypeSort(value) {
			return value ? 'DESC' : 'ASC';
		},
		clickSort(value, index) {
			this.removeClicked();
			this.sortClick[index].clicked = true;
			this.sortClick[index].show = true;
			this.sortClick[index][value] = !this.sortClick[index][value];
			this.sortClick[index].descending = this.getTypeSort(this.sortClick[index][value]);
			this.$emit('onClickSort', this.sortClick[index]);
		},
		changeShow(index) {
			setTimeout(() => {
				this.sortClick[index].show = true;
			}, 10);
		},
		changeHidden(index) {
			setTimeout(() => {
				if (this.sortClick[index].clicked) {
					return;
				}
				this.sortClick[index].show = false;
			}, 10);
		},
		removeClicked() {
			for (let i = 0; i < this.sortClick.length; i += 1) {
				this.sortClick[i].clicked = false;
				this.sortClick[i].show = false;
			}
		},
		checkFirstSelected(index) {
			if (index === this.selectedIndex) {
				return this.firstSelected;
			}
			return false;
		},
		thWidth(item) {
			if (this.isTHDataTableSelect(item)) {
				return '64px';
			}
			return item.width ? item.width + 'px' : 'auto';
		},
		isTHDataTableSelect(item) {
			return item.value === 'data-table-select';
		},
		selectAll(value) {
			this.$emit('toggleSelectAll', value);
			this.inputVal = value;
		},
	},
	created() {
		for (let i = 0; i < this.headers.length; i += 1) {
			this.sortClick.push({
				[this.headers[i].value]: false,
				descending: 'ASC',
				field: this.headers[i].value,
				clicked: this.checkFirstSelected(i),
				show: this.checkFirstSelected(i),
			});
		}
	},
});
</script>

<style lang="scss" scoped>
@import './DataTableHeader.scss';
</style>
