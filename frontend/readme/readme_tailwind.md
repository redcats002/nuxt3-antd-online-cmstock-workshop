# Tailwind CSS

Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS.

## 1. install Tailwindcss

`yarn add @nuxtjs/tailwindcss`

## 2. Add it to your modules section in your nuxt.config:

```ts
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
});
```

That's it! You can now use Tailwind classes in your Nuxt app ✨

## Tailwind Files

When running nuxt dev, this module will look for these files:

- ./assets/css/tailwind.css
- ./tailwind.config.{js,cjs,mjs,ts}

<!-- ~/assets/css/tailwind.css -->

```ts
@tailwind base;
@tailwind components;
@tailwind utilities;
```

If they don't exist, the module will inject a basic configuration for each one so you don't have to create these files.

**But if you need those file to config run**

`npx tailwindcss init`

## 3. (Optional) for default configuration in nuxt.config.js

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

## 4. Recommend to config tailwind.config file for

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
