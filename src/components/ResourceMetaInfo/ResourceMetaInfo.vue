<template>
	<div class="farm-resource-metainfo">
		<div v-if="showCreate">
			<farm-icon color="gray" size="14">calendar-blank</farm-icon>
			<farm-caption color="gray" tag="p" variation="regular"
				>Data de cadastro:
				<farm-caption color="gray" variation="medium" tag="span">{{
					infos.createdAt
				}}</farm-caption>
			</farm-caption>
		</div>
		<div v-if="showUpdate">
			<farm-icon color="gray" size="14">history</farm-icon>

			<farm-caption color="gray" tag="p" variation="regular"
				>Última atualização feita por
				<farm-caption color="gray" variation="medium" tag="span">{{
					infos.username
				}}</farm-caption
				>, dia
				<farm-caption color="gray" variation="medium" tag="span">{{
					infos.updatedAt
				}}</farm-caption>
				às
				<farm-caption color="gray" variation="medium" tag="span">{{
					infos.updatedHours
				}}</farm-caption>
			</farm-caption>
		</div>
	</div>
</template>
<script lang="ts">
import Vue, { computed, PropType, toRefs } from 'vue';
import Icon from '../Icon';
import { Caption } from '../Typography';

interface ResourceMetaInfoProps {
	createdAt: string;
	updatedAt: string;
	username: string;
	updatedHours: string;
}

export default Vue.extend({
	name: 'farm-resource-metainfo',
	components: {
		'farm-icon': Icon,
		'farm-caption': Caption,
	},
	props: {
		infos: {
			required: true,
			type: Object as PropType<ResourceMetaInfoProps>,
		},
		showEmptyCreate: {
			type: Boolean,
			default: false,
		},
		showEmptyUpdate: {
			type: Boolean,
			default: false,
		},
	},
	setup(props) {
		const { infos, showEmptyCreate, showEmptyUpdate } = toRefs(props);

		const showUpdate = computed(
			() =>
				(infos.value.updatedAt !== null &&
					infos.value.updatedAt !== undefined &&
					infos.value.updatedAt !== 'N/A') ||
				showEmptyUpdate.value
		);

		const showCreate = computed(
			() =>
				(infos.value.createdAt !== null &&
					infos.value.createdAt !== undefined &&
					infos.value.createdAt !== 'N/A') ||
				showEmptyCreate.value
		);

		return {
			showUpdate,
			showCreate,
		};
	},
});
</script>
<style lang="scss" scoped>
@import 'ResourceMetaInfo.scss';
</style>
