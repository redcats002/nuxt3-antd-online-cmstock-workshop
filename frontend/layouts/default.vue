<template>
  <a-layout class="tw-min-h-screen" hasSider>
    <ClientOnly>
      <LayoutsCoreSidebar v-model:collapsed="collapsed"></LayoutsCoreSidebar>
      <a-layout class="tw-w-full tw-overflow-auto">
        <LayoutsCoreHeader></LayoutsCoreHeader>
        <!-- <LayoutsCoreContent></LayoutsCoreContent> -->
        <a-layout-content>
          <slot />
        </a-layout-content>
        <LayoutsCoreFooter></LayoutsCoreFooter>
      </a-layout>
    </ClientOnly>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const selectedKeys = ref<string[]>(['1']);
    const collapsed = ref<boolean>(false);

    return {
      selectedKeys,
      collapsed,
    };
  },
});
</script>
