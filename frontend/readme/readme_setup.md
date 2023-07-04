# README SETUP

## New Project

`npx nuxi@latest init <project-name>`

`cd <project-name>`

`yarn / npm`

`yarn dev / npm run dev`

## Alias

in Nuxt3 you can use "~" to be alias as root

ref: <https://nuxt.com/docs/guide/going-further/layers#basic-example>

## Extension

-Vue Volar extension Pack
-Vue VSCode Snippets

For **TypeScript Vue Plugin (Volar)** may make some $ global ref is error recommend to use only **TypeScript Vue Plugin (Volar)**

## Packages (Install in order)

### dependencies

```ts
yarn add @ant-design/icons-vue ant-design-vue @nuxtjs/tailwindcss pinia @pinia/nuxt h lodash dayjs-nuxt chart.js vue-chart-3 url-join
```

### devDependencies

```ts
yarn add @types/lodas
```

- [AntDesign](/frontend/readme/readme_antd.md)
- [TailwindCss](/frontend/readme/readme_tailwind.md)
- [Pinia](/frontend/readme/readme_pinia.md)
- [ChartJS](/frontend//readme/readme_vuechart3.md)

## Then copy folder from prototype in order

1. assets/
2. utils/
3. models/
4. plugins/
5. composables/
6. stores/
7. components/
8. layouts/
9. pages/
