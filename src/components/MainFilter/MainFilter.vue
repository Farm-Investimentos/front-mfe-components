<template>
    <section :class="{ 'justify-end': justifyEnd === true }">
        <fieldset class="fieldset-default" v-if="hasInitialInput">
            <label for="form-main-filter-search"
                >{{ label }}
                <v-icon style="vertical-align: middle"> mdi-file-find </v-icon></label
            >
            <v-text-field color="secondary" @keyup="onKeyUp" id="form-main-filter-search" outlined dense> </v-text-field>
        </fieldset>
        <v-btn
            v-if="hasExtraFilters"
            color="secondary"
            class="v-btn-responsive mt-14 mt-sm-8"
            @click="onFilterClick"
        >
            <v-icon color="white" class="mr-2">mdi-filter</v-icon>
            Filtrar
        </v-btn>
    </section>
</template>

<script>
import { VBtn } from 'vuetify/lib/components/VBtn';
import { VTextField } from 'vuetify/lib/components/VTextField';
import { VIcon } from 'vuetify/lib/components/VIcon';
export default {
    name: 'MainFilter',
    props: {
        hasExtraFilters: {
            type: Boolean,
            default: true,
        },
        hasInitialInput: {
            type: Boolean,
            default: true,
        },
        justifyEnd: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: 'Quer localizar um cliente?'
        }
    },
    data: () => {
        return {
            timer: null,
        };
    },
    methods: {
        onFilterClick() {
            this.$emit('onClick');
        },
        onKeyUp(event) {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            this.timer = setTimeout(() => {
                this.$emit('onInputChange', event.target.value);
            }, 200);
        },
    },
    components: {
        VTextField,
        VBtn,
        VIcon,
    },
};
</script>

<style scoped lang="scss">
section {
    display: flex;
    flex-direction: row;
    .v-btn {
        margin-left: 1rem;
    }
}
@media screen and (max-width: 600px) {
    section {
        flex-direction: column;
        margin-bottom: 1rem;
        .v-btn {
            margin-left: 0;
            margin-top: 0 !important;
        }
    }
}
</style>
