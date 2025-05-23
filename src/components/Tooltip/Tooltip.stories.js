import { withDesign } from 'storybook-addon-designs';
import Tooltip from '.';

export default {
	title: 'Interactions/Tooltip',
	component: Tooltip,
	decorators: [withDesign],
	parameters: {
		docs: {
			description: {
				component: `Tooltip<br />
				selector: <em>farm-tooltip</em><br />
				<span style="color: var(--farm-primary-base);">ready for use</span>
				<br /><br />
				<h3>Observações importantes:</h3>
				<ul>
					<li><strong>Não adicione margin ao elemento ativador (activator)</strong> - Isso pode confundir o watcher de mostrar o tooltip e impedir que a seta seja posicionada corretamente</li>
					<li>Prefira adicionar margin no elemento pai ou em elementos irmãos do tooltip</li>
					<li>O posicionamento da seta é calculado com base na posição do elemento ativador</li>
					<li>O botão de fechar (X) é exibido automaticamente apenas em tooltips controlados por v-model</li>
					<li>A seta só é exibida quando uma posição é definida explicitamente (propriedade position). Se nenhuma posição for definida, o tooltip não terá seta</li>
				</ul>
				`,
			},
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p62YDSTfWg0Mcnf5APfdvI/%E2%9C%8D-Design-System-%7C-v2?node-id=3779%3A6131',
		},
		viewMode: 'docs',
	},
};

export const Tooltips = () => ({
	template: `<div style="padding-left: 80px; padding-top: 80px;">
        <span style="display: flex; align-items: center;">
            Passe o mouse sobre o ícone
            <farm-tooltip>
                <span>
                    Este é um tooltip simples
                </span>
                <template v-slot:activator>
                    <farm-icon size="sm" color="gray" style="margin-left: 8px; cursor: help;">help-circle</farm-icon>
                </template>
            </farm-tooltip>
        </span>
	</div>`,
});

export const Iconed = () => ({
	template: `<div style="padding-left: 80px; padding-top: 80px;">
        <farm-tooltip>
            some <em>sample</em> text
            <br />with line break
            <br />and a long text that does not fit
            <template v-slot:activator>
                <farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
            </template>
        </farm-tooltip>
	</div>`,
});

export const InsideCard = () => ({
	template: `<div style="padding-left: 80px; padding-top: 80px;">
        <farm-card style="padding: 32px">
			<span style="display: flex; align-items: center;">
				<span style="margin-right: 8px;">Informação importante</span>
				<farm-tooltip>
					this is the tooltip!
					<template v-slot:activator>
						<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
					</template>
				</farm-tooltip>
			</span>
		</farm-card>
	</div>`,
});

export const FluidTooltip = () => ({
	template: `<div style="padding-left: 80px; padding-top: 80px;">
		<span style="display: flex; align-items: center;">
			<span style="margin-right: 8px;">Tooltip com largura fluida</span>
			<farm-tooltip fluid>
				This is a fluid tooltip that will grow based on its content.
				It contains a longer text to demonstrate how it expands horizontally.
				<template v-slot:activator>
					<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
			</farm-tooltip>
		</span>
	</div>`,
});

export const TooltipPositions = () => ({
	template: `<div style="padding: 100px; display: flex; flex-direction: column; align-items: center; gap: 50px;">
		<div style="display: flex; gap: 30px; margin-bottom: 50px;">
			<div style="display: flex; flex-direction: column; align-items: center;">
				<p style="margin-bottom: 10px;">Top Left</p>
				<farm-tooltip position="top-left">
					Top-Left Position
					<template v-slot:activator>
						<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
					</template>
				</farm-tooltip>
			</div>

			<div style="display: flex; flex-direction: column; align-items: center;">
				<p style="margin-bottom: 10px;">Top Center</p>
				<farm-tooltip position="top-center">
					Top-Center Position (Default)
					<template v-slot:activator>
						<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
					</template>
				</farm-tooltip>
			</div>

			<div style="display: flex; flex-direction: column; align-items: center;">
				<p style="margin-bottom: 10px;">Top Right</p>
				<farm-tooltip position="top-right">
					Top-Right Position
					<template v-slot:activator>
						<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
					</template>
				</farm-tooltip>
			</div>
		</div>

		<div style="display: flex; gap: 30px;">
			<div style="display: flex; flex-direction: column; align-items: center;">
				<p style="margin-bottom: 10px;">Bottom Left</p>
				<farm-tooltip position="bottom-left">
					Bottom-Left Position
					<template v-slot:activator>
						<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
					</template>
				</farm-tooltip>
			</div>

			<div style="display: flex; flex-direction: column; align-items: center;">
				<p style="margin-bottom: 10px;">Bottom Center</p>
				<farm-tooltip position="bottom-center">
					Bottom-Center Position
					<template v-slot:activator>
						<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
					</template>
				</farm-tooltip>
			</div>

			<div style="display: flex; flex-direction: column; align-items: center;">
				<p style="margin-bottom: 10px;">Bottom Right</p>
				<farm-tooltip position="bottom-right">
					Bottom-Right Position
					<template v-slot:activator>
						<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
					</template>
				</farm-tooltip>
			</div>
		</div>
	</div>`,
});

export const FluidWithPosition = () => ({
	template: `<div style="padding: 200px;">
		<span style="display: flex; align-items: center;">
			<span style="margin-right: 8px;">Tooltip fluido com posição</span>
			<farm-tooltip fluid position="bottom-left">
				This is a fluid tooltip with Bottom-Left position.
				Notice how it grows based on content and has the arrow in the correct position.
				<template v-slot:activator>
					<farm-icon size="md" color="gray" style="cursor: help;">help-circle</farm-icon>
				</template>
			</farm-tooltip>
		</span>
	</div>`,
});

export const ControlledTooltips = () => ({
	data() {
		return {
			showTooltip1: false,
			showTooltip2: false,
			showTooltip3: false,
		};
	},
	template: `<div style="padding: 80px; display: flex; flex-direction: column; gap: 30px;">

		<div style="display: flex; align-items: center;">
			<span style="margin-right: 8px;">Clique para alternar:</span>
			<farm-tooltip v-model="showTooltip2" position="top-right">
				Tooltip ativado por clique no ícone.
				<br><br>
				Observe o botão X no canto para fechar.
				<template v-slot:activator>
					<farm-icon @click="showTooltip2 = !showTooltip2" size="md" color="blue" style="cursor: pointer;">help-circle</farm-icon>
				</template>
			</farm-tooltip>
		</div>

	</div>`,
});
