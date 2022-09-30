<template>
	<div>
		<farm-icon size="lg">magnify</farm-icon>
		<farm-caption bold>{{ title }}</farm-caption>
		<farm-caption variation="regular" v-if="subtitle">{{ subtitle }}</farm-caption>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
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
				'Tente filtrar novamente sua pesquisa ou faça uma importação para ver mais resultados',
		},
	},
});
</script>
<style scoped lang="scss">
@import './DataTableEmptyWrapper';
</style>
