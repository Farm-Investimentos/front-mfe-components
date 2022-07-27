<template>
	<div
		class="filePickerStyled"
		:class="{
			'filePickerStyled--dropActive': $refs.upload && $refs.upload.dropActive,
			'filePickerStyled--flex': filesLength,
		}"
	>
		<section ref="container" id="droparea-container">
			<input
				:class="{
					'hidden-input-file': filesLength,
				}"
				type="file"
				name="file"
				@change="fileChange($event.target.files)"
				:accept="acceptedFileTypes"
				multiple
				ref="upload"
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
						color="secondary"
						:disabled="filesLength >= maxFilesNumber"
						title="Escolha outro"
						class="v-btn--another"
						outlined
						dense
						@click="openFileInput"
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
	components: {
		'farm-btn': DefaultButton,
		VIcon,
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
	methods: {
		reset() {
			this.$refs.container.querySelector('input').value = '';
			this.$emit('onReset');
			this.maxSizeReach = false;
			this.selectedFile = null;
		},
		fileChange(fileList) {
			this.selectedFile = fileList[0];
			this.files = [...this.files, ...fileList];
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
			const input = this.$refs.upload as HTMLInputElement;
			input.click();
		},

		remove(file: File): void {
			this.files = this.files.filter(item => item.name !== file.name);
		},

		onDownload(id: number): void {
			this.$emit('onDownload', id);
		},
	},
	computed: {
		filesLength() {
			return this.files.length + this.downloadFiles.length;
		},
	},
	watch: {
		files(newValue) {
			/* if (newValue.length === 0 && this.downloadFiles.length === 0) {
				this.flag = true;
				this.$emit('updateFiles', newValue);
				return;
			}
			const invalidTypeArray = newValue.filter(file => {
				if (this.acceptTypes.indexOf(file.type) === -1) {
					return true;
				}
				return false;
			});
			if (invalidTypeArray.length > 0) {
				const validTypeArray = newValue.filter(file => {
					if (this.acceptTypes.indexOf(file.type) === -1) {
						return false;
					}
					return true;
				});

				this.files = validTypeArray;
				this.$emit('updateFiles', this.files);
				return;
			}

			this.flag = false;
			this.hiddenButtonSend = false;
			if (this.buttonFileLoading) {
				const allLoading = newValue.filter(item => item.success === true);
				if (allLoading.length > 0) {
					this.buttonFileLoading = !(allLoading.length === newValue.length);
					this.hiddenButtonSend = allLoading.length === newValue.length;
				}
			}
			if (
				!!this.maxFilesNumber &&
				newValue.length + this.downloadFiles.length > this.maxFilesNumber
			) {
				this.files = newValue.slice(0, this.maxFilesNumber - this.downloadFiles.length);
				this.$emit('onMaxFilesNumberWarning');
			}
			if (this.maxFileSize > 0) {
				const files = newValue.filter(file => {
					if (file.size > this.maxFileSize) return true;

					return false;
				});

				if (files.length > 0) {
					this.files = newValue.filter(file => {
						if (file.size < this.maxFileSize) return true;

						return false;
					});

					this.$emit('onMaxFileSizeWarning');
				}
			}
			this.$emit('updateFiles', this.files); */
		},
	},
	mounted() {
		this.dropArea = this.$refs.container;
		this.addListeners();
	},
});
</script>
<style scoped lang="scss">
@import './MultipleFilePicker.scss';
</style>
