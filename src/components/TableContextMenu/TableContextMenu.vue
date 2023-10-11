<template>
	<farm-contextmenu
		:class="{ 'farm-context-menu': true, 'farm-context-menu--disabled': disabled }"
		v-model="value"
	>
		<template v-slot:activator>
			<farm-btn
				icon
				title="Ver opções"
				color="secondary-green"
				:disabled="disabled"
				@click="toggleValue"
			>
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
				<farm-icon v-if="item.icon" size="sm">
					{{ item.icon.type }}
				</farm-icon>
				<farm-caption bold tag="span">{{ item.label }}</farm-caption>
			</farm-listitem>
		</farm-list>
	</farm-contextmenu>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue';

export interface IContextMenuOption {
	label: string;
	handler: string;
	icon: IContextMenuOptionIcon;
}

export interface IContextMenuOptionIcon {
	color?: string;
	type: string;
}

export default defineComponent({
	name: 'farm-context-menu',
	components: {},
	props: {
		/**
		 * Items to populate the context menu
		 */
		items: {
			type: Array as PropType<Array<IContextMenuOption>>,
			required: true,
		},
		/**
		 * Is disabled?
		 */
		disabled: {
			type: Boolean,
			default: false,
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
			}
		},
		toggleValue(event: MouseEvent) {
			this.value = !this.value;
			event.stopPropagation();
		},
	},
});
</script>
<style lang="scss" scoped>
@import 'TableContextMenu';
</style>
