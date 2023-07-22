# Vue 3 chart

## 1. install packages

`yarn add chart.js vue-chart-3`

## 2. create chartjs.client.ts in /plugins

```ts
import { defineNuxtPlugin } from "#app";
import { Chart, registerables } from "chart.js";
import VueChart3 from "vue-chart-3";
Chart.register(...registerables);

export default defineNuxtPlugin((nuxtApp) => {
  //   nuxtApp.vueApp.component("VueChart3", VueChart3);
  nuxtApp.vueApp.config.globalProperties.$Chart = Chart;
});
```

## 3. register plugin in nuxt.config.ts

```ts
export default defineNuxtConfig({
  plugins: ["~/plugins/chartjs.client.ts"],
});
```

## Let's useeeee

ref: <https://vue-chart-3.netlify.app/>
