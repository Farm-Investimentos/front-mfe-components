<template>
	<v-menu>
		<template v-slot:activator="{ on, attrs }">
			<v-btn icon v-bind="attrs" v-on="on" title="Abrir opções">
				<v-icon class="ml-3">mdi-dots-horizontal</v-icon>
			</v-btn>
		</template>

		<v-list dense class="pa-0">
			<v-list-item
				v-for="item in items"
				:key="item.label"
				:title="item.label"
				@click="$emit(item.handler)"
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
import { VMenu } from 'vuetify/lib/components/VMenu';
import { VBtn } from 'vuetify/lib/components/VBtn';
import { VIcon } from 'vuetify/lib/components/VIcon';
import { VList } from 'vuetify/lib/components/VList';
import VListItem from 'vuetify/lib/components/VList/VListItem';
import { VListItemContent, VListItemTitle } from 'vuetify/lib';
export default {
	components: {
		VBtn,
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
};
</script>
