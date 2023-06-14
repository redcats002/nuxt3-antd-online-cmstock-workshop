<template>
  <a-layout-header class="tw-p-0 tw-bg-white tw-drop-shadow-md">
    <a-row
      align="start"
      justify="space-between"
      class="tw-items-center tw-h-full tw-px-4"
    >
      <a-tag color="success" class="tw-rounded-lg tw-px-4">
        <span class="tw-font-bold tw-text-xl">Header</span>
      </a-tag>
      <a-tag
        color="error"
        class="tw-rounded-lg tw-px-4 tw-cursor-pointer"
        @click="authStore.logout"
      >
        <span class="tw-font-bold tw-text-xl">Logout</span>
      </a-tag>
    </a-row>
  </a-layout-header>
</template>
<script lang="ts">
import { useAuth } from '~/stores/useAuth';

export default defineComponent({
  setup() {
    const authStore = useAuth();
    return { authStore };
  },
});
</script>
