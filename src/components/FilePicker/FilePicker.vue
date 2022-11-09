<template>
	<section ref="container" id="droparea-container">
		<input
			type="file"
			name="file"
			:accept="acceptedFileTypes"
			@change="fileChange($event.target.files)"
		/>
		<div v-if="!selectedFile" class="selectfile-container">
			<farm-icon @click="triggerClick">cloud-upload</farm-icon>
			<p>Clique para selecionar ou arraste o arquivo aqui</p>
		</div>
		<div v-if="selectedFile || maxSizeReach" class="reset-container">
			<div v-if="selectedFile">
				<farm-icon>file</farm-icon> Arquivo selecionado: {{ selectedFile.name }} ({{
					Math.floor(selectedFile.size / 1024)
				}}kB)
			</div>

			<p v-if="maxSizeReach" v-html="maxSizeReachMsg"></p>

			<farm-btn outlined class="farm-btn--responsive" title="Escolher outro" @click="reset">
				Escolher outro
			</farm-btn>
		</div>
	</section>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'farm-filepicker',
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
	},
	data() {
		return {
			selectedFile: null,
			dropArea: null,
			maxSizeReach: false,
		};
	},
	computed: {
		maxSizeReachMsg() {
			return `Arquivo ultrapassou o tamanho máximo de ${this.maxFileSize}MB`;
		},
		inputEl() {
			return this.$refs.container.querySelector('input');
		}
	},
	mounted() {
		this.dropArea = this.$refs.container;
		this.addListeners();
	},
	methods: {
		reset() {
			this.inputEl.value = '';
			this.$emit('onReset');
			this.maxSizeReach = false;
			this.selectedFile = null;
		},
		fileChange(fileList: Array<File>) {
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
		triggerClick() {
			this.inputEl.click();
		}
	},
});
</script>
<style scoped lang="scss">
@import './FilePicker.scss';
</style>
