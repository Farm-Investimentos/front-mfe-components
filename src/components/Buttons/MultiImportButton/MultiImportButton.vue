<template>
	<farm-contextmenu v-model="value" :bottom="true">
		<template v-slot:activator="{}">
			<farm-btn outlined title="Importar" v-bind="$attrs">
				Importar
				<farm-icon class="ml-2"> chevron-{{ value ? 'up' : 'down' }} </farm-icon>
			</farm-btn>
		</template>
		<farm-list>
			<farm-listitem
				v-for="item in optionsList"
				clickable
				:hoverColor="$attrs.color || 'primary'"
				hoverColorVariation="lighten"
				:key="'importbutton_key_' + item.title"
				:title="item.title"
				@click="onClick(item.listenerKey)"
			>
				<farm-caption bold tag="span">{{ item.title }}</farm-caption>
			</farm-listitem>
		</farm-list>
	</farm-contextmenu>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue';

export interface IImportOption {
	title: String;
	listenerKey: String;
}

export default defineComponent({
	name: 'farm-btn-multipleimport',
	props: {
		/**
		 * Options list
		 */
		optionsList: {
			type: Array as PropType<Array<IImportOption>>,
			default: () => [],
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
	},
});
</script>