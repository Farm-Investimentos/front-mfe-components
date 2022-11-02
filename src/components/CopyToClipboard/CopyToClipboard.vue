<template>
	<farm-tooltip v-model="show" :color="tooltipColor">
		{{ feedbackMessage }}
		<template v-slot:activator="{}">
			<farm-btn v-if="isIcon" title="Copiar" icon :disabled="disabled" @click="onClick">
				<farm-icon size="xs">content-copy</farm-icon>
			</farm-btn>
			<farm-btn v-else outlined title="Copiar" :disabled="disabled" @click="onClick">
				<farm-icon>content-copy</farm-icon>
				Copiar
			</farm-btn>
		</template>
	</farm-tooltip>
</template>

<script lang="ts">
import Vue, { PropType, ref, toRefs } from 'vue';
import { toClipboard } from '@farm-investimentos/front-mfe-libs-ts';

export default Vue.extend({
	name: 'farm-copytoclipboard',
	props: {
		/**
		 * Content to be copied to clipboard
		 */
		toCopy: { type: String, required: true },
		/**
		 * Is button with icon?
		 */
		isIcon: { type: Boolean, default: true },
		/**
		 * Success message content after copy
		 */
		successMessage: {
			type: String,
			default: 'Conteúdo copiado para a área de trabalho',
		},
		/**
		 * Tooltip color
		 */
		tooltipColor: {
			type: String as PropType<
				| 'primary'
				| 'secondary'
				| 'neutral'
				| 'info'
				| 'success'
				| 'error'
				| 'warning'
				| 'success'
				| 'extra-1'
				| 'extra-2'
			>,
			default: 'secondary',
		},
	},
	setup(props) {
		const show = ref(false);
		const feedbackMessage = ref('');
		const disabled = ref(false);
		const { toCopy, isIcon, successMessage } = toRefs(props);

		const onClick = async () => {
			disabled.value = true;
			try {
				await toClipboard(toCopy.value);
				feedbackMessage.value = successMessage.value;
			} catch (e) {
				feedbackMessage.value = 'Ocorreu um erro: ' + e;
			}
			show.value = true;

			setTimeout(() => {
				show.value = false;
				disabled.value = false;
			}, 2000);
		};

		return {
			show,
			isIcon,
			feedbackMessage,
			disabled,
			onClick,
		};
	},
});
</script>
