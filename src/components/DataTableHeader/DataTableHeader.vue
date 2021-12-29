<template>
	<thead>
		<tr>
			<th
				v-for="(item, $index) in headers"
				:key="item.value"
				v-bind:class="[
					item.sortable ? 'sortable' : '',
					sortClick[$index].clicked ? 'active' : '',
					item.sortable && sortClick[$index].descending === 'DESC' ? 'DESC' : 'ASC',
				]"
				v-bind:style="{
					textAlign: item.align,
					width: thWidth(item),
				}"
				@click="item.sortable ? clickSort(item.value, $index) : ''"
				@mouseover="changeShow($index)"
				@mouseout="changeHidden($index)"
			>
				<span class="header-text">
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
			</th>
		</tr>
	</thead>
</template>

<script>
import Vue from 'vue';
import VIcon from 'vuetify/lib/components/VIcon';
export default Vue.extend({
	name: 'farm-datatable-header',
	components: {
		VIcon,
	},
	props: {
		headers: {
			type: Array,
			require: true,
		},
		sortClick: {
			type: Array,
			require: true,
		},
		firstSelected: {
			type: Boolean,
			default: () => false,
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
		checkFistSelected(index) {
			if (index === 0) {
				return this.fistSelected;
			}
			return false;
		},
		thWidth(item) {
			return item.width ? item.width + 'px' : 'auto';
		},
	},
	created() {
		for (let i = 0; i < this.headers.length; i += 1) {
			this.sortClick.push({
				[this.headers[i].value]: false,
				descending: 'ASC',
				field: this.headers[i].value,
				clicked: this.checkFistSelected(i),
				show: this.checkFistSelected(i),
			});
		}
	},
});
</script>

<style lang="scss" scoped>
@import './DataTableHeader.scss';
</style>
