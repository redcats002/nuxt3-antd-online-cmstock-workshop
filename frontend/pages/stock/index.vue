<template>
  <a-row :gutter="[4, 4]">
    <a-col :span="24" class="tw-my-1 tw-mt-2">
      <!-- STOCK-CARD -->
      <a-row :gutter="[10, 10]" align="center" justify="center">
        <a-col :span="6" v-for="(item, i) in stockCardList" :key="i">
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
        <a-row align="center" justify="center" :gutter="[10, 10]">
          <!-- Search bar -->
          <a-col :span="24">
            <a-row justify="space-between" :gutter="[10, 10]">
              <a-col :span="22">
                <a-auto-complete
                  size="large"
                  class="tw-w-full tw-drop-shadow-sm hover:tw-drop-shadow-md tw-transition-all"
                  v-model="searchKeyword"
                  :options="options"
                >
                  <template #placeholder>
                    <SearchOutlined /> Input search text</template
                  >
                </a-auto-complete>
              </a-col>
              <a-col :span="2">
                <a-button
                  @click="routeToEdit"
                  icon
                  class="tw-w-full tw-drop-shadow-sm hover:tw-drop-shadow-md tw-transition-all"
                  :shape="'round'"
                  :size="'large'"
                  type="primary"
                >
                  NEW
                </a-button>
              </a-col>
            </a-row>
          </a-col>
          <!-- TABLE -->
          <a-col :span="24">
            <StockTable
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
            delete this task?
          </a-row>
        </p>
        <template #footer>
          <a-button @click="handleOk">Cancel</a-button>
          <a-button
            html-type="submit"
            :loading="isLoading"
            @click="handleConfirmDelete"
            >Delete</a-button
          >
        </template>
      </a-modal>
    </a-col>
  </a-row>
</template>
<script lang="ts" setup>
import StockCard from '~/components/stock/Card.vue';
import StockTable from '~/components/stock/Table.vue';
import { DeleteOutlined } from '@ant-design/icons-vue';
import {
  SearchOutlined,
  ShoppingCartOutlined,
  GiftOutlined,
  RollbackOutlined,
} from '@ant-design/icons-vue';
import { useCounter } from '~/stores/useCounter';
import { Modal, message } from 'ant-design-vue';
definePageMeta({
  layout: 'default',
});
const router = useRouter();
const visible = ref<boolean>(false);
const stockCardList = ref([
  {
    title: 'Total',
    amount: '1800',
    icon: ShoppingCartOutlined,
    color: '#16DB65',
  },
  { title: 'Sold out', amount: '20', icon: SearchOutlined, color: '#058C42' },
  { title: 'Return', amount: '4', icon: RollbackOutlined, color: '#04471C' },
  {
    title: 'Discount',
    amount: '2',
    icon: GiftOutlined,
    color: '#0D2818',
  },
]);
const isLoading = ref(false);
const searchKeyword = ref('');
const options = ref([
  { value: 'Option 1' },
  { value: 'Option 1' },
  { value: 'Option 1' },
]);

const handleConfirmDelete = () => {
  isLoading.value = true;
  message.success('Delete successfully');
  visible.value = false;
  isLoading.value = false;
};
const handleClickDelete = () => {
  visible.value = true;
};
const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = false;
};
const handleClickEdit = (id: number) => {
  router.push(`/stock/${id}`);
};
const routeToEdit = () => {
  router.push('/stock/create');
};
</script>
<style scoped></style>
