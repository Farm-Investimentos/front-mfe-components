<template>
	<farm-contextmenu v-model="value">
		<template v-slot:activator="{}">
			<farm-btn icon @click="toggleValue" title="Abrir opções" color="secondary">
				<farm-icon size="md">dots-horizontal</farm-icon>
			</farm-btn>
		</template>
		<farm-list>
			<farm-listitem
				v-for="item in items"
				clickable
				hoverColorVariation="lighten"
				:key="'tablecontextmenu_item_' + item.label"
				:hoverColor="item.icon.color || 'primary'"
				@click="onClick(item.handler)"
			>
				<farm-icon v-if="item.icon" size="sm" :color="item.icon.color || 'primary'">
					{{ item.icon.type }}
				</farm-icon>
				<farm-caption bold tag="span">{{ item.label }}</farm-caption>
			</farm-listitem>
		</farm-list>
	</farm-contextmenu>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';

export interface IContextMenuOption {
	label: string;
	handler: string;
	icon: IContextMenuOptionIcon;
}

export interface IContextMenuOptionIcon {
	color?: string;
	type: string;
}

export default Vue.extend({
	name: 'farm-context-menu',
	components: {},
	props: {
		items: {
			type: Array as PropType<Array<IContextMenuOption>>,
			required: true,
		},
	},
	data() {
		return {
			value: false,
		};
	},
	methods: {
		onClick(handler) {
			if (handler !== undefined) {
				this.$emit(handler);
				// handler();
			}
		},
		toggleValue() {
			this.value = !this.value;
		},
	},
});
</script>
<style lang="scss" scoped>
@import 'TableContextMenu';
</style>
