
  <template>
    <section class="v-data-table-custom-footer">
        <div>
            <v-select outlined v-model="selectedLimit" :items="perPageBuiltItems" dense></v-select>
        </div>
        <v-pagination
            :disabled="disabled"
            v-model="currentPage"
            :length="totalPages"
            :total-visible="7"
        ></v-pagination>
    </section>
</template>
<script>
import { VSelect } from 'vuetify/lib/components/VSelect';
import { VPagination } from 'vuetify/lib/components/VPagination';

export default {
    name: 'DataTablePaginator',
    props: {
        perPageOptions: {
            type: Array,
            default: () => [5, 10, 20, 50, 100],
        },
        page: null,
        totalPages: null,
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            selectedLimit: 10,
            currentPage: this.page,
        };
    },
    computed: {
        perPageBuiltItems: function () {
            return this.perPageOptions.map(value => ({
                text: value + ' registros por página',
                value,
            }));
        },
    },
    watch: {
        selectedLimit(newValue) {
            this.$emit('onChangeLimitPerPage', newValue);
        },
        currentPage(newValue) {
            this.$emit('onChangePage', newValue);
        },
    },
    components: {
        VSelect,
        VPagination,
    },
};
</script>