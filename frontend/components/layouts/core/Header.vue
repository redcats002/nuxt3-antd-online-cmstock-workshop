<template>
  <a-layout-header class="tw-p-0 tw-bg-[#00dc82ff] tw-drop-shadow-md">
    <a-row
      align="start"
      justify="space-between"
      class="tw-items-center tw-h-full tw-px-4"
    >
      <a-tag color="success" class="tw-rounded-lg tw-px-4">
        <span class="tw-font-bold tw-text-xl">CMDev</span>
      </a-tag>
      <a-tag 
        color="#EE2E31"
        class="tw-rounded-lg tw-px-4 tw-cursor-pointer"
        @click="authStore.logout"
      >
        <a-row justify="center" class="tw-items-center tw-pb-1">
          <LogoutOutlined class="tw-text-lg " />
          <!-- <span class="tw-font-bold tw-text-xl"> Logout </span> -->
        </a-row>
      </a-tag>
    </a-row>
  </a-layout-header>
</template>
<script lang="ts">
import { LogoutOutlined } from "@ant-design/icons-vue";
import { useAuth } from "~/stores/useAuth";

export default defineComponent({
  setup() {
    const authStore = useAuth();
    return { authStore };
  },
  components: { LogoutOutlined },
});
</script>
