<template>
	<farm-tooltip v-model="show">
		{{ feedbackMessage }}
		<template v-slot:activator="{}">
			<farm-btn icon :disabled="disabled" @click="onClick">
				<farm-icon size="xs">content-copy</farm-icon>
			</farm-btn>
		</template>
	</farm-tooltip>
</template>

<script lang="ts">
import Vue, { ref, toRefs } from 'vue';
import { toClipboard } from '@farm-investimentos/front-mfe-libs-ts';

export default Vue.extend({
	name: 'farm-copytoclipboard',
	props: {
		/**
		 * Content to be copied to clipboard
		 */
		toCopy: { type: String, required: true },
	},
	setup(props) {
		const show = ref(false);
		const feedbackMessage = ref('');
		const disabled = ref(false);
		const { toCopy } = toRefs(props);

		const onClick = async () => {
			disabled.value = true;
			try {
				await toClipboard(toCopy.value);
				feedbackMessage.value = 'Conteúdo copiado para a área de trabalhado';
			} catch (e) {
				feedbackMessage.value = 'Ocorreu um erro: ' + e;
			}
			show.value = true;

			setTimeout(() => {
				show.value = false;
				disabled.value = false;
			}, 1000);
		};

		return {
			show,
			feedbackMessage,
			disabled,
			onClick,
		};
	},
});
</script>

