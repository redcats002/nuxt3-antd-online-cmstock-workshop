<template>
  <a-row class="tw-p-5" :gutter="[0, 10]">
    <a-col :span="24">
      <a-card
        class="tw-w-full tw-h-[400px] tw-drop-shadow-md hover:tw-drop-shadow-md tw-transition-all tw-rounded-lg"
      >
      </a-card>
    </a-col>
    <a-col :span="16" class="tw-pr-3">
      <a-card
        class="tw-w-full tw-h-[300px] tw-drop-shadow-md hover:tw-drop-shadow-md tw-transition-all tw-rounded-lg"
      >
      </a-card>
    </a-col>
    <a-col :span="8">
      <a-card
        class="tw-w-full tw-h-[300px] tw-drop-shadow-md hover:tw-drop-shadow-md tw-transition-all tw-rounded-lg"
      >
      </a-card>
    </a-col>
  </a-row>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'default',
});
</script>
