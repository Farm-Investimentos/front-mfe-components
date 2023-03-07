<template>
	<div class="tabs" :class="{ 'tabs--disabled': !allowUserChange }">
		<div
			v-for="(tab, index) in tabs"
			class="tabs__tab"
			:key="index"
			:class="{ hideCounter: !showCounter, 'tabs__tab--selected': isSelected(index) }"
			@click="changeTab(tab, index)"
		>
			<div
				v-if="showCounter"
				class="mr-2 rounded-circle d-inline-flex align-center justify-center white--text"
				:class="{ 'is-selected': isSelected(index) }"
			>
				<farm-subtitle
					color="white"
					tag="span"
					:type="2"
					:color-variation="isSelected(index) ? 'base' : 'darken'"
				>
					{{ index + 1 }}
				</farm-subtitle>
			</div>
			<farm-subtitle
				tag="span"
				:type="2"
				:color="isSelected(index) ? 'primary' : 'gray'"
				:color-variation="isSelected(index) ? 'base' : 'darken'"
			>
				{{ tab.name }}
			</farm-subtitle>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'farm-tabs',
	data: () => ({
		selected: 0,
	}),
	props: {
		tabs: {
			type: Array,
			default: () => [
				{
					name: 'Seleção',
					path: 'selection',
				},
				{
					name: 'Revisão',
					path: 'review',
				},
			],
		},
		showCounter: {
			type: Boolean,
			default: true,
		},
		initialSelect: {
			type: Number,
			default: 0,
		},
		allowUserChange: {
			type: Boolean,
			default: true,
		},
	},
	methods: {
		isSelected(index) {
			return index === this.selected;
		},
		changeTab(_, index) {
			if (!this.allowUserChange) return;
			this.selected = index;
			this.$emit('update', this.tabs[index]);
		},
		next() {
			if (this.tabs.length - 1 > this.selected + 1)
				return this.$emit('update', this.tabs[this.selected]);
			this.selected = this.selected + 1;
			this.$emit('update', this.tabs[this.selected]);
		},
		previous() {
			if (this.selected - 1 < 0) return this.$emit('update', this.tabs[this.selected]);
			this.selected = this.selected - 1;
			this.$emit('update', this.tabs[this.selected]);
		},
		toIndex(index) {
			this.selected = index;
			this.$emit('update', this.tabs[index]);
		},
		updateTabRouting: (component, item, nextRoutePrefix) => {
			component.currentTab = item.path;
			const nextRoute = `${nextRoutePrefix}/${item.path}`;
			const currentRoute = component.$router.history.current.path;
			if (nextRoute !== currentRoute) component.$router.push(nextRoute);
		},
	},
	created() {
		this.selected = this.initialSelect;
	},
});
</script>
<style scoped lang="scss">
@import './Tabs.scss';
</style>
