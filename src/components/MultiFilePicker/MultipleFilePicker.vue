<template>
	<div
		class="filePickerStyled"
		:class="{
			'filePickerStyled--dropActive': $refs.upload && $refs.upload.dropActive,
			'filePickerStyled--flex': flag,
		}"
	>
		<section ref="container" id="droparea-container">
			<input
				type="file"
				name="file"
				@change="fileChange($event.target.files)"
				:accept="acceptedFileTypes"
				multiple
			/>
			<div v-if="!selectedFile" class="selectfile-container">
				<v-icon color="secondary">mdi-cloud-upload</v-icon>
				<p>Clique para selecionar ou arraste o arquivo aqui</p>
			</div>
			<ul class="listFilesStyled" v-if="files.length">
				<li class="itemFilesStyled" v-for="file in files" :key="file.id">
					<div class="itemFilesContentStyled">
						<div class="fileDocumentStyled">
							<v-icon class="mdi mdi-file"></v-icon>
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
							@click.prevent="remove(file)"
						></span>
						<span
							class="mdi mdi-loading mdi-spin"
							v-if="file.active && !file.progress !== '0.00' && !file.success"
						></span>
						<span class="mdi mdi-check" v-if="file.success"></span>
					</div>
				</li>
			</ul>

			<div class="d-flex justify-center">
				<div
					class="contentButtonsStyled"
					v-if="files.length > 0 || downloadFiles.length > 0"
				>
					<farm-btn-confirm
						@click="openFileInput"
						:disabled="filesLength >= maxFilesNumber"
						title="Escolha outro"
						class="v-btn--another"
						outlined
						dense
					>
						Escolha Outro
					</farm-btn-confirm>
				</div>
			</div>
		</section>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import { sizeOf } from '@farm-investimentos/front-mfe-libs-ts';
import DefaultButton from '../Buttons/DefaultButton';
import { VIcon } from 'vuetify/lib/components/VIcon';
export default Vue.extend({
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

		downloadFiles: {
			type: Array as PropType<Array<File>>,
			default: () => [],
		},
	},
	data() {
		return {
			files: [],
			selectedFile: null,
			dropArea: null,
			maxSizeReach: false,
			sizeOf,
		};
	},
	computed: {
		maxSizeReachMsg() {
			return `Arquivo ultrapassou o tamanho máximo de ${this.maxFileSize}MB`;
		},
	},
	mounted() {
		this.dropArea = this.$refs.container;
		this.addListeners();
	},
	methods: {
		reset() {
			this.$refs.container.querySelector('input').value = '';
			this.$emit('onReset');
			this.maxSizeReach = false;
			this.selectedFile = null;
		},
		fileChange(fileList) {
			console.log('file', fileList);
			this.maxSizeReach = false;
			if (!fileList.length || fileList.length > 1) return;

			if (this.maxFileSize) {
				const sizeInMB = fileList[0].size / (1024 * 1024);

				if (sizeInMB > this.maxFileSize) {
					this.maxSizeReach = true;
					return;
				}
			}
			this.selectedFile = fileList[0];
			this.files = [...this.files, ...fileList];
			console.log('files', this.files);
			this.$emit('onFileChange', this.selectedFile);
		},
		handlerFunctionHighlight() {
			this.dropArea.classList.add('highlight');
		},
		handlerFunctionUnhighlight() {
			this.dropArea.classList.remove('highlight');
		},
		addListeners() {
			this.dropArea.addEventListener('dragenter', this.handlerFunctionHighlight, false);
			this.dropArea.addEventListener('dragleave', this.handlerFunctionUnhighlight, false);
			this.dropArea.addEventListener('dragover', this.handlerFunctionHighlight, false);
			this.dropArea.addEventListener('drop', this.handlerFunctionUnhighlight, false);
		},
		openFileInput(): void {
			const input = this.$refs.upload.$el.querySelector(`#${this.id}`) as HTMLInputElement;
			input.click();
		},
	},
	components: {
		'farm-btn': DefaultButton,
		VIcon,
	},
});
</script>
<style scoped lang="scss">
@import './MultipleFilePicker.scss';
</style>
