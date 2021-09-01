<template>
	<div align="center">
		<v-icon>mdi-magnify</v-icon>
		<p>{{ title }}</p>
		<p>{{ subtitle }}</p>
	</div>
</template>
<script>
import { VIcon } from 'vuetify/lib/components/VIcon';
/**
 * Componente de lista vazia
 */
export default {
	name: 'DataTableEmptyWrapper',
	props: {
		/**
		 * Título
		 */
		title: {
			type: String,
			default: 'Nenhuma informação para exibir aqui',
		},
        /**
		 * Subtítulo
		 */
		subtitle: {
			type: String,
			default:
				'Tente filtrar novamente sua pesquisa ou faça uma importação para ver mais resultados',
		},
	},
	components: {
		VIcon,
	},
};
</script>
<style scoped lang="scss">
div {
	border-top: 1px solid var(--v-gray-lighten2);
	padding: 3rem 1rem;
	.v-icon {
		margin-top: 1rem;
		font-size: 2.625rem;
		color: var(--v-gray-lighten2);
	}
	p:nth-child(2) {
		color: var(--v-primary-base);
		font-weight: 700;
		font-size: 0.75rem;
		margin-top: 1rem;
	}
	p:nth-child(3) {
		color: var(--v-gray-base);
		font-weight: 400;
		font-size: 0.625rem;
		margin-bottom: 1rem;
	}
}
</style>
