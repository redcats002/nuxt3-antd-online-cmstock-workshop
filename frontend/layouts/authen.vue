<template>
  <a-layout class="tw-min-h-screen">
    <a-layout-content class="tw-p-10 tw-flex tw-items-center tw-justify-center">
      <a-row align="center" justify="center" class="tw-h-full tw-w-full">
        <slot />
      </a-row>
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useAuth } from "~/store/auth";
export default defineComponent({
  setup() {},
});
</script>
