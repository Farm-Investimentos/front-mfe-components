import Collapsible from './Collapsible';
import baseThemeColors from '../../configurations/_theme-colors-base.scss';
const colors = Object.keys(baseThemeColors);
const variations = ['', 'darken', 'lighten'];

export default {
	title: 'Surfaces/Collapsible',
	components: Collapsible,
	parameters: {
		docs: {
			description: {
				component: `Collapsible<br />selector: <em>farm-collapsible</em>`,
			},
		},
		viewMode: 'docs',
	},
};

export const Primary = () => ({
	template: '<farm-collapsible title="">collapsible content</farm-collapsible>',
});

export const Title = () => ({
	template: '<farm-collapsible title="Title">collapsible content</farm-collapsible>',
});

export const Icon = () => ({
	template:
		'<farm-collapsible icon="clipboard" title="With Icon">collapsible content</farm-collapsible>',
});

export const ColorIcons = () => ({
	data() {
		return {
			colors,
		};
	},
	template: `
	<farm-row>
		<farm-col cols="12" md="4"  v-for="color in colors" :key="'color_' + color">
			<h4 style="margin:15px">{{ color }}</h4>
			<farm-collapsible
				style="margin-top:15px"
				icon="clipboard"
				title="color icon"
				:colorIcon="color"
			>
			</farm-collapsible>
		</farm-col>
	</farm-row>`,
});

export const Export = () => ({
	data() {
		return {
			clicked: false,
		};
	},
	template: `<div>
		clicked: {{clicked}} <farm-collapsible icon="clipboard" title="With Button" :hasButton="true" @onClick="value => clicked = !clicked" >collapsible content</farm-collapsible>
		</div>`,
});

export const ExportDisabled = () => ({
	data() {
		return {
			clicked: false,
		};
	},
	template: `<div>
		clicked: {{clicked}} <farm-collapsible :disabledButton="true" icon="clipboard" title="With Button" :hasButton="true"  @onClick="value => clicked = !clicked" >collapsible content</farm-collapsible>
		</div>`,
});

export const Opened = () => ({
	data() {
		return {
			isOpen: true,
		};
	},
	template: `<div>
        status: {{ isOpen }}
        <farm-collapsible
            title=""
            :open="isOpen"
            @open="value => isOpen = value"
        >
            collapsible content
        </farm-collapsible>
    </div>`,
});

export const ColorsChips = () => ({
	data() {
		return {
			colors,
			variations,
		};
	},
	template: `
	<farm-row>
		<farm-col cols="12" md="4"  v-for="color in colors" :key="'color_' + color">
			<h4 style="margin:15px">{{ color }}</h4>
			<farm-collapsible
				style="margin-top:15px"
				v-for="variation in variations"
				icon="plus"
				textChip="chip"
				title="color chip"
				:key="color + '_' + variation"
				:showChip="true"
				:colorChip="color"
				:variation="variation"
			>
			</farm-collapsible>
		</farm-col>
	</farm-row>`,
});

export const ColorsOutlinedChips = () => ({
	data() {
		return {
			colors,
			variations,
		};
	},
	template: `
	<farm-row>
		<farm-col cols="12" md="4"  v-for="color in colors" :key="'color_' + color">
			<h4 style="margin:15px">{{ color }}</h4>
			<farm-collapsible
				style="margin-top:15px"
				v-for="variation in variations"
				icon="plus"
				textChip="chip"
				title="color chip"
				:key="color + '_' + variation"
				:showChip="true"
				:outlined="true"
				:colorChip="color"
				:variation="variation"
			>
			</farm-collapsible>
		</farm-col>
	</farm-row>`,
});

export const Dense = () => ({
	template:
		'<farm-collapsible icon="plus" title="With Icon" textChip="chip" dense showChip>collapsible content</farm-collapsible>',
});

export const Custom = () => ({
	template: `
		<farm-collapsible title="" custom open>
		<template #custom>
			<farm-row justify="space-between" align="center">
			<farm-col md="6">
			<farm-caption>caption</farm-caption>
			</farm-col>
			<farm-col md="6" justify="end"
			align="end">
			<farm-btn

			>
				custom
			</farm-btn>
			</farm-col>
			</farm-row>
		</template>
		collapsible content
		</farm-collapsible>
		`,
});

export const CustomHeaderContent = () => ({
	template: `
		<farm-collapsible title="" custom-header>
		<template #header-content>
			<farm-row>
				<farm-col md="12">
					<farm-bodytext color="success">initial text</farm-bodytext>
				</farm-col>
			</farm-row>

			<farm-row class="pt-4">
				<farm-col class="collapsible-stories-class-with-line">
					<farm-caption variation="semiBold"
						>text here</farm-caption
					>
					123455
				</farm-col>
				<farm-col class="collapsible-stories-class-with-line">
					<farm-caption variation="semiBold"
						>label here</farm-caption
					>

					<farm-caption variation="medium" class="my-1">R$ 1000</farm-caption>
				</farm-col>

				<farm-col class="collapsible-stories-class-with-line">
					<farm-caption variation="semiBold">LABEL HERE</farm-caption>

					<farm-caption		 variation="medium" class="my-1">R$ 1000</farm-caption>
				</farm-col>

				<farm-col>
					<farm-caption variation="semiBold"
						>Label here (text here)</farm-caption
					>
					<farm-caption variation="medium" class="my-1">value here</farm-caption>
				</farm-col>
		</farm-row>
		</template>

		<farm-bodytext >collapsible content</farm-bodytext>
		</farm-collapsible>
		`,
});

export const customBodyContent = () => ({
	template: `
		<farm-collapsible title="simple title"  custom-body>
		<farm-row extraDecrease style="background-color:#f5f5f5;" class="px-4">
		<farm-col class="collapsible-stories-class-with-line">
			<farm-caption variation="semiBold"
				>text here</farm-caption
			>
			123455
		</farm-col>
		<farm-col class="collapsible-stories-class-with-line">
			<farm-caption variation="semiBold"
				>label here</farm-caption
			>

			<farm-caption variation="medium" class="my-1">R$ 1000</farm-caption>
		</farm-col>

		<farm-col class="collapsible-stories-class-with-line">
			<farm-caption variation="semiBold">LABEL HERE</farm-caption>

			<farm-caption		 variation="medium" class="my-1">R$ 1000</farm-caption>
		</farm-col>

		<farm-col>
			<farm-caption variation="semiBold"
				>Label here (text here)</farm-caption
			>
			<farm-caption variation="medium" class="my-1">value here</farm-caption>
		</farm-col>
		</farm-row>
		</farm-collapsible>
		`,
});

export const CustomHeaderAndBodyContent = () => ({
	template: `
		<farm-collapsible title="" custom-header custom-body>

		<template #header-content>
			<div class="mb-4">
				<farm-row>
					<farm-col md="12">
						<farm-bodytext color="success">initial text</farm-bodytext>
					</farm-col>
				</farm-row>

				<farm-row class="pt-4">
					<farm-col class="collapsible-stories-class-with-line">
						<farm-caption variation="semiBold"
							>text here</farm-caption
						>
						123455
					</farm-col>
					<farm-col class="collapsible-stories-class-with-line">
						<farm-caption variation="semiBold"
							>label here</farm-caption
						>

						<farm-caption variation="medium" class="my-1">R$ 1000</farm-caption>
					</farm-col>

					<farm-col class="collapsible-stories-class-with-line">
						<farm-caption variation="semiBold">LABEL HERE</farm-caption>

						<farm-caption		 variation="medium" class="my-1">R$ 1000</farm-caption>
					</farm-col>

					<farm-col>
						<farm-caption variation="semiBold"
							>Label here (text here)</farm-caption
						>
						<farm-caption variation="medium" class="my-1">value here</farm-caption>
					</farm-col>
				</farm-row>
			</div>
		</template>

			<farm-row extraDecrease style="background-color:#f5f5f5;" class="mt-5 px-2">
				<farm-col class="collapsible-stories-class-with-line">
					<farm-caption variation="semiBold"
						>text here</farm-caption
					>
					123455
				</farm-col>
				<farm-col class="collapsible-stories-class-with-line">
					<farm-caption variation="semiBold"
						>label here</farm-caption
					>

					<farm-caption variation="medium" class="my-1">R$ 1000</farm-caption>
				</farm-col>

				<farm-col class="collapsible-stories-class-with-line">
					<farm-caption variation="semiBold">LABEL HERE</farm-caption>

					<farm-caption		 variation="medium" class="my-1">R$ 1000</farm-caption>
				</farm-col>

				<farm-col>
					<farm-caption variation="semiBold"
						>Label here (text here)</farm-caption
					>
					<farm-caption variation="medium" class="my-1">value here</farm-caption>
				</farm-col>
			</farm-row>
		</farm-collapsible>
		`,
});

export const Plain = () => ({
	template: `
		<farm-collapsible title="" custom-header plain>
		<template #header-content>
			<farm-row>
				<farm-col md="12">
					<farm-bodytext color="success">initial text</farm-bodytext>
				</farm-col>
			</farm-row>

			<farm-row class="pt-4">
				<farm-col class="collapsible-stories-class-with-line">
					<farm-caption variation="semiBold"
						>text here</farm-caption
					>
					123455
				</farm-col>
				<farm-col class="collapsible-stories-class-with-line">
					<farm-caption variation="semiBold"
						>label here</farm-caption
					>

					<farm-caption variation="medium" class="my-1">R$ 1000</farm-caption>
				</farm-col>

				<farm-col class="collapsible-stories-class-with-line">
					<farm-caption variation="semiBold">LABEL HERE</farm-caption>

					<farm-caption		 variation="medium" class="my-1">R$ 1000</farm-caption>
				</farm-col>

				<farm-col>
					<farm-caption variation="semiBold"
						>Label here (text here)</farm-caption
					>
					<farm-caption variation="medium" class="my-1">value here</farm-caption>
				</farm-col>
		</farm-row>
		</template>

		<farm-bodytext >collapsible content</farm-bodytext>
		</farm-collapsible>
		`,
});

Primary.storyName = 'Basic';
Title.storyName = 'Title';
Icon.storyName = 'Icon';
Export.storyName = 'Export';
Opened.storyName = 'Opened';
ColorIcons.storyName = 'Icon Colors';
ColorsChips.storyName = 'Chip Colors';
ColorsOutlinedChips.storyName = 'Outlined';
Dense.storyName = 'Dense';
