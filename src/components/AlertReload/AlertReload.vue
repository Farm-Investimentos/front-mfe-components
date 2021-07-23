<template>
    <v-alert dense outlined type="error">
        <v-row align="center">
            <v-col class="grow">
                {{ label }}
            </v-col>
            <v-col class="shrink">
                <v-btn color="secondary" class="ml-3" @click="$emit('onClick')">
                    <v-icon>mdi-refresh</v-icon>
                    Recarregar</v-btn
                >
            </v-col>
        </v-row>
    </v-alert>
</template>
<script>
export default {
    name: 'AlertReload',
    props: {
        label: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss">
.v-btn {
    .v-icon {
        margin-right: 1rem;
    }
}
</style>
