<template>
  <a-layout style="min-height: 100vh">
    <LayoutsCoreSidebar v-model:collapsed="collapsed"></LayoutsCoreSidebar>
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
import { useAuth } from '~/stores/useAuth';
export default defineComponent({
  setup() {
    const selectedKeys = ref<string[]>(['1']);
    const collapsed = ref<boolean>(false);
    const authStore = useAuth();
    onMounted(() => {
      authStore.restoreSession();
    });
    return {
      selectedKeys,
      collapsed,
    };
  },
});
</script>
