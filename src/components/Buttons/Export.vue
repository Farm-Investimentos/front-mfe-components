<template>
	<v-btn
		v-if="optionsList.length == 0"
		@click="onClick"
		dense
		class="v-btn--responsive"
		outlined
		title="Exportar"
	>
		<v-icon class="mr-2">mdi-file-export-outline</v-icon>
		Exportar
	</v-btn>
	<v-menu v-else v-model="togglePopover">
		<template v-slot:activator="{ on, attrs }">
			<v-btn
				v-bind="attrs"
				v-on="on"
				dense
				class="v-btn--responsive"
				outlined
				title="Exportar"
				@onClick="togglePopover = true"
			>
				Exportar
				<v-icon class="ml-2 mr-0">
					{{ togglePopover ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
				</v-icon>
			</v-btn>
		</template>

		<v-list dense class="pa-0 mt-9">
			<v-list-item
				v-for="item in optionsList"
				:key="item.key"
				link
				:title="item.label"
				@click="onClick(item.key)"
			>
				{{ item.label }}
			</v-list-item>
		</v-list>
	</v-menu>
</template>
<script>
import VBtn from 'vuetify/lib/components/VBtn';
import VIcon from 'vuetify/lib/components/VIcon';
import VList from 'vuetify/lib/components/VList/VList';
import VMenu from 'vuetify/lib/components/VMenu';
import VListItem from 'vuetify/lib/components/VList/VListItem';
export default {
	name: 'ExportButton',
	props: {
		optionsList: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			togglePopover: false,
		};
	},
	components: {
		VBtn,
		VIcon,
		VList,
		VListItem,
		VMenu,
	},
	methods: {
		onClick(key) {
			this.$emit('onClick', key);
		},
	},
};
</script>
<style scoped lang="scss">
.v-btn {
	color: var(--v-extra-lighten2);
}
.v-list-item--link {
	font-size: 0.875rem;
}
</style>
