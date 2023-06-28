<template>
  <a-layout class="tw-min-h-screen" hasSider>
    <LayoutsCoreSidebar v-model:collapsed="collapsed"></LayoutsCoreSidebar>
    <a-layout class="tw-w-full tw-overflow-auto">
      <LayoutsCoreHeader></LayoutsCoreHeader>
      <!-- <LayoutsCoreContent></LayoutsCoreContent> -->
      <a-layout-content class="tw-p-5">
        <slot />
      </a-layout-content>
      <LayoutsCoreFooter></LayoutsCoreFooter>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from "vue";
const collapsed = ref<boolean>(false);
</script>
