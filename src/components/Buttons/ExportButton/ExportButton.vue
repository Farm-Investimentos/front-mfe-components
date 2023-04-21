<template>
	<farm-btn
		v-if="optionsList.length == 0 || disabled"
		class="farm-btn--responsive"
		outlined
		title="Exportar"
		:color="$attrs.color"
		:disabled="disabled"
		@click="onClick"
	>
		<farm-icon v-if="optionsList.length == 0" class="mr-2"> file-export-outline </farm-icon>
		Exportar
		<farm-icon v-if="optionsList.length != 0" class="ml-2"> chevron-down </farm-icon>
	</farm-btn>

	<farm-contextmenu v-else v-model="value" :bottom="true">
		<template v-slot:activator="{}">
			<farm-btn outlined title="Exportar" :color="$attrs.color" @click="toggleValue">
				Exportar
				<farm-icon class="ml-2"> chevron-{{ value ? 'up' : 'down' }} </farm-icon>
			</farm-btn>
		</template>
		<farm-list>
			<farm-listitem
				v-for="item in optionsList"
				clickable
				hoverColorVariation="lighten"
				:hoverColor="$attrs.color || 'primary'"
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
import { PropType } from 'vue';

export interface IExportOption {
	label: String;
	key: String;
}

/**
 * BExport Button: standalone or menu list
 */
export default {
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
			this.value = !this.value;
			event.stopPropagation();
		},
	},
};
</script>
