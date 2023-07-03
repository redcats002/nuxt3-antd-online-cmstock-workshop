# Pinia

The Vue Store that you will enjoy using

## 1. install @pinia/nuxt

`yarn add pinia @pinia/nuxt`

## 2. add it to module on nuxt.config.ts

```ts
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
});
```

## 3. pinia config on nuxt.config.ts

```ts
export default defineNuxtConfig({
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
});
```

## Get Started

- define each store in /stores directory

Example store state in server side using pinia & middleware.server <https://github.com/vuejs/pinia/discussions/947>

Simple usage <https://nuxt.com/modules/pinia#create-a-store>

ref: <https://nuxt.com/modules/pinia>
, <https://pinia.vuejs.org/ssr/nuxt.html>
