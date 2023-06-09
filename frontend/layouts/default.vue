<template>
  <a-layout style="min-height: 100vh">
    <LayoutsCoreSidebar></LayoutsCoreSidebar>
    <a-layout>
      <LayoutsCoreHeader></LayoutsCoreHeader>
      <!-- <LayoutsCoreContent></LayoutsCoreContent> -->
      <a-layout-content style="margin: 0 16px">
        <slot />
      </a-layout-content>
      <LayoutsCoreFooter></LayoutsCoreFooter>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({});
</script>
