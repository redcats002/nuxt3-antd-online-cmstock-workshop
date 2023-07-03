# README COMPOSABLES

## Composables Directory

Nuxt 3 uses the composables/ directory to automatically import your Vue composables into your application using auto-imports!

## Why composables ?

Composables are a design pattern used to encapsulate related logic into reusable functions or hooks. They enable the composition of functionality and provide a clean separation of concerns in Vue.js applications.

## Basic implementation

## 1. create /composables

## 2. create useFoo.ts in /composables

```ts
export const useFoo = () => {
  return useState("foo", () => "bar");
};
```

```ts
<template>
  <div>
    {{ foo }}
  </div>
</template>

<script setup>
const foo = useFoo()
</script>
```

references:
https://nuxt.com/docs/guide/directory-structure/composables
