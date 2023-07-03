# Google fonts

## 1. install google font @nuxtjs/google-fonts

`yarn add @nuxtjs/google-fonts`

## 2. config the googleFonts on nuxt.config.ts

```ts
export default defineNuxtConfig({
  googleFonts: {
    families: {
      Roboto: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
  },
});
```

## Usage fonts

## 3. setup css path on /assets

## 4. config the nuxt.config.ts

```ts
export default defineNuxtConfig({
  css: ["~/assets/main.css"],
});
```

ref: <https://nuxt.com/modules/google-fonts>
