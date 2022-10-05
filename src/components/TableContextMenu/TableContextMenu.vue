<template>
	<farm-contextmenu v-model="value">
		<template v-slot:activator="{}">
			<farm-btn icon @click="toggleValue" title="Abrir opções" color="secondary">
				<farm-icon size="md">dots-horizontal</farm-icon>
			</farm-btn>
		</template>

		<div data-app="true" class="v-application v-application--is-ltr theme--light">
			<div class="v-application--wrap">
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
								<farm-caption tag="span" bold>
									{{ item.label }}
								</farm-caption>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</div>
		</div>
	</farm-contextmenu>
</template>
<script lang="ts">
import Vue from 'vue';
import { VList } from 'vuetify/lib/components/VList';
import VListItem from 'vuetify/lib/components/VList/VListItem';
import { VListItemContent, VListItemTitle } from 'vuetify/lib';

export default Vue.extend({
	name: 'farm-context-menu',
	components: {
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
		toggleValue() {
			this.value = !this.value;
		},
	},
});
</script>
<style lang="scss" scoped>
@import 'TableContextMenu';
</style>
