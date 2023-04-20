<template>
	<div class="farm-resource-metainfo">
		<div v-if="showCreate">
			<farm-icon color="black" variation="40" size="sm">calendar-blank</farm-icon>
			<farm-caption color="black" color-variation="40" variation="regular">
				Data de cadastro:
				<farm-caption color="black" color-variation="40" variation="medium" tag="span">
					{{ formattedCreatedAt }}
				</farm-caption>
			</farm-caption>
		</div>
		<div v-if="showUpdate">
			<farm-icon color="black" variation="40" size="sm">history</farm-icon>

			<farm-caption color="black" color-variation="40" variation="regular">
				Última atualização feita por
				<farm-caption color="black" color-variation="40" variation="medium" tag="span">
					{{ formattedUsername }}
				</farm-caption>
				, dia
				<farm-caption color="black" color-variation="40" variation="medium" tag="span">
					{{ formattedUpdatedAt }}
				</farm-caption>
				às
				<farm-caption color="black" color-variation="40" variation="medium" tag="span">
					{{ formattedUpdatedHours }}
				</farm-caption>
			</farm-caption>
		</div>
	</div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from 'vue';

interface ResourceMetaInfoProps {
	createdAt: string;
	updatedAt: string;
	username: string;
	updatedHours: string;
}

export default defineComponent({
	name: 'farm-resource-metainfo',
	props: {
		/**
		 * Object with the metadata information
		 */
		infos: {
			required: true,
			type: Object as PropType<ResourceMetaInfoProps>,
		},
		/**
		 * Show create metadata info if empty?
		 */
		showEmptyCreate: {
			type: Boolean,
			default: false,
		},
		/**
		 * Show update metadata info if empty?
		 */
		showEmptyUpdate: {
			type: Boolean,
			default: false,
		},
	},
	setup(props) {
		const { infos, showEmptyCreate, showEmptyUpdate } = toRefs(props);

		const showUpdate = computed(
			() =>
				(infos.value.updatedAt !== null && infos.value.updatedAt !== undefined) ||
				showEmptyUpdate.value
		);

		const showCreate = computed(
			() =>
				(infos.value.createdAt !== null && infos.value.createdAt !== undefined) ||
				showEmptyCreate.value
		);

		const formattedCreatedAt = computed(() => infos.value.createdAt || 'N/A');
		const formattedUpdatedAt = computed(() => infos.value.updatedAt || 'N/A');
		const formattedUsername = computed(() => infos.value.username || 'N/A');
		const formattedUpdatedHours = computed(() => infos.value.updatedHours || 'N/A');

		return {
			showUpdate,
			showCreate,
			formattedCreatedAt,
			formattedUpdatedAt,
			formattedUsername,
			formattedUpdatedHours,
		};
	},
});
</script>
<style lang="scss" scoped>
@import 'ResourceMetaInfo';
</style>
