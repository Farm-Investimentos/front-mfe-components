<template>
	<farm-box>
		<farm-row justify="center" class="mb-4">
			<img
				v-if="isNotFound"
				:src="isNotFoundImage"
				:alt="isNotFoundImageAlt"
				class="filter-empty-state__image"
			/>
			<img
				v-else
				:src="isEmptyImage"
				:alt="isEmptyImageAlt"
				class="filter-empty-state__image"
			/>
		</farm-row>
		<farm-row justify="center">
			<farm-bodytext variation="bold" color="gray" :type="2">
				<slot name="title">
					{{ title || 'Nenhuma informação para exibir aqui' }}
				</slot>
			</farm-bodytext>
		</farm-row>
		<farm-row justify="center" class="mt-2">
			<farm-caption variation="regular" color="gray">
				<slot name="subtitle">
					{{ subtitle || 'Tente filtrar novamente sua pesquisa.' }}
				</slot>
			</farm-caption>
		</farm-row>
	</farm-box>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

const emptyDataImage: string = require('../../assets/imgs/empty-data.svg');
const emptyNotFoundImage: string = require('../../assets/imgs/empty-not-found.svg');

export type FilterEmptyStateProps = {
	/**
	 * Indicates if the state is empty (no data)
	 */
	isEmpty?: boolean;
	/**
	 * Indicates if the state is not found (no results from filter)
	 */
	isNotFound?: boolean;
	/**
	 * Custom image URL for empty state
	 */
	isEmptyImage?: string;
	/**
	 * Alt text for empty state image
	 */
	isEmptyImageAlt?: string;
	/**
	 * Custom image URL for not found state
	 */
	isNotFoundImage?: string;
	/**
	 * Alt text for not found state image
	 */
	isNotFoundImageAlt?: string;
	/**
	 * Title to be displayed
	 */
	title?: string;
	/**
	 * Subtitle to be displayed
	 */
	subtitle?: string;
};

export default defineComponent({
	name: 'farm-filter-empty-state',
	props: {
		/**
		 * Indicates if the state is empty (no data)
		 */
		isEmpty: {
			type: Boolean as PropType<FilterEmptyStateProps['isEmpty']>,
			default: true,
		},
		/**
		 * Indicates if the state is not found (no results from filter)
		 */
		isNotFound: {
			type: Boolean as PropType<FilterEmptyStateProps['isNotFound']>,
			default: false,
		},
		/**
		 * Custom image URL for empty state
		 */
		isEmptyImage: {
			type: String as PropType<FilterEmptyStateProps['isEmptyImage']>,
			default: emptyDataImage,
		},
		/**
		 * Alt text for empty state image
		 */
		isEmptyImageAlt: {
			type: String as PropType<FilterEmptyStateProps['isEmptyImageAlt']>,
			default: 'Imagem referente a dados vazios',
		},
		/**
		 * Custom image URL for not found state
		 */
		isNotFoundImage: {
			type: String as PropType<FilterEmptyStateProps['isNotFoundImage']>,
			default: emptyNotFoundImage,
		},
		/**
		 * Alt text for not found state image
		 */
		isNotFoundImageAlt: {
			type: String as PropType<FilterEmptyStateProps['isNotFoundImageAlt']>,
			default: 'Imagem referente a filtro vazio',
		},
		/**
		 * Title to be displayed
		 */
		title: {
			type: String as PropType<FilterEmptyStateProps['title']>,
			default: '',
		},
		/**
		 * Subtitle to be displayed
		 */
		subtitle: {
			type: String as PropType<FilterEmptyStateProps['subtitle']>,
			default: '',
		},
	},
});
</script>

<style scoped lang="scss">
@import './FilterEmptyState.scss';
</style>
