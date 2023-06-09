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
                  placeholder="Input search text"
                  v-model="searchKeyword"
                  :options="options"
                />
              </a-col>
              <a-col :span="2">
                <a-button
                  icon
                  class="tw-w-full tw-drop-shadow-sm hover:tw-drop-shadow-md tw-transition-all"
                  :shape="'round'"
                  :size="'large'"
                  type="primary"
                >
                  <SearchOutlined />
                </a-button>
              </a-col>
            </a-row>
          </a-col>
          <!-- TABLE -->
          <a-col :span="24"> <StockTable /> </a-col>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
</template>
<script lang="ts" setup>
import StockCard from '~/components/stock/Card.vue';
import StockTable from '~/components/stock/Table.vue';
import { SearchOutlined } from '@ant-design/icons-vue';
definePageMeta({
  layout: 'default',
});
const stockCardList = ref([
  { title: 'Total', amount: '1800', icon: '', color: '#BCFFDB' },
  { title: 'Sold out', amount: '20', icon: '', color: '#8DFFCD' },
  { title: 'Return', amount: '4', icon: '', color: '#68D89B' },
  { title: 'Discount', amount: '2', icon: '', color: '#4F9D69' },
]);
const searchKeyword = ref('');
const options = ref([
  { value: 'Option 1' },
  { value: 'Option 1' },
  { value: 'Option 1' },
]);
</script>
<style scoped></style>
