<template>
    <v-btn
        @click="onClick"
        dense
        class="v-btn--responsive"
        :color="color"
        :outlined="open"
        :title="label"
    >
        {{ label }}
        <v-icon>{{ `mdi-chevron-${open ? 'down' : 'up'}` }}</v-icon>
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
    data: () => ({
        open: false,
    }),
    props: {
        label: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: 'secondary',
        },
        pressed: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        onClick() {
            this.open = !this.open;
        },
    },
    watch: {
        open(value) {
            this.$emit('onChange', value);
        },
    },
    created() {
        this.open = this.pressed;
    },
};
</script>
<style scoped lang="scss">
.v-btn {
    .v-icon {
        margin-left: 1rem;
    }
}
</style>
