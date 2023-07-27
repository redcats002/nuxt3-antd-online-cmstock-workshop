<template>
  <div>
    <h1>{{ title }}</h1>
    <code>path:{{ $route.fullPath }}</code>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
});
</script>

<style scoped></style>
