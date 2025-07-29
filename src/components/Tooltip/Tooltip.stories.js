import Tooltip from './Tooltip.vue';
import Modal from '../Modal/Modal.vue';
import DefaultButton from '../Buttons/DefaultButton/DefaultButton.vue';
import Typography from '../Typography/Typography.vue';
import Icon from '../Icon/Icon.vue';

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
				<span >Click to open:</span>
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
	components: { Tooltip, Modal, DefaultButton, Typography, Icon },
	data() {
		return {
			showModal: false,
		};
	},
	template: `
		<div>
			<farm-btn color="primary" @click="showModal = true">
				Abrir Modal com Tooltips
			</farm-btn>
			
			<farm-modal v-model="showModal" size="md">
				<template v-slot:header>
					<div style="padding: 20px; border-bottom: 1px solid #e0e0e0; background: white;">
						<farm-typography tag="h2" size="xl" color="black" weight="600" style="margin: 0;">
							Formulário de Investimento
						</farm-typography>
						<farm-typography size="sm" color="gray" style="margin-top: 4px;">
							Preencha as informações para processar seu investimento
						</farm-typography>
					</div>
				</template>
				
				<template v-slot:content>
					<div style="max-height: 50vh; overflow-y: auto; padding: 0;">
						<div style="padding: 24px;">
							<!-- Seção 1: Dados Pessoais -->
							<div style="margin-bottom: 32px;">
								<farm-typography tag="h3" size="lg" color="black" weight="600" style="margin-bottom: 16px; border-bottom: 2px solid #f0f0f0; padding-bottom: 8px;">
									Dados Pessoais
								</farm-typography>
								
								<div style="display: grid; gap: 16px;" class="mt-12">
									<div style="display: flex; align-items: center; gap: 8px;">
										<farm-typography weight="500">Nome completo</farm-typography>
										<farm-tooltip placement="top-center">
											<template v-slot:activator>
												<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
											</template>
											Digite seu nome completo exatamente como aparece no documento de identidade.
										</farm-tooltip>
									</div>
									
									<div style="display: flex; align-items: center; gap: 8px;">
										<farm-typography weight="500">CPF</farm-typography>
										<farm-tooltip placement="bottom-right">
											<template v-slot:activator>
												<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
											</template>
											CPF é obrigatório para investimentos. Será validado automaticamente.
										</farm-tooltip>
									</div>
									
									<div style="display: flex; align-items: center; gap: 8px;">
										<farm-typography weight="500">Email corporativo</farm-typography>
										<farm-tooltip placement="top-left" :fluid="true">
											<template v-slot:activator>
												<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
											</template>
											Use apenas emails corporativos (@empresa.com). Emails pessoais não são aceitos para investimentos corporativos.
										</farm-tooltip>
									</div>
								</div>
							</div>
							
							<!-- Seção 2: Informações de Investimento -->
							<div style="margin-bottom: 32px;">
								<farm-typography tag="h3" size="lg" color="black" weight="600" style="margin-bottom: 16px; border-bottom: 2px solid #f0f0f0; padding-bottom: 8px;">
									Informações de Investimento
								</farm-typography>
								
								<div style="display: grid; gap: 16px;">
									<div style="display: flex; align-items: center; gap: 8px;">
										<farm-typography weight="500">Valor do investimento</farm-typography>
										<farm-tooltip placement="bottom-center">
											<template v-slot:activator>
												<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
											</template>
											O valor mínimo para investimento é R$ 1.000,00. Valores acima de R$ 100.000,00 requerem aprovação adicional.
										</farm-tooltip>
									</div>
									
									<div style="display: flex; align-items: center; gap: 8px;">
										<farm-typography weight="500">Tipo de investimento</farm-typography>
										<farm-tooltip placement="top-right" :fluid="true">
											<template v-slot:activator>
												<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
											</template>
											CDB, LCI, LCA, Tesouro Direto, Fundos de Investimento. Cada tipo possui características específicas de rentabilidade e liquidez.
										</farm-tooltip>
									</div>
									
									<div style="display: flex; align-items: center; gap: 8px;">
										<farm-typography weight="500">Prazo de vencimento</farm-typography>
										<farm-tooltip placement="bottom-left">
											<template v-slot:activator>
												<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
											</template>
											Selecione uma data futura. O prazo mínimo é de 30 dias para CDB e 90 dias para fundos.
										</farm-tooltip>
									</div>
								</div>
							</div>
							
							<!-- Seção 3: Documentação -->
							<div style="margin-bottom: 32px;">
								<farm-typography tag="h3" size="lg" color="black" weight="600" style="margin-bottom: 16px; border-bottom: 2px solid #f0f0f0; padding-bottom: 8px;">
									Documentação
								</farm-typography>
								
								<div style="display: grid; gap: 16px;">
									<div style="display: flex; align-items: center; gap: 8px;">
										<farm-typography weight="500">Upload de documentos</farm-typography>
										<farm-tooltip placement="bottom-right" :fluid="true">
											<template v-slot:activator>
												<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
											</template>
											Formatos aceitos: PDF, JPG, PNG. Tamanho máximo: 5MB por arquivo. 
											Documentos: RG, CPF, Comprovante de residência (até 3 meses), Comprovante de renda.
										</farm-tooltip>
									</div>
									
									<div style="display: flex; align-items: center; gap: 8px;">
										<farm-typography weight="500">Termo de aceite</farm-typography>
										<farm-tooltip placement="top-center">
											<template v-slot:activator>
												<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
											</template>
											Leia e aceite os termos de tratamento de dados pessoais conforme LGPD.
										</farm-tooltip>
									</div>
								</div>
							</div>
							
							<!-- Seção 4: Configurações Adicionais -->
							<div style="margin-bottom: 32px;">
								<farm-typography tag="h3" size="lg" color="black" weight="600" style="margin-bottom: 16px; border-bottom: 2px solid #f0f0f0; padding-bottom: 8px;">
									Configurações Adicionais
								</farm-typography>
								
								<div style="display: grid; gap: 16px;">
									<div style="display: flex; align-items: center; gap: 8px;">
										<farm-typography weight="500">Perfil de risco</farm-typography>
										<farm-tooltip placement="top-center" :fluid="true">
											<template v-slot:activator>
												<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
											</template>
											Conservador: baixo risco, Moderado: risco médio, Arrojado: alto risco. Seu perfil determina os produtos disponíveis.
										</farm-tooltip>
									</div>
									
									<div style="display: flex; align-items: center; gap: 8px;">
										<farm-typography weight="500">Reinvestimento automático</farm-typography>
										<farm-tooltip placement="bottom-left">
											<template v-slot:activator>
												<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
											</template>
											Ative para reinvestir automaticamente os rendimentos no mesmo produto.
										</farm-tooltip>
									</div>
									
									<div style="display: flex; align-items: center; gap: 8px;">
										<farm-typography weight="500">Notificações por email</farm-typography>
										<farm-tooltip placement="top-right">
											<template v-slot:activator>
												<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
											</template>
											Receba avisos sobre vencimentos, rendimentos e oportunidades de investimento.
										</farm-tooltip>
									</div>
								</div>
							</div>
							
							<!-- Seção 5: Informações Legais -->
							<div style="margin-bottom: 32px;">
								<farm-typography tag="h3" size="lg" color="black" weight="600" style="margin-bottom: 16px; border-bottom: 2px solid #f0f0f0; padding-bottom: 8px;">
									Informações Legais
								</farm-typography>
								
								<div style="display: grid; gap: 16px;">
									<div style="display: flex; align-items: center; gap: 8px;">
										<farm-typography weight="500">Declaração de origem</farm-typography>
										<farm-tooltip placement="bottom-center" :fluid="true">
											<template v-slot:activator>
												<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
											</template>
											Conforme regulamentação do Banco Central, é obrigatório declarar a origem dos recursos para investimentos acima de R$ 10.000,00.
										</farm-tooltip>
									</div>
									
									<div style="display: flex; align-items: center; gap: 8px;">
										<farm-typography weight="500">Compliance</farm-typography>
										<farm-tooltip placement="top-left">
											<template v-slot:activator>
												<farm-icon size="sm" color="gray" style="cursor: help;">help-circle</farm-icon>
											</template>
											Todas as operações são monitoradas para garantir conformidade com as regulamentações vigentes.
										</farm-tooltip>
									</div>
								</div>
							</div>
						</div>
					</div>
				</template>
				
				<template v-slot:footer>
					<div style="padding: 20px; border-top: 1px solid #e0e0e0; background: white; display: flex; justify-content: flex-end;">
						<farm-btn color="primary" outlined @click="showModal = false">
							Fechar
						</farm-btn>
					</div>
				</template>
			</farm-modal>
		</div>
	`,
});
