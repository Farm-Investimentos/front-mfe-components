<template>
    <header>
        <v-icon v-if="iconTitle" class="dialog-header__title-icon">{{ 'mdi-' + iconTitle }}</v-icon>
        {{ title }}

        <v-icon
            role="button"
            title="Fechar"
            class="dialog-header__close-icon"
            @click="onClose"
            color="secondary"
        >
            mdi-close-thick
        </v-icon>
    </header>
</template>
<script>
import { VIcon } from 'vuetify/lib/components/VIcon';
export default {
    props: {
        title: {
            type: String,
            default: '',
            required: true,
        },
        iconTitle: {
            type: String,
            default: null,
            required: false,
        },
    },
    components: {
        VIcon,
    },
    methods: {
        onClose() {
            this.$emit('onClose', {});
        },
    },
};
</script>
