<template>
  <a-row :gutter="[0, 10]">
    <a-col :span="24" class="tw-my-1 tw-mt-2">
      <!-- STOCK-CARD -->
      <a-row :gutter="[0, 10]" align="center" justify="center">
        <a-col
          :span="6"
          v-for="(item, i) in stockCardList"
          :key="i"
          class="tw-pr-2"
        >
          <StockCard
            :title="item.title"
            :amount="item.amount"
            :color="item.color"
            :icon="item.icon"
          ></StockCard>
        </a-col>
      </a-row>
    </a-col>
    <a-col :span="24" class="tw-my-1">
      <a-card class="tw-w-full tw-min-h-[75vh] tw-rounded-lg tw-drop-shadow-md">
        <a-row align="center" justify="center" :gutter="[0, 10]">
          <!-- Search bar -->
          <a-col :span="24">
            <a-row justify="space-between" :gutter="[0, 10]">
              <a-col :span="22">
                <a-auto-complete
                  size="large"
                  class="tw-w-full tw-drop-shadow-sm hover:tw-drop-shadow-md tw-transition-all"
                  :options="stockStore.autoCompleteOptions"
                  @search="stockStore.debouncedSearch"
                  @select="stockStore.onSelect"
                  :default-active-first-option="false"
                  :filter-option="false"
                >
                  <template #placeholder>
                    <SearchOutlined /> Input search text</template
                  >
                </a-auto-complete>
              </a-col>
              <a-col :span="2">
                <a-button
                  @click="$router.push('/stock/create')"
                  class="tw-drop-shadow-sm hover:tw-drop-shadow-md tw-transition-all tw-flex tw-items-center"
                  :shape="!breakpointState.sm ? 'circle' : 'rounded'"
                  :size="'large'"
                  type="primary"
                >
                  <span v-if="breakpointState.sm"> NEW </span>

                  <template #icon> <PlusCircleFilled /></template>
                </a-button>
              </a-col>
            </a-row>
          </a-col>
          <!-- TABLE -->
          <a-col :span="24">
            <StockTable
              :stocks="stockStore.stocks"
              @handleClickDelete="handleClickDelete"
              @handleClickEdit="handleClickEdit"
            />
          </a-col>
        </a-row>
      </a-card>
    </a-col>
    <a-col :span="24">
      <a-modal v-model:visible="visible">
        <p class="tw-font-medium">
          <a-row align="start" class="tw-items-center">
            <DeleteOutlined class="tw-mr-2 tw-text-red-500" spin /> Are you sure
            delete this product?
          </a-row>
        </p>
        <template #footer>
          <a-button @click="handleOk">Cancel</a-button>
          <a-button
            type="danger"
            html-type="submit"
            :loading="stockStore.isLoading()"
            @click="handleConfirmDelete"
            >Delete
          </a-button>
        </template>
      </a-modal>
    </a-col>
  </a-row>
</template>
<script lang="ts" setup>
import StockCard from "~/components/stock/Card.vue";
import StockTable from "~/components/stock/Table.vue";
import { useStockStore } from "~/stores/useStock";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  GiftOutlined,
  RollbackOutlined,
  PlusCircleFilled,
  DeleteOutlined,
} from "@ant-design/icons-vue";
import { Grid, message } from "ant-design-vue";
import { FetchingStatus } from "~/models/FetchingStatus";
import { useAuth } from "~/stores/useAuth";
const { useBreakpoint } = Grid;
definePageMeta({
  layout: "default",
});
const breakpointState = useBreakpoint();
const stockStore = useStockStore();
const router = useRouter();
const visible = ref<boolean>(false);
const deleteProductId = ref();
const api = useApi();
const stockCardList = ref([
  {
    title: "Total",
    amount: "1800",
    icon: ShoppingCartOutlined,
    color: "#16DB65",
  },
  { title: "Sold out", amount: "20", icon: SearchOutlined, color: "#058C42" },
  { title: "Return", amount: "4", icon: RollbackOutlined, color: "#04471C" },
  {
    title: "Discount",
    amount: "2",
    icon: GiftOutlined,
    color: "#0D2818",
  },
]);

onMounted(async () => {
  stockStore.setLoading(FetchingStatus.fetching);
  stockStore.loadProducts();
  stockStore.setLoading(FetchingStatus.success);
});

const handleConfirmDelete = async () => {
  stockStore.setLoading(FetchingStatus.fetching);
  await api.deleteProduct(deleteProductId.value);
  await stockStore.loadProducts();
  message.success("Delete successfully");
  visible.value = false;
  stockStore.setLoading(FetchingStatus.success);
  deleteProductId.value = null;
};
const handleClickDelete = (id: number) => {
  deleteProductId.value = id;
  visible.value = true;
};
const handleOk = (e: MouseEvent) => {
  visible.value = false;
};
const handleClickEdit = (id: number) => {
  router.push(`/stock/edit/${id}`);
};
</script>
<style scoped></style>
