<template>
    <div class="v-dialog__footer d-flex flex-column flex-sm-row justify-end">
        <v-btn @click="$emit('onClose')" v-if="hasCancel" color="primary" outlined>
            {{ closeLabel }}
        </v-btn>
        <v-btn
            v-for="button in extraButtons"
            :key="button.label"
            @click="$emit(button.listener ? button.listener : '')"
            :color="button.color"
            :outlined="button.outlined"
            :depressed="button.outlined"
            :disabled="button.disabled"
            class="ml-sm-3 mt-3 mt-sm-0"
        >
            {{ button.label }}
        </v-btn>
        <v-btn
            @click="$emit('onConfirm')"
            :color="confirmColor"
            v-if="hasConfirm"
            :disabled="isConfirmDisabled"
            class="ml-sm-3 mt-3 mt-sm-0"
        >
            {{ confirmLabel }}
        </v-btn>
    </div>
</template>

<script>
import { VBtn } from 'vuetify/lib/components/VBtn';
export default {
    name: 'DialogFooter',
    components: {
        VBtn,
    },
    props: {
        confirmLabel: {
            type: String,
            default: 'Confirmar',
        },
        closeLabel: {
            type: String,
            default: 'Fechar',
        },
        hasConfirm: {
            type: Boolean,
            default: true,
        },
        hasCancel: {
            type: Boolean,
            default: true,
        },
        confirmColor: {
            type: String,
            default: 'secondary',
        },
        isConfirmDisabled: {
            type: Boolean,
            default: false,
        },
        extraButtons: {
            type: Array,
            default: () => [],
        },
    },
    methods: {},
};
</script>
