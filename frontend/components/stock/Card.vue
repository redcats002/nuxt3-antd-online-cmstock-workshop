<template>
  <a-card class="tw-w-full tw-h-full tw-rounded-lg tw-drop-shadow-md">
    <a-row justify="space-between" align="center">
      <div>
        <span class="tw-font-medium tw-text-lg"> {{ props.title }}</span>
      </div>
      <div>
        <span class="tw-font-bold tw-text-lg">{{ props.amount }}</span>
      </div>
    </a-row>
  </a-card>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  amount: string;
  color: string;
}>();
</script>
