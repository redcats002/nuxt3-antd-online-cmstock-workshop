<template>
  <a-row :gutter="[0, 10]">
    <a-col :span="24">
      <a-card
        class="tw-w-full tw-relative tw-drop-shadow-md hover:tw-drop-shadow-md tw-transition-all tw-rounded-lg"
      >
        <ReportLineChart :data="lineData"></ReportLineChart>
      </a-card>
    </a-col>
    <a-col :span="16" class="tw-pr-3">
      <a-card
        class="tw-w-full tw-drop-shadow-md hover:tw-drop-shadow-md tw-transition-all tw-rounded-lg"
      >
        <a-row>
          <a-col :span="24" class="tw-mb-4">
            <ReportBarChart :data="lineData"></ReportBarChart>
          </a-col>
          <a-col :span="24">
            <a-button type="primary" @click="shuffleData">
              shuffleData
            </a-button>
          </a-col>
        </a-row>
      </a-card>
    </a-col>
    <a-col :span="8">
      <a-card
        class="tw-w-full tw-drop-shadow-md hover:tw-drop-shadow-md tw-transition-all tw-rounded-lg"
      >
        <ReportPieChart :data="lineData"></ReportPieChart>
      </a-card>
    </a-col>
  </a-row>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
const lineData = ref([30, 40, 60, 70, 5, 35, 12, 75, 42, 33, 10, 2]);
const barData = ref([30, 40, 60, 70, 5, 10, 10]);
const pieData = ref([30, 40, 60]);
const shuffleData = () => {
  const array = ref([lineData, barData, pieData]);
  for (const [index, dataset] of array.value.entries()) {
    const tempDataset = dataset.value;

    for (let i = tempDataset.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempDataset[i], tempDataset[j]] = [tempDataset[j], tempDataset[i]];
    }
    array.value[index].value = tempDataset;
  }
};
</script>
