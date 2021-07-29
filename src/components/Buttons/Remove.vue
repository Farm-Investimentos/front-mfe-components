<template>
    <v-btn @click="onClick" dense class="v-btn--responsive" color="error" :title="label">
        <v-icon>mdi-trash-can-outline</v-icon>
        {{ label }}
    </v-btn>
</template>
<script>
import VBtn from 'vuetify/lib/components/VBtn';
import VIcon from 'vuetify/lib/components/VIcon';
export default {
    name: 'RemoveButton',
    props: {
        label: {
            type: String,
            default: 'Remover',
        },
    },
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
    .v-icon {
        margin-right: 1rem;
    }
}
</style>
