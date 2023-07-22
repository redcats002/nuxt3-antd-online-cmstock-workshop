# Deployment

## For Nuxt 3.x (FRONTEND)

A Nuxt application can be deployed on a Node.js server, pre-rendered for static hosting, or deployed to serverless or edge (CDN) environments.

It seems like you are trying to import a named export from a CommonJS module, which may not support all module.exports as named exports. You can try to import the default export instead, for example:

```ts
import lodash from "lodash";
const debounce = lodash.debounce;
```

### options to deploy w/ nitro

- 1. Node.js Server
- 2. Static Hosting
- 3. Presets

## For expressJS (BACKEND)

`NODE_ENV=production`
