<template>
	<section ref="container" id="droparea-container">
		<input
			type="file"
			name="file"
			:class="{
				'hidden-input': hasFiles,
			}"
			@change="fileChange($event.target.files)"
			:accept="acceptedFileTypes"
			multiple
			ref="upload"
		/>
		<div v-if="!hasFiles" class="selectfile-container">
			<farm-icon color="secondary" size="lg">cloud-upload</farm-icon>
			<p>Clique para selecionar ou arraste o arquivo aqui</p>
		</div>

		<ul
			class="listFilesStyled listFilesStyled--download"
			:class="{
				'listFilesStyled--margin-bottom': files.length === 0,
			}"
			v-if="downloadFiles.length"
		>
			<li class="itemFilesStyled" v-for="file in downloadFiles" :key="file.id">
				<div class="itemFilesContentStyled">
					<div class="fileDocumentStyled">
						<farm-icon color="white" size="md">file</farm-icon>
					</div>
					<div>
						<span clas="textStyled">
							Arquivo selecionado: {{ file.name }} ({{ sizeOf(file.size) }})
						</span>
					</div>
				</div>
				<div class="itemFilesContentButtonStyled">
					<farm-btn
						class="download-button"
						plain
						title="Baixar Arquivo"
						@click.prevent="onDownload(file.id)"
					>
						<farm-icon class="download-button__icon mr-sm-3" size="md"
							>download</farm-icon
						>

						<span class="download-button__text"> Baixar Arquivo </span>
					</farm-btn>
				</div>
			</li>
		</ul>

		<ul class="listFilesStyled" v-if="files.length > 0">
			<li class="itemFilesStyled" v-for="(file, index) in files" :key="index">
				<div class="itemFilesContentStyled">
					<div class="fileDocumentStyled">
						<farm-icon color="white" size="md">file</farm-icon>
					</div>
					<div>
						<span clas="textStyled">
							Arquivo selecionado: {{ file.name }} ({{ sizeOf(file.size) }})
						</span>
					</div>
				</div>
				<div class="itemFilesContentButtonStyled">
					<span
						class="mdi mdi-close"
						aria-role="button"
						title="Remover"
						@click.prevent="remove(index)"
					></span>

					<span class="mdi mdi-check" v-if="file.success"></span>
				</div>
			</li>
		</ul>

		<!-- 	<p v-if="maxSizeReach" v-html="maxSizeReachMsg"></p> -->

		<farm-btn
			depressed
			outlined
			color="gray"
			class="farm-btn--responsive"
			:disabled="disabledButton"
			v-if="hasFiles"
			@click="addMoreFiles"
		>
			Escolher outro
		</farm-btn>
	</section>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import DefaultButton from '../Buttons/DefaultButton';
import Icon from '../Icon';
import { VIcon } from 'vuetify/lib/components/VIcon';
import { sizeOf } from '@farm-investimentos/front-mfe-libs-ts';

export type DownloadFiles = {
	id: number | string;
	name: string;
	size: number;
};

export default Vue.extend({
	components: {
		'farm-btn': DefaultButton,
		VIcon,
		'farm-icon': Icon,
	},
	props: {
		/*
		 * Accepted file types
		 */
		acceptedFileTypes: {
			type: String,
			default: '*',
		},
		/**
		 * Max file size (in MB)
		 */
		maxFileSize: {
			default: null,
		},
		/**
		 * Max files number
		 */
		maxFilesNumber: {
			type: Number,
			default: 0,
		},
		/**
		 * Max files number
		 */
		downloadFiles: {
			type: Array as PropType<Array<DownloadFiles>>,
			default: () => [],
		},
	},
	data() {
		return {
			selectedFile: null,
			dropArea: null,
			/* maxSizeReach: false, */
			files: [],
			sizeOf,
		};
	},
	computed: {
		/* 	maxSizeReachMsg(): string {
			return `Arquivo ultrapassou o tamanho máximo de ${this.maxFileSize}MB`;
		}, */
		hasFiles(): boolean {
			return this.files.length > 0 || this.downloadFiles.length;
		},
		filesLength(): number {
			return this.files.length + this.downloadFiles.length;
		},
		disabledButton(): boolean {
			if (this.maxFilesNumber === 0) return false;
			return this.filesLength >= this.maxFilesNumber;
		},
	},
	mounted() {
		this.dropArea = this.$refs.container;
		this.addListeners();
	},
	methods: {
		addMoreFiles(): void {
			this.$refs.container.querySelector('input').click();
		},
		reset(): void {
			this.$refs.container.querySelector('input').value = '';
			this.$emit('onReset');
			this.maxSizeReach = false;
			this.selectedFile = null;
		},
		fileChange(fileList): void {
			this.maxSizeReach = false;
			/* 	if (!fileList.length || fileList.length > 1) return; */

			if (this.maxFileSize) {
				const sizeInMB = fileList[0].size / (1024 * 1024);

				if (sizeInMB > this.maxFileSize) {
					this.maxSizeReach = true;
					return;
				}
			}
			this.selectedFile = fileList[0];
			this.files.push(...fileList);
			this.$emit('onFileChange', this.selectedFile);
		},
		handlerFunctionHighlight(): void {
			this.dropArea.classList.add('highlight');
		},
		handlerFunctionUnhighlight(): void {
			this.dropArea.classList.remove('highlight');
		},
		addListeners(): void {
			this.dropArea.addEventListener('dragenter', this.handlerFunctionHighlight, false);
			this.dropArea.addEventListener('dragleave', this.handlerFunctionUnhighlight, false);
			this.dropArea.addEventListener('dragover', this.handlerFunctionHighlight, false);
			this.dropArea.addEventListener('drop', this.handlerFunctionUnhighlight, false);
		},

		remove(index: number): void {
			if (this.files.length === 1) this.reset();
			this.files.splice(index, 1);
		},

		onDownload(id: number): void {
			this.$emit('onDownload', id);
		},
	},
});
</script>
<style scoped lang="scss">
@import './MultipleFilePicker.scss';
</style>
