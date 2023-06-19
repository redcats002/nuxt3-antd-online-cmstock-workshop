<template>
  <a-card>
    <span class="tw-text-gray-800 tw-font-bold tw-pr-2">{{
      value.pageView
    }}</span>
    <span class="tw-pr-2">Page views since</span>
    <span class="tw-text-gray-400">{{ time }}</span>
  </a-card>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "default",
});
const { data } = await useFetch("/api/pageview");
const value = data.value as any;
const time = useTimeAgo(computed(() => value.startAt));
</script>
