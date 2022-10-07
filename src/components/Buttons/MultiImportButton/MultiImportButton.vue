<template>
	<!--
	<v-menu content-class="elevation-1" v-model="togglePopover" :offset-y="true" :rounded="'b t-0'">
		<template v-slot:activator="{ on, attrs }">
			<farm-btn
				v-bind="attrs"
				v-on="on"
				dense
				class="farm-btn--responsive farm-btn--import"
				outlined
				color="secondary"
				title="Importar"
				@onClick="togglePopover = true"
			>
				Importar
				<i
					:class="{
						'ml-2': true,
						'mr-0': true,
						mdi: true,
						'mdi-chevron-up': togglePopover,
						'mdi-chevron-down': !togglePopover,
					}"
				>
				</i>
			</farm-btn>
		</template>

		<v-list dense class="pa-0">
			<v-list-item
				v-for="option in optionsList"
				:key="option.listenerKey"
				link
				:title="option.title"
				@click="$emit('onClick', option.listenerKey)"
			>
				<v-list-item-content>
					<v-list-item-title>{{ option.title }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-menu>
-->
	<farm-contextmenu v-model="value" :bottom="true">
		<template v-slot:activator="{}">
			<farm-btn outlined title="Importar" color="secondary" @click="toggleValue">
				Importar
				<farm-icon class="ml-2"> chevron-{{ value ? 'up' : 'down' }} </farm-icon>
			</farm-btn>
		</template>
		<farm-list>
			<farm-listitem
				v-for="item in optionsList"
				clickable
				hoverColor="primary"
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
import Vue, { PropType } from 'vue';

export interface IImportOption {
	title: String;
	listenerKey: String;
}

export default Vue.extend({
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
		toggleValue() {
			this.value = !this.value;
		},
	},
});
</script>
