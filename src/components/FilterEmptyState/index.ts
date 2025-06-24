import FilterEmptyState from './FilterEmptyState.vue';

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

export default FilterEmptyState;
