<template>
	<v-tabs color="secondary" v-model="selected">
		<v-tab
			v-for="(tab, index) in tabs"
			:key="index"
			:class="{ hideCounter: !showCounter }"
			@change="changeTab(tab, index)"
			:disabled="!allowUserChange"
		>
			<div
				v-if="showCounter"
				:class="{ 'is-selected': isSelected(index) }"
				class="pl-3 pr-3 pt-2 pb-2 mr-2 rounded-circle d-inline-block white--text"
			>
				<span>{{ index + 1 }}</span>
			</div>
			<span class="black--text text-capitalize">{{ tab.name }}</span>
		</v-tab>
	</v-tabs>
</template>

<script lang="ts">
import Vue from 'vue';
import { VTabs, VTab } from 'vuetify/lib/components/VTabs';
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
			this.$emit('update', this.tabs[index]);
		},
		next() {
			this.selected = this.selected + 1;
			this.$emit('update', this.tabs[this.selected]);
		},
		previous() {
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
	components: {
		VTabs,
		VTab,
	},
});
</script>
<style scoped lang="scss">
div.rounded-circle {
	background-color: var(--v-gray-lighten3);
	&.is-selected {
		background-color: var(--v-secondary-base);
	}
}
.v-tab--active.v-tab--disabled {
	opacity: 1;
}
</style>
