# Layouts (/layouts)

Nuxt provides a customizable layouts framework you can use throughout your application, ideal for extracting common UI or code patterns into reusable layout components.

Layouts are used by adding <NuxtLayout> to your app.vue, and either setting a layout property as part of your page metadata (if you are using the ~/pages integration), or by manually specifying it as a prop to <NuxtLayout>. (Note: The layout name is normalized to kebab-case, so someLayout becomes some-layout.)

ref:<https://nuxt.com/docs/guide/directory-structure/layouts>

-| layouts/
---| default.vue
---| custom.vue

```ts
// ~/app.vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

for define page meta (in this case is layout) we use definePageMeta()

```ts
<script>
  // This will work in both `<script setup>` and `<script>`
  definePageMeta({
    layout: "custom",
  });
</script>
```
