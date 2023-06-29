# Server Directory

## Nuxt automatically scans files inside these directories to register API and server handlers with HMR support:

- ~/server/api
- ~/server/routes
- ~/server/middleware

Each file should export a default function defined with defineEventHandler() or eventHandler() (alias).

The handler can directly return JSON data, a Promise or use event.node.res.end() to send a response.

Example: Create the /api/hello route with server/api/hello.ts file:

```ts
export default defineEventHandler((event) => {
  return {
    hello: "world",
  };
});
```

then you can call it via pages & components

```ts
<script setup>
const { data } = await useFetch('/api/hello')
</script>

<template>
  <pre>{{ data }}</pre>
</template>
```

## In our implement is we call use server to call to backend to store it in pinia then we use it to render in client

### (nuxt client) -> (pinia store) -> (nuxt server) -> (backend server)

ref: <https://nuxt.com/docs/guide/directory-structure/server#server-directory>
