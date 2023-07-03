# Dayjs

## 1. Install module

`yarn add dayjs-nuxt`

## 2. add it to module on nuxt.config.ts

```ts
export default defineNuxtConfig({
  modules: ["dayjs-nuxt"],
});
```

## Let's useeeee

```ts
const dayjs = useDayjs();
const date = dayjs("2023-01-01");
```

ref: <https://nuxt.com/modules/dayjs>
