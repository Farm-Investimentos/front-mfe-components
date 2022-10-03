<template>
	<v-menu>
		<template v-slot:activator="{ on, attrs }">
			<farm-btn icon v-bind="attrs" v-on="on" title="Abrir opções" color="secondary">
				<farm-icon size="md">dots-horizontal</farm-icon>
			</farm-btn>
		</template>

		<v-list dense class="pa-0">
			<v-list-item
				v-for="item in items"
				:key="item.label"
				:title="item.label"
				@click="onClick(item.handler)"
			>
				<v-list-item-content>
					<v-list-item-title>
						<farm-icon
							v-if="item.icon"
							size="md"
							:color="item.icon.color || 'secondary'"
						>
							{{ item.icon.type }}
						</farm-icon>
						{{ item.label }}
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-menu>
</template>
<script lang="ts">
import Vue from 'vue';
import { VMenu } from 'vuetify/lib/components/VMenu';
import { VList } from 'vuetify/lib/components/VList';
import VListItem from 'vuetify/lib/components/VList/VListItem';
import { VListItemContent, VListItemTitle } from 'vuetify/lib';

export default Vue.extend({
	name: 'farm-context-menu',
	components: {
		VMenu,
		VList,
		VListItem,
		VListItemContent,
		VListItemTitle,
	},
	props: {
		items: {
			type: Array,
			required: true,
		},
	},
	methods: {
		onClick(handler) {
			if (handler !== undefined) {
				this.$emit(handler);
			}
		},
	},
});
</script>
<style lang="scss" scoped>
@import 'TableContextMenu';
</style>
