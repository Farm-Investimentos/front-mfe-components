<template>
	<div class="farm-tabs-wrapper">
		<button
			class="farm-tabs-nav farm-tabs-nav--left"
			@click="scrollLeft"
			@mouseenter="hoverLeft = true"
			@mouseleave="hoverLeft = false"
			v-show="canScrollLeft || hoverLeft"
		>
			<farm-icon color="primary" size="24px">chevron-left</farm-icon>
		</button>

		<div class="farm-tabs" ref="tabsContainer">
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
						class="
							mr-2
							rounded-circle
							d-inline-flex
							align-center
							justify-center
							white--text
						"
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
						{{ forceUppercase ? tab.name.toUpperCase() : tab.name }}
					</farm-subtitle>
				</div>
			</div>
		</div>

		<button
			class="farm-tabs-nav farm-tabs-nav--right"
			@click="scrollRight"
			@mouseenter="hoverRight = true"
			@mouseleave="hoverRight = false"
			v-show="canScrollRight || hoverRight"
		>
			<farm-icon color="primary" size="24px">chevron-right</farm-icon>
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'farm-tabs',
	data() {
		return {
			selected: 0,
			canScrollLeft: false,
			canScrollRight: false,
			hoverLeft: false,
			hoverRight: false,
		};
	},
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
		/**
		 * Initial tab selected
		 */
		initialSelect: {
			type: Number,
			default: 0,
		},
		allowUserChange: {
			type: Boolean,
			default: true,
		},
		/**
		 * Force uppercase in tab
		 */
		forceUppercase: {
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
		scrollLeft() {
			const container = this.$refs.tabsContainer as HTMLElement;
			if (container) {
				container.scrollBy({ left: -200, behavior: 'smooth' });
				setTimeout(() => this.updateScrollButtons(), 100);
			}
		},
		scrollRight() {
			const container = this.$refs.tabsContainer as HTMLElement;
			if (container) {
				container.scrollBy({ left: 200, behavior: 'smooth' });
				setTimeout(() => this.updateScrollButtons(), 100);
			}
		},
		updateScrollButtons() {
			const container = this.$refs.tabsContainer as HTMLElement;
			if (container) {
				const { scrollLeft, scrollWidth, clientWidth } = container;

				this.canScrollLeft = scrollLeft > 0;
				this.canScrollRight = scrollLeft < scrollWidth - clientWidth - 1;
			}
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
	mounted() {
		this.$nextTick(() => {
			this.updateScrollButtons();
		});
		window.addEventListener('resize', this.updateScrollButtons);

		const container = this.$refs.tabsContainer as HTMLElement;
		if (container) {
			container.addEventListener('scroll', this.updateScrollButtons);
		}
	},
	beforeUnmount() {
		window.removeEventListener('resize', this.updateScrollButtons);

		const container = this.$refs.tabsContainer as HTMLElement;
		if (container) {
			container.removeEventListener('scroll', this.updateScrollButtons);
		}
	},
});
</script>
<style scoped lang="scss">
@import './Tabs.scss';
</style>
