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
					showCheckbox && $index == 0 ? 'checkbox-container' : '',
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
				<span
					class="header-text"
					v-if="!isTHDataTableSelect(item)"
					:title="
						item.sortable && sortClick[$index].show ? `Ordernar por ${item.text}` : null
					"
				>
					{{ item.text }}

					<farm-icon
						v-if="item.sortable && sortClick[$index].show"
						v-bind:class="[
							sortClick[$index][item.value] ? 'farm-icon--desc' : 'farm-icon--asc',
						]"
						class="ml-2"
						size="16px"
						color="black"
						variation="30"
					>
						sort-reverse-variant
					</farm-icon>
				</span>

				<span v-if="isTHDataTableSelect(item) && showCheckbox" class="span-checkbox">
					<farm-checkbox
						size="sm"
						v-model="inputVal"
						:value="true"
						:indeterminate="headerProps.someItems && !headerProps.everyItem"
						@input="selectAll"
					/>
				</span>
			</th>
		</tr>
	</thead>
</template>

<script lang="ts">
/* eslint-disable */


export default {
	name: 'farm-datatable-header',
	props: {
		/**
		 * Headers
		 */
		headers: {
			type: Array,
			required: true,
		},
		/**
		 * Array para controle da exibição da ordenação
		 */
		sortClick: {
			type: Array,
			required: true,
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
			type: Boolean,
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
			const isClicked = this.sortClick[index].clicked;
			this.removeClicked();
			this.sortClick[index].clicked = true;
			this.sortClick[index].show = true;
			if (isClicked) {
				this.sortClick[index][value] = !this.sortClick[index][value];
			}
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
				return '72px';
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
				[this.headers[i].value]:
					this.firstSelected &&
					i === this.selectedIndex &&
					this.headers[i].order === 'DESC',
				descending: this.headers[i].order || 'ASC',
				field: this.headers[i].value,
				clicked: this.checkFirstSelected(i),
				show: this.checkFirstSelected(i),
			});
		}
	},
};
</script>

<style lang="scss" scoped>
@import './DataTableHeader.scss';
</style>
