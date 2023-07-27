<template>
  <div>
    <DemoHeader title="Index Query"></DemoHeader>
    <div class="tw-py-2">
      <code>query:{{ $route.query }}</code>
    </div>
    <div class="tw-py-2">
      <NuxtLink to="/demo?type=HELLO">
        <a-button type="primary"> type=HELLO </a-button>
      </NuxtLink>
      <a-button type="primary" @click="$router.push('/demo?type=543')">
        type=543
      </a-button>
      <a-button type="dashed" @click="$router.push('/demo')"> RESET </a-button>
    </div>
    <div class="tw-py-2">
      <a-button type="primary" @click="$router.push('/demo/test/testingslug')">
        slug
      </a-button>
    </div>
    <div class="tw-py-2">
      <a-button @click="routeToStock" type="primary"> Route to Stock </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
  layoutTransition: {
    name: "slide-in",
  },
});
const router = useRouter();
const route = useRoute();

const routeToStock = () => {
  console.log(route.fullPath);
  router.push("/stock");
};
</script>

<style scoped></style>
