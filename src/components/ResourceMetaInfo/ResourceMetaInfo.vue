<template>
	<div class="farm-resource-metainfo">
		<div v-if="showCreate">
			<farm-icon color="black" variation="40" size="sm">calendar-blank</farm-icon>
			<farm-caption
				v-if="!showCreatedBy && !showCreatedHours"
				color="black"
				color-variation="40"
				variation="regular"
			>
				Data de cadastro:
				<farm-caption color="black" color-variation="40" variation="medium" tag="span">
					<b>{{ formattedCreatedAt }}</b
					>.
				</farm-caption>
			</farm-caption>

			<farm-caption v-else color="black" color-variation="40" variation="regular">
				Cadastro realizado por
				<farm-caption color="black" color-variation="40" variation="medium" tag="span">
					<b>{{ formattedCreatedBy }}</b
					>, dia <b>{{ formattedCreatedAt }}</b> às <b>{{ formattedCreatedHours }}</b
					>.
				</farm-caption>
			</farm-caption>
		</div>
		<div v-if="showUpdate">
			<farm-icon color="black" variation="40" size="sm">history</farm-icon>

			<farm-caption color="black" color-variation="40" variation="regular">
				Última atualização feita por
				<farm-caption color="black" color-variation="40" variation="medium" tag="span">
					<b>{{ formattedUsername }}</b> </farm-caption
				>, dia
				<farm-caption color="black" color-variation="40" variation="medium" tag="span">
					<b>{{ formattedUpdatedAt }}</b>
				</farm-caption>
				às
				<farm-caption color="black" color-variation="40" variation="medium" tag="span">
					<b>{{ formattedUpdatedHours }}</b
					>.
				</farm-caption>
			</farm-caption>
		</div>
	</div>
</template>
<script lang="ts">
import Vue, { computed, PropType, toRefs } from 'vue';

interface ResourceMetaInfoProps {
	createdAt: string;
	createdBy?: string;
	updatedAt: string;
	username: string;
	updatedHours: string;
	createdHours?: string;
}

export default Vue.extend({
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

		const showCreatedBy = computed(
			() =>
				(infos.value.createdBy !== null && infos.value.createdBy !== undefined) ||
				showEmptyCreate.value
		);

		const showCreatedHours = computed(
			() =>
				(infos.value.createdHours !== null && infos.value.createdHours !== undefined) ||
				showEmptyCreate.value
		);

		const formattedCreatedAt = computed(() => infos.value.createdAt || 'N/A');

		const formattedCreatedBy = computed(() => infos.value.createdBy || 'N/A');

		const formattedUpdatedAt = computed(() => infos.value.updatedAt || 'N/A');

		const formattedUsername = computed(() => infos.value.username || 'N/A');

		const formattedUpdatedHours = computed(() => infos.value.updatedHours || 'N/A');

		const formattedCreatedHours = computed(() => infos.value.createdHours || 'N/A');

		return {
			showUpdate,
			showCreate,
			showCreatedBy,
			showCreatedHours,
			formattedCreatedAt,
			formattedCreatedBy,
			formattedUpdatedAt,
			formattedUsername,
			formattedUpdatedHours,
			formattedCreatedHours,
		};
	},
});
</script>
<style lang="scss" scoped>
@import 'ResourceMetaInfo';
</style>
