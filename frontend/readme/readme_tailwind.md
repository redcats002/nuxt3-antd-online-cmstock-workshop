# Tailwind CSS

Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS.

## 1. install Tailwindcss

`yarn add @nuxtjs/tailwindcss`

## 2. Add it to your modules section in your `nuxt.config`:

`nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
});
```

That's it! You can now use Tailwind classes in your Nuxt app ✨

## Tailwind Files

To complete running yarn dev, this module will look for these files:

- `~/assets/css/tailwind.css`
- `~/tailwind.config.{js,cjs,mjs,ts}`

If they don't exist, the module will inject a basic configuration for each one so you don't have to create these files.

**But if you need those files to configuration**

file `~/assets/css/tailwind.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

file `~/tailwind.config.{js,cjs,mjs,ts}`

`npx tailwindcss init`

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 3. (Optional) for default configuration in `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
});
```

## 4. (Recommend) to config tailwind.config file for

- prefix
- important

```ts
module.exports = {
  // ...
  prefix: "tw-",
  important: true,
};
```

ref: <https://nuxt.com/modules/tailwindcss> , <https://tailwindcss.nuxtjs.org/#quick-start>
