<template>
	<section ref="container" id="droparea-container">
		<input
			type="file"
			name="file"
			multiple
			ref="upload"
			:accept="acceptedFileTypes"
			@change="fileChange($event.target.files)"
		/>
		<div v-if="!hasFiles" class="selectfile-container">
			<farm-icon class="upload-icon" color="primary" size="lg" @click="addMoreFiles">
				cloud-upload-outline
			</farm-icon>
			<farm-subtitle :type="2" variation="regular" color="primary">
				Arraste e solte o arquivo <br/> ou clique aqui
			</farm-subtitle>
		</div>

		<ul
			v-if="downloadFiles.length"
			class="listFilesStyled listFilesStyled--download"
			:class="{
				'listFilesStyled--margin-bottom': files.length === 0,
			}"
		>
			<li class="itemFilesStyled" v-for="file in downloadFiles" :key="file.id">
				<div class="itemFilesContentStyled">
					<div class="fileDocumentStyled">
						<farm-icon color="black" variation="50" size="sm">attachment</farm-icon>
					</div>
					<div>
						<farm-bodysmall  color="black" color-variation="50">
							Arquivo selecionado: {{ file.name }} ({{ sizeOf(file.size) }})
						</farm-bodysmall>
					</div>
				</div>
				<div class="itemFilesContentButtonStyled">
					<farm-btn
						plain
						color="black"
						variation="50"
						class="download-button"
						title="Baixar Arquivo"
						@click.prevent="onDownload(file.id)"
					>
						<farm-icon class="download-button__icon mr-sm-3" size="md"
							>download</farm-icon
						>

						<span class="download-button__text">Baixar Arquivo</span>
					</farm-btn>
				</div>
			</li>
		</ul>

		<ul class="listFilesStyled" v-if="files.length > 0">
			<li class="itemFilesStyled" v-for="(file, index) in files" :key="index">
				<div class="itemFilesContentStyled">
					
					<div class="fileDocumentStyled">
						<farm-icon color="black" variation="50" size="sm">attachment</farm-icon>
					</div>
					<div>
						<farm-bodysmall  color="black" color-variation="50">
							Arquivo selecionado: {{ file.name }} ({{ sizeOf(file.size) }})
						</farm-bodysmall>
					</div>
				</div>
				<div class="itemFilesContentButtonStyled">
					<farm-btn
						icon
						title="Remover"
						color="black"
						variation="50"
						size="md"
						@click.prevent="remove(index)"
					>
						<farm-icon size="md">close</farm-icon>
					</farm-btn>
					<farm-icon size="md" color="neutral" v-if="file.success">check</farm-icon>
				</div>
			</li>
		</ul>
		<farm-btn
			v-if="canAddMoreFiles && hasFiles"
			outlined
			title="Escolher Arquivo"
			class="farm-btn--responsive"
			:disabled="disabledButton"
			@click="addMoreFiles"
		>
			Escolher Arquivo
		</farm-btn>
	</section>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue';
import { sizeOf } from '@farm-investimentos/front-mfe-libs-ts';

export type DownloadFiles = {
	id: number | string;
	name: string;
	size: number;
};

export default Vue.extend({
	name: 'farm-multiple-filepicker',

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
			default: 0,
		},
		/**
		 * Max files number
		 */
		maxFilesNumber: {
			type: Number,
			default: 0,
		},
		/**
		 * File List from files who could be download
		 */
		downloadFiles: {
			type: Array as PropType<Array<DownloadFiles>>,
			default: () => [],
		},
	},
	data() {
		return {
			dropArea: null,
			files: [],
			sizeOf,
		};
	},
	computed: {
		hasFiles(): boolean {
			return this.files.length > 0 || this.downloadFiles.length > 0;
		},
		canAddMoreFiles(): boolean {
			return this.filesLength < this.maxFilesNumber;
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
			this.files = [];
		},
		fileChange(fileList): void {
			this.files.push(...fileList);
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
	watch: {
		files(newValue) {
			if (newValue.length === 0 && this.downloadFiles.length === 0) {
				this.$emit('onFileChange', newValue);
				return;
			}
			const invalidTypeArray = newValue.filter(file => {
				const type = file.type;

				return (
					this.acceptedFileTypes !== '*' &&
					(this.acceptedFileTypes.indexOf(file.type) === -1 || !type)
				);
			});

			if (invalidTypeArray.length > 0) {
				const validTypeArray = newValue.filter(file => {
					const type = file.type;
					if (this.acceptedFileTypes.indexOf(file.type) === -1 || !type) {
						return false;
					}
					return true;
				});
				this.$emit('onInvalidFiles', [...invalidTypeArray]);
				this.files = validTypeArray;
				return;
			}

			if (
				!!this.maxFilesNumber &&
				newValue.length + this.downloadFiles.length > this.maxFilesNumber
			) {
				this.files = newValue.slice(0, this.maxFilesNumber - this.downloadFiles.length);
				this.$emit('onMaxFilesNumberWarning');
				return;
			}

			if (this.maxFileSize > 0) {
				const files = newValue.filter(file => {
					const sizeInMB = file.size / (1024 * 1024);
					if (sizeInMB > this.maxFileSize) return true;

					return false;
				});
				if (files.length > 0) {
					this.files = newValue.filter(file => {
						const sizeInMB = file.size / (1024 * 1024);
						if (sizeInMB < this.maxFileSize) return true;

						return false;
					});

					this.$emit('onMaxFileSizeWarning');
					return;
				}
			}
			this.$emit('onFileChange', this.files);
		},
	},
});
</script>
<style scoped lang="scss">
@import './MultipleFilePicker.scss';
</style>
