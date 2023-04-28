<template>
	<div
		:class="{
			'farm-emptywrapper': true,
			'farm-emptywrapper--bordered': bordered,
		}"
	>
		<farm-icon size="xl" color="gray">magnify</farm-icon>
		<farm-bodytext type="2" variation="bold" color="black" color-variation="40">
			{{ title }}
		</farm-bodytext>
		<farm-caption v-if="subtitle" variation="regular" color-variation="30">
			{{ subtitle }}
		</farm-caption>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'farm-emptywrapper',
	props: {
		/**
		 * Title
		 */
		title: {
			type: String,
			default: 'Nenhuma informação para exibir aqui',
		},
		/**
		 * Subtitle
		 */
		subtitle: {
			type: String,
			default:
				'Tente filtrar novamente sua pesquisa.',
		},
		/**
		 * Has border?
		 */
		bordered: {
			type: Boolean,
			default: true,
		},
	},
});
</script>
<style scoped lang="scss">
@import './DataTableEmptyWrapper';
</style>
