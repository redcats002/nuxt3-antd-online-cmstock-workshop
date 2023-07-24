<template>
  <a-table
    :columns="columns"
    :data-source="props.stocks"
    :loading="stockStore.isLoading()"
    :scroll="{
      x: 200,
    }"
  >
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span> Name </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a @click="handleClickEdit(record.id)">
          {{ record.name }}
        </a>
      </template>
      <template v-else-if="column.key === 'image'">
        <a-image
          :src="getFullImagePath(record.image)"
          height="35px"
          class="tw-object-contain"
        />
      </template>
      <template v-else-if="column.key === 'stock'">
        <span>{{ formats.toQuantity(record.stock) }}</span>
      </template>
      <template v-else-if="column.key === 'price'">
        <span> {{ formats.toCurrency(record.price) }}</span>
      </template>
      <template v-else-if="column.key == 'createdAt'">
        <span class="tw-opacity-80">
          {{ dayjs(record.createdAt).format("DD/MM/YY • hh:mm") }}
        </span>
      </template>
      <template v-else-if="column.key == 'updatedAt'">
        <span class="tw-opacity-80">
          {{ dayjs(record.updatedAt).format("DD/MM/YY • hh:mm") }}
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <a-row>
          <a-button
            class="tw-bg-[#ffc43d] tw-text-white tw-rounded-lg tw-mr-2"
            @click="handleClickEdit(record.id)"
          >
            <span><EditOutlined /> </span>
          </a-button>
          <a-button
            type="danger"
            class="tw-rounded-lg"
            @click="handleClickDelete(record.id)"
          >
            <span> <DeleteOutlined /> </span>
          </a-button>
        </a-row>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts">
import {
  SmileOutlined,
  DownOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons-vue";

import { defineComponent } from "vue";
import { useStockStore } from "~/store/stock";
const columns = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
  },
  {
    name: "Name",
    dataIndex: "name",
    key: "name",
    width: "30%",
  },

  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Created At",
    key: "createdAt",
    dataIndex: "createdAt",
  },
  {
    title: "Updated At",
    key: "updatedAt",
    dataIndex: "updatedAt",
  },
  {
    title: "Action",
    key: "action",
  },
];
const data = [
  {
    id: 1,
    image: "John Brown",
    name: "John Brown",
    stock: 32,
    price: 500,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
];

export default defineComponent({
  components: {
    SmileOutlined,
    DownOutlined,
    EditOutlined,
    DeleteOutlined,
  },
  props: {
    stocks: Array,
  },
  setup(props, { emit }) {
    const formats = useFormats();
    const dayjs = useDayjs();
    const stockStore = useStockStore();
    const handleClickEdit = (id: number) => {
      emit("handleClickEdit", id);
    };
    const handleClickDelete = (id: number) => {
      emit("handleClickDelete", id);
    };
    return {
      data,
      columns,
      dayjs,
      handleClickDelete,
      handleClickEdit,
      props,
      stockStore,
      formats,
    };
  },
});
</script>
<style></style>
~/store/stock ~/store/stock
