<template>
	<v-menu>
		<template v-slot:activator="{ on, attrs }">
			<farm-btn icon v-bind="attrs" v-on="on" title="Abrir opções">
				<i class="farm-btn__icon mdi mdi-dots-horizontal"></i>
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
						<v-icon
							v-if="item.icon"
							:color="item.icon.color || 'secondary'"
							class="mb-1"
							>mdi-{{ item.icon.type }}</v-icon
						>
						{{ item.label }}
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-menu>
</template>
<script>
import Vue from 'vue';
import { VMenu } from 'vuetify/lib/components/VMenu';
import { VIcon } from 'vuetify/lib/components/VIcon';
import { VList } from 'vuetify/lib/components/VList';
import VListItem from 'vuetify/lib/components/VList/VListItem';
import { VListItemContent, VListItemTitle } from 'vuetify/lib';

export default Vue.extend({
	name: 'farm-context-menu',
	components: {
		VIcon,
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
