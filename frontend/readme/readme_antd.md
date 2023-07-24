# Ant Design Vue UI Component Framework 🐜

## 1. Use ant-design-vue to be plugin

### 1.1 install ant-design-vue & @ant-design/icons-vue

```bash
  yarn add ant-design-vue@^3.2.20 @ant-design/icons-vue
```

This workshop support to antd ^3.2.20 (now is 4.0.0)

### 1.2 create `/plugins` directory and naming it as `antd.ts`

`/plugins/antd.ts`

```ts
import { defineNuxtPlugin } from "#app";
import "ant-design-vue/dist/antd.css"; // import css stylesheets https://www.antdv.com/docs/vue/introduce/#usage
// for ant-design-vue: ^4.0.0 change antd.css -> reset.css
import Antd from "ant-design-vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Antd);
});
```

### 1.3 inject it to nuxt.config.ts

```ts
export default defineNuxtConfig({
  plugins: ["~/plugins/antd.ts"],
});
```

---

Acutally `@ant-design-vue/nuxt` is avaiable but it `have conflict with vite.`
So, we manually setup the plugin instead.

## 2. Use @ant-design-vue/nuxt

### 2.1 Install - using yarn

`yarn add --dev @ant-design-vue/nuxt @ant-design/icons-vue`

### 2.2 Add @ant-design-vue/nuxt to the modules section of nuxt.config.ts

```ts
export default defineNuxtConfig({
  modules: ["@ant-design-vue/nuxt"],
  antd: {
    // Options
  },
});
```

That's it! You can now use ant-design-vue in your Nuxt app ✨

ref: <https://nuxt.com/modules/ant-design-vue>
