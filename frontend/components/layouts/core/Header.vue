<template>
  <a-layout-header class="tw-p-0 tw-bg-[#00B98Dff] tw-drop-shadow-md">
    <a-row
      align="start"
      justify="space-between"
      class="tw-items-center tw-h-full tw-px-4"
    >
      <a-tag ghost class="tw-rounded-lg tw-p-2">
        <span class="tw-font-bold tw-text-xl">
          <a-row align="center" justify="space-between">
            <AreaChartOutlined class="tw-text-lg tw-pr-2" />
            CMDev - Stock Workshop
          </a-row>
        </span>
      </a-tag>
      <a-tag
        color="#EE2E31"
        class="tw-rounded-lg tw-px-4 tw-cursor-pointer"
        @click="authStore.logout"
      >
        <a-row justify="center" class="tw-items-center tw-pb-1">
          <LogoutOutlined class="tw-text-lg" />
          <!-- <span class="tw-font-bold tw-text-xl"> Logout </span> -->
        </a-row>
      </a-tag>
    </a-row>
  </a-layout-header>
</template>
<script lang="ts">
import { LogoutOutlined, AreaChartOutlined } from "@ant-design/icons-vue";
import { useAuth } from "~/store/auth";

export default defineComponent({
  setup() {
    const authStore = useAuth();
    return { authStore };
  },
  components: { LogoutOutlined, AreaChartOutlined },
});
</script>
