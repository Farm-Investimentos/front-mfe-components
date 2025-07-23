import Tooltip from './Tooltip.vue';
import Modal from '../Modal/Modal.vue';

export default {
	title: 'Display/Tooltip',
	component: Tooltip,
	parameters: {
		docs: {
			description: {
				component: `Tooltip<br />
				selector: <em>farm-tooltip</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	components: { Tooltip },
	template: `
		<div style="padding-left: 80px; padding-top: 80px;">
			<span style="display: flex; align-items: center;">
				Hover over the icon
				<farm-tooltip placement="top-center">
					<template v-slot:activator>
						<farm-icon size="sm" color="gray">help-circle</farm-icon>
					</template>
					This is a simple tooltip
				</farm-tooltip>
			</span>
		</div>
	`,
});

export const AllPositions = () => ({
	components: { Tooltip },
	template: `
		<div style="padding: 100px; display: flex; flex-direction: column; align-items: center; gap: 50px;">
			<div style="display: flex; gap: 30px; margin-bottom: 50px;">
				<div style="display: flex; flex-direction: column; align-items: center;">
					<p style="margin-bottom: 10px;">Top Left</p>
					<farm-tooltip placement="top-left">
						<template v-slot:activator>
							<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
						</template>
						Top-Left Position
					</farm-tooltip>
				</div>

				<div style="display: flex; flex-direction: column; align-items: center;">
					<p style="margin-bottom: 10px;">Top Center</p>
					<farm-tooltip placement="top-center">
						<template v-slot:activator>
							<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
						</template>
						Top-Center Position (Default)
					</farm-tooltip>
				</div>

				<div style="display: flex; flex-direction: column; align-items: center;">
					<p style="margin-bottom: 10px;">Top Right</p>
					<farm-tooltip placement="top-right">
						<template v-slot:activator>
							<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
						</template>
						Top-Right Position
					</farm-tooltip>
				</div>
			</div>

			<div style="display: flex; gap: 30px;">
				<div style="display: flex; flex-direction: column; align-items: center;">
					<p style="margin-bottom: 10px;">Bottom Left</p>
					<farm-tooltip placement="bottom-left">
						<template v-slot:activator>
							<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
						</template>
						Bottom-Left Position
					</farm-tooltip>
				</div>

				<div style="display: flex; flex-direction: column; align-items: center;">
					<p style="margin-bottom: 10px;">Bottom Center</p>
					<farm-tooltip placement="bottom-center">
						<template v-slot:activator>
							<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
						</template>
						Bottom-Center Position
					</farm-tooltip>
				</div>

				<div style="display: flex; flex-direction: column; align-items: center;">
					<p style="margin-bottom: 10px;">Bottom Right</p>
					<farm-tooltip placement="bottom-right">
						<template v-slot:activator>
							<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
						</template>
						Bottom-Right Position
					</farm-tooltip>
				</div>
			</div>
		</div>
	`,
});

export const ControlledTooltip = () => ({
	components: { Tooltip },
	data() {
		return {
			showTooltip: false,
		};
	},
	template: `
		<div style="padding: 80px;">
			<span style="display: flex; align-items: center;">
				<span style="margin-right: 8px;">Click to open:</span>
				<farm-tooltip v-model="showTooltip" placement="top-right">
					<template v-slot:activator>
						<farm-icon @click="showTooltip = !showTooltip" size="md" color="blue" style="cursor: pointer;">help-circle</farm-icon>
					</template>
					<template v-slot:title>Controlled Tooltip</template>
					This tooltip is controlled by v-model
				</farm-tooltip>
			</span>
		</div>
	`,
});

export const FluidTooltip = () => ({
	components: { Tooltip },
	template: `
		<div style="padding-left: 80px; padding-top: 80px;">
			<span style="display: flex; align-items: center;">
				<span style="margin-right: 8px;">Fluid width tooltip</span>
				<farm-tooltip placement="top-center" :fluid="true">
					<template v-slot:activator>
						<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
					</template>
					This is a fluid tooltip that will grow based on its content.
					It contains a longer text to demonstrate how it expands horizontally.
				</farm-tooltip>
			</span>
		</div>
	`,
});

export const WithModal = () => ({
	components: { Tooltip, Modal },
	data() {
		return {
			showModal: false,
		};
	},
	template: `
		<div>
			<button 
				@click="showModal = true" 
				style="background: #007bff; color: white; padding: 12px 24px; border: none; border-radius: 6px; font-size: 14px; cursor: pointer; font-weight: 500;"
			>
				🔍 Abrir Modal com Tooltip
			</button>
			
			<farm-modal v-model="showModal" size="md">
				<template v-slot:header>
					<h3>Modal com Tooltip e Scroll</h3>
				</template>
				<template v-slot:content>
					<div style="height: 400px; overflow-y: auto; padding: 20px;">
						<p>Conteúdo inicial do modal...</p>
						
						<div style="margin: 50px 0;">
							<span style="display: flex; align-items: center;">
								<span style="margin-right: 8px;">Tooltip no Modal:</span>
								<farm-tooltip placement="top-left">
									<template v-slot:activator>
										<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
									</template>
									<template v-slot:title>Tooltip no Modal</template>
									Este tooltip está dentro de um modal com scroll!
								</farm-tooltip>
							</span>
						</div>
						
						<p>Mais conteúdo para gerar scroll...</p>
						<p>Linha 1</p>
						<p>Linha 2</p>
						<p>Linha 3</p>
						<p>Linha 4</p>
						<p>Linha 5</p>
						<p>Linha 6</p>
						<p>Linha 7</p>
						<p>Linha 8</p>
						<p>Linha 9</p>
						<p>Linha 10</p>
						
						<div style="margin: 50px 0;">
							<span style="display: flex; align-items: center;">
								<span style="margin-right: 8px;">Outro Tooltip:</span>
								<farm-tooltip placement="bottom-right">
									<template v-slot:activator>
										<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
									</template>
									<template v-slot:title>Outro Tooltip</template>
									Este tooltip está no final do conteúdo com scroll!
								</farm-tooltip>
							</span>
						</div>
						
						<p>Linha 11</p>
						<p>Linha 12</p>
						<p>Linha 13</p>
						<p>Linha 14</p>
						<p>Linha 15</p>
						<p>Linha 16</p>
						<p>Linha 17</p>
						<p>Linha 18</p>
						<p>Linha 19</p>
						<p>Linha 20</p>
						<p>Fim do conteúdo!</p>
					</div>
				</template>
				<template v-slot:footer>
					<button @click="showModal = false" style="background: #6c757d; color: white; padding: 8px 16px; border: none; border-radius: 4px;">
						Fechar Modal
					</button>
				</template>
			</farm-modal>
		</div>
	`,
});

export const MultipleTooltips = () => ({
	components: { Tooltip },
	template: `
		<div style="display: flex; gap: 20px; padding: 50px;">
			<farm-tooltip placement="top-left">
				<template v-slot:activator>
					<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
				Tooltip Top-Left
			</farm-tooltip>
			
			<farm-tooltip placement="top-center">
				<template v-slot:activator>
					<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
				Tooltip Top-Center
			</farm-tooltip>
			
			<farm-tooltip placement="top-right">
				<template v-slot:activator>
					<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
				Tooltip Top-Right
			</farm-tooltip>
			
			<farm-tooltip placement="bottom-left">
				<template v-slot:activator>
					<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
				Tooltip Bottom-Left
			</farm-tooltip>
			
			<farm-tooltip placement="bottom-center">
				<template v-slot:activator>
					<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
				Tooltip Bottom-Center
			</farm-tooltip>
			
			<farm-tooltip placement="bottom-right">
				<template v-slot:activator>
					<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
				Tooltip Bottom-Right
			</farm-tooltip>
		</div>
	`,
});
