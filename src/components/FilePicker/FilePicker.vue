<template>
    <section ref="container" id="droparea-container">
        <input
            type="file"
            name="file"
            @change="fileChange($event.target.files)"
            :accept="acceptedFileTypes"
        />
        <div v-if="!selectedFile" class="selectfile-container">
            <v-icon color="secondary">mdi-cloud-upload</v-icon>
            <p>Clique para selecionar ou arraste o arquivo aqui</p>
        </div>
        <div v-if="selectedFile" class="reset-container">
            <div>
                <v-icon>mdi-file</v-icon> Arquivo selecionado: {{ selectedFile.name }} ({{
                    Math.floor(selectedFile.size / 1024)
                }}kB)
            </div>

            <v-btn depressed outlined color="secondary" class="v-btn-responsive" @click="reset"
                >Escolher outro</v-btn
            >
        </div>
    </section>
</template>
<script>
import { VBtn } from 'vuetify/lib/components/VBtn';
import { VIcon } from 'vuetify/lib/components/VIcon';
export default {
    props: {
        acceptedFileTypes: {
            type: String,
            default: '*',
        },
    },
    data() {
        return {
            selectedFile: null,
            dropArea: null,
        };
    },
    mounted() {
        this.dropArea = this.$refs.container;
        this.addListeners();
    },
    methods: {
        reset() {
            this.$refs.container.querySelector('input').value = '';
            this.$emit('onReset');
            this.selectedFile = null;
        },
        fileChange(fileList) {
            if (!fileList.length || fileList.length > 1) return;
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
    },
    components: {
        VBtn,
        VIcon,
    },
};
</script>
<style scoped lang="scss">
@import './FilePicker.scss';
</style>