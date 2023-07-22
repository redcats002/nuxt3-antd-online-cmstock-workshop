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

For **TypeScript Vue Plugin (Volar)** may make some $ global ref is error recommend to use only **TypeScript Vue Plugin (Volar)**

## Packages (Install in order)

### dependencies

```bash
yarn add @ant-design/icons-vue ant-design-vue @nuxtjs/tailwindcss pinia @pinia/nuxt h lodash dayjs-nuxt chart.js vue-chart-3 url-join @vueuse/nuxt
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

## Then copy folder from prototype in order

[directory](/frontend//readme/readme_directory.md)

1. [assets/](/frontend/readme/readme_assets.md)
2. utils/
3. models/
4. plugins/
5. [composables/](/frontend/readme/readme_composables.md)
6. [stores/](/frontend/readme/readme_pinia.md)
7. [components/](/frontend/readme/readme_components.md)
8. [middleware/](/frontend/readme/readme_middleware.md)
9. [layouts/](/frontend/readme/readme_layouts.md)
10. [pages/](/frontend/readme/readme_route.md)
11. [server/](/frontend/readme/readme_server.md)
