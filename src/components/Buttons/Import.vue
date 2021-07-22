<template>
    <v-btn @click="onClick" dense class="v-btn--responsive" outlined title="Importar">
        <v-icon>mdi-upload</v-icon>
        Importar
    </v-btn>
</template>
<script>
import VBtn from 'vuetify/lib/components/VBtn';
import VIcon from 'vuetify/lib/components/VIcon';
export default {
    name: 'ImportButton',
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
    background: var(--v-extra-lighten2);
    color: var(--v-gray-lighten5);
    .v-icon {
        margin-right: 1rem;
    }
}
</style>
