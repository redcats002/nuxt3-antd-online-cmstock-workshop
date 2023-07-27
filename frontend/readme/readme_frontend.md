# README SETUP

## New Project

```bash
    npx nuxi@latest init <project-name>

    cd <project-name>

    yarn / npm

    yarn dev / npm run dev
```

## Alias

in Nuxt3 you can use "~" to be alias as root

ref: <https://nuxt.com/docs/guide/going-further/layers#basic-example>

## Extension

-Vue Volar extension Pack
-Vue VSCode Snippets

Install

```bash
code --install-extension MisterJ.vue-volar-extention-pack
code --install-extension sdras.vue-vscode-extensionpack
code --install-extension bradlc.vscode-tailwindcss
code --install-extension ant-design-vue.vscode-ant-design-vue-helper
```

For **TypeScript**
recommend to use **TypeScript Vue Plugin (Volar)**
But now Vetur also supports

## Packages

### dependencies

```bash
yarn add @ant-design/icons-vue ant-design-vue@^3.2.20 @nuxtjs/tailwindcss pinia @pinia/nuxt h lodash dayjs-nuxt chart.js vue-chart-3 url-join @vueuse/nuxt
```

### devDependencies

```bash
yarn add -D @types/lodash
```

### Modules/Plugins

- [AntDesign](/frontend/readme/readme_antd.md)
- [TailwindCss](/frontend/readme/readme_tailwind.md)
- [Pinia](/frontend/readme/readme_pinia.md)
- [ChartJS](/frontend//readme/readme_vuechart3.md)
- [DayJS](/frontend//readme/readme_dayjs.md)
- [VueUse](/frontend//readme/readme_vueuse.md)

nuxt.config.ts (Final)

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "dayjs-nuxt", "@vueuse/nuxt"],
  plugins: ["~/plugins/chartjs.client.ts", "~/plugins/antd.ts"],
  css: ["~/assets/css/main.css", "~/assets/css/tailwind.css"],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    exposeLevel: 2,
    injectPosition: "first",
    viewer: true,
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
      // ... or scan modules nested one level deep with a specific name and file extension
      "composables/*/index.{ts,js,mjs,mts}",
      // ... or scan all modules within given directory
      "composables/**",
    ],
  },
});
```

## Typescript support

### Type-checking

By default, Nuxt doesn't check types when you run nuxi dev or nuxi build, for performance reasons. However, you can enable type-checking at build or development time by installing vue-tsc and typescript as devDependencies and either enabling the typescript.typeCheck option in your nuxt.config file or manually checking your types with nuxi.

```bash
yarn nuxi typecheck
```

[TS](/frontend/readme/readme_typescript.md)

## Then copy folder from prototype in order

[directory](/frontend//readme/readme_directory.md)

1. [assets/](/frontend/readme/readme_assets.md)
2. utils/
3. models/
4. plugins/
5. [composables/](/frontend/readme/readme_composables.md)
6. [store/](/frontend/readme/readme_pinia.md)
7. [components/](/frontend/readme/readme_components.md)
8. [server/](/frontend/readme/readme_server.md)
9. [middleware/](/frontend/readme/readme_middleware.md)
10. [layouts/](/frontend/readme/readme_layouts.md)
11. [pages/](/frontend/readme/readme_route.md)
12. .env

## .env

Create `.env` at the same level as the `app.vue`

```yaml
VITE_VERSION=1.1 (PRO)
VITE_BACKEND_BASE_URL=http://localhost:8081
```
