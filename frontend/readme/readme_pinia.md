# Pinia

The Vue Store that you will enjoy using

## 1. install @pinia/nuxt

```bash
  yarn add pinia @pinia/nuxt
```

## 2. add it to module on `nuxt.config.ts`

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

4. Simple store `~/store/counter.ts`

Now, pinia offer 2 ways to define store are:

- option stores (Traditional way)
  state, getters, actions
- setup stores (Composite API like)
  ref()s become state properties
  computed()s become getters
  function()s become actions

for more information visit this [link](https://pinia.vuejs.org/core-concepts/#defining-a-store)

```ts
import { defineStore } from "pinia";

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useMainStore = defineStore("main", {
  // a function that returns a fresh state
  state: () => ({
    counter: 0,
    name: "Eduardo",
  }),
  // optional getters
  getters: {
    // getters receive the state as first parameter
    doubleCounter: (state) => state.counter * 2,
    // use getters in other getters
    doubleCounterPlusOne(): number {
      return this.doubleCounter + 1;
    },
  },
  // optional actions
  actions: {
    reset() {
      // `this` is the store instance
      this.counter = 0;
    },
  },
});
```

## Get Started

- define each store in /stores directory

Example store state in server side using pinia & middleware.server <https://github.com/vuejs/pinia/discussions/947>

Simple usage <https://nuxt.com/modules/pinia#create-a-store>

ref: <https://nuxt.com/modules/pinia>
, <https://pinia.vuejs.org/ssr/nuxt.html>
