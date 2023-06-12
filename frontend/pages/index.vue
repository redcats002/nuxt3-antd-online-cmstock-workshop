<template>
  <div><a-skeleton /></div>
</template>
<script lang="ts">
defineComponent({
  setup() {
    const router = useRouter();
    onMounted(() => {
      router.push('/stock');
    });
  },
});
</script>
