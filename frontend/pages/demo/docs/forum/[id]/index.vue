<template>
  <div>
    <DemoHeader title="Index [id]"></DemoHeader>
    <div class="tw-py-2">
      <span class="tw-pr-2">params:</span>
      <code>{{ $route.params }}</code>
    </div>
    <a-button type="primary" @click="$router.push('/demo/docs/forum/99/edit')">
      EDIT
    </a-button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
  layoutTransition: {
    name: "slide-in",
  },
  validate: async (route) => {
    // Check if the id is made up of digits
    return /^\d+$/.test(`${route.params.id}`);
  },
});
</script>

<style scoped></style>
