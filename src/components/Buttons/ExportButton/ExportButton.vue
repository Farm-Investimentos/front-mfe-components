<template>
	<farm-btn
		v-if="optionsList.length == 0"
		@click="onClick"
		class="farm-btn--responsive"
		outlined
		title="Exportar"
		:color="$attrs.color"
		:disabled="disabled"
	>
		<i :class="{ 'mr-2': true, 'mdi-file-export-outline': true, mdi: true }"></i>
		Exportar
	</farm-btn>

	<farm-contextmenu v-else v-model="value" :bottom="true" :disabled-click-propagation="true">
		<template v-slot:activator="{}">
			<farm-btn
				outlined
				title="Exportar"
				:color="$attrs.color"
				:disabled="disabled"
				@click="toggleValue"
			>
				Exportar
				<farm-icon class="ml-2"> chevron-{{ value ? 'up' : 'down' }} </farm-icon>
			</farm-btn>
		</template>
		<farm-list>
			<farm-listitem
				v-for="item in optionsList"
				clickable
				:hoverColor="$attrs.color || 'primary'"
				hoverColorVariation="lighten"
				:key="'exportbutton_key_' + item.label"
				:title="item.label"
				@click="onClick(item.key)"
			>
				<farm-caption bold tag="span">{{ item.label }}</farm-caption>
			</farm-listitem>
		</farm-list>
	</farm-contextmenu>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';

export interface IExportOption {
	label: String;
	key: String;
}

/**
 * BExport Button: standalone or menu list
 */
export default Vue.extend({
	name: 'farm-btn-export',
	props: {
		/**
		 * Options list
		 */
		optionsList: {
			type: Array as PropType<Array<IExportOption>>,
			default: () => [],
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
		onClick(key) {
			this.$emit('onClick', key);
		},
		toggleValue(event: MouseEvent) {
			if (this.disabled) return;
			this.value = !this.value;
			event.stopPropagation();
		},
	},
});
</script>
