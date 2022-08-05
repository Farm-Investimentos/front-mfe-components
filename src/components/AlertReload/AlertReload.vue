<template>
	<div
		:class="{
			'farm-alert-reload': true,
			'farm-alert-reload--vertical': $props.direction === 'vertical',
		}"
	>
		<div>
			<farm-icon color="error">alert</farm-icon>
			<farm-typography tag="span" color="error" class="farm-alert-reload--label">
				{{ label }}
			</farm-typography>
		</div>
		<farm-btn color="secondary" class="ml-3" alt="Recarregar" @click="$emit('onClick')">
			<farm-icon>refresh</farm-icon>
			Recarregar
		</farm-btn>
	</div>
</template>
<script lang="ts">
import DefaultButton from '../Buttons/DefaultButton';
import Icon from '../Icon';
import Typography from '../Typography';

export default {
	name: 'farm-alert-reload',
	components: {
		'farm-btn': DefaultButton,
		'farm-icon': Icon,
		'farm-typography': Typography,
	},
	props: {
		/**
		 * Label
		 */
		label: {
			type: String,
			default: '',
		},
		/**
		 * Direction
		 */
		direction: {
			type: String,
			default: 'horizontal',
		},
	},
};
</script>

<style lang="scss" scoped>
.farm-alert-reload {
	border: 1px solid var(--v-error-base);
	border-radius: 8px;
	padding: 8px 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	&--label {
		padding: 0 8px;
	}
	> div {
		display: flex;
	}
}
.farm-btn {
	.farm-icon {
		margin-right: 8px;
	}
}

@media screen and (max-width: 959px) {
	.farm-alert-reload--label {
		font-size: 0.75rem;
	}
}
</style>
