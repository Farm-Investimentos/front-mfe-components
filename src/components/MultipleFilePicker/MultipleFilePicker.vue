<template>
	<div
		class="filePickerStyled"
		:class="{
			'filePickerStyled--dropActive': $refs.upload && $refs.upload.dropActive,
			'filePickerStyled--flex': flag,
		}"
	>
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
						<farm-icon color="white">file</farm-icon>
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
						<span class="mdi mdi-download mr-sm-3"></span>
						<span class="download-button__text"> Baixar Arquivo </span>
					</farm-btn>
				</div>
			</li>
		</ul>
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
						v-if="file.active == false && !file.success"
					></span>
					<span
						class="mdi mdi-loading mdi-spin"
						v-if="file.active && !file.progress !== '0.00' && !file.success"
					></span>
					<span class="mdi mdi-check" v-if="file.success"></span>
				</div>
			</li>
		</ul>
		<div>
			<input
				class="fileUpload"
				type="file"
				name="file"
				@change="fileChange($event.target.files)"
				:accept="acceptTypes"
				:multiple="true"
				ref="upload"
			/>

			<div class="iconFileStyled">
				<v-icon color="secondary" large class="mdi mdi-cloud-upload mb-3"></v-icon>
			</div>
		</div>

		<div class="d-flex justify-center">
			<div class="contentButtonsStyled" v-if="files.length > 0 || downloadFiles.length > 0">
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
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { sizeOf } from '@farm-investimentos/front-mfe-libs-ts';

export default Vue.extend({
	name: 'farm-multifilepicker',
	props: {
		downloadFiles: {
			type: Array as PropType<Array<File>>,
			default: () => [],
		},

		idTypeDocument: {
			type: Number,
			required: true,
		},
		idResponsible: {
			type: Number,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
		idProduct: {
			type: Number,
			required: true,
		},
		index: {
			type: Number,
			required: true,
		},
		maxFilesNumber: {
			type: Number,
			default: 0,
		},
		maxFileSize: {
			type: Number,
			default: 0,
		},
		acceptTypes: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			flag: this.downloadFiles.length === 0,
			buttonFileLoading: false,
			hiddenButtonSend: false,
			sizeOf,
			files: [],
			acceptTypesArray: this.acceptTypes.split(','),
		};
	},

	methods: {
		openFileInput(): void {
			const input = this.$refs.upload.$el.querySelector(`#${this.id}`) as HTMLInputElement;
			input.click();
		},

		remove(file: File): void {
			this.$refs.upload.remove(file);
		},

		onDownload(id: number): void {
			this.$emit('onDownload', id);
		},
		fileChange(fileList) {
			this.files.push(fileList);
			console.log(fileList);
		},
	},
	computed: {
		filesLength() {
			return this.files.length + this.downloadFiles.length;
		},
	},
	watch: {
		files(newValue) {
			if (newValue.length === 0 && this.downloadFiles.length === 0) {
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
			this.$emit('updateFiles', this.files);
		},
	},
});
</script>

<style scoped lang="scss">
@import './MultipleFilePicker.scss';
</style>
