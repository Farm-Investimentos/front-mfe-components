<template>
	<farm-tooltip v-model="show" :color="tooltipColor || buttonColor">
		{{ feedbackMessage }}
		<template v-slot:activator="{}">
			<farm-btn
				v-if="isIcon"
				title="Copiar"
				icon
				:disabled="disabled"
				:color="buttonColor"
				@click="onClick"
			>
				<farm-icon :size="sizeIcon">content-copy</farm-icon>
			</farm-btn>
			<farm-btn v-else outlined title="Copiar" :disabled="disabled" @click="onClick">
				<farm-icon :size="sizeIcon">content-copy</farm-icon>
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
		 * sizeIcon: icon size setting
		 */
		sizeIcon: {
			type: String as PropType<
				'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'other (examples: 12px, 3rem)'
			>,
			default: 'xs',
		},
		/**
		 * Success message content after copy
		 */
		successMessage: {
			type: String,
			default: 'Conteúdo copiado para a área de trabalho',
		},
		/**
		 * Button color
		 */
		buttonColor: {
			type: String as PropType<
				| 'primary'
				| 'secondary'
				| 'secondary-green'
				| 'secondary-golden'
				| 'neutral'
				| 'info'
				| 'success'
				| 'error'
				| 'warning'
				| 'extra-1'
				| 'extra-2'
			>,
			default: 'primary',
		},
		/**
		 * Tooltip color
		 */
		tooltipColor: {
			type: String as PropType<
				| 'primary'
				| 'secondary'
				| 'secondary-green'
				| 'secondary-golden'
				| 'neutral'
				| 'info'
				| 'success'
				| 'error'
				| 'warning'
				| 'extra-1'
				| 'extra-2'
			>,
			default: null,
		},
		/**
		 * Success message timeout (in ms)
		 */
		successTimeout: {
			type: [Number, String],
			default: 2000,
		},
	},
	setup(props) {
		const show = ref(false);
		const feedbackMessage = ref('');
		const disabled = ref(false);
		const sizeIcon = ref(props.sizeIcon);
		const { toCopy, isIcon, successMessage, successTimeout } = toRefs(props);

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
			}, successTimeout.value);
		};

		return {
			show,
			isIcon,
			sizeIcon,
			feedbackMessage,
			disabled,
			onClick,
		};
	},
});
</script>
