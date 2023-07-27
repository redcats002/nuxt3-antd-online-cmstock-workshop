<template>
  <DemoHeader title="Edit [id]"></DemoHeader>
  <div class="tw-py-2">
    <span class="tw-pr-2">params:</span>
    <code>{{ $route.params }}</code>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
  layoutTransition: {
    name: "slide-in",
  },
});
</script>

<style scoped></style>
