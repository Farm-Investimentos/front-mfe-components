<template>
    <v-btn @click="onClick" dense class="v-btn--responsive" outlined title="Exportar">
        <v-icon>mdi-file-export-outline</v-icon>
        Exportar
    </v-btn>
</template>
<script>
import VBtn from 'vuetify/lib/components/VBtn';
import VIcon from 'vuetify/lib/components/VIcon';
export default {
    name: 'ExportButton',
    components: {
        VBtn,
        VIcon,
    },
    methods: {
        onClick() {
            this.$emit('onClick');
        },
    },
};
</script>
<style scoped lang="scss">
.v-btn {
    color: var(--v-extra-lighten2);
    .v-icon {
        margin-right: 1rem;
    }
}
</style>
