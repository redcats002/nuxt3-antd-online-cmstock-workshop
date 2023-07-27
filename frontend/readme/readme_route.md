## Routing (/pages)

Nuxt routing is based on `vue-router` and generates the routes from every component created in the pages/ directory, based on their filename.
pages/
--| about.vue
--| index.vue
--| stocks/
----| [id].vue
----| create.vue
----| edit/
------| [id].vue

Nuxt page will routing by using <NuxtPage/> components

file `~/app.vue`

```vue
<template>
  <NuxtPage />
</template>
```

### Example demo route (~/pages/demo/index.vue)

#### routes/nested routes

pages/
--| demo/
----| index.vue `# localhost:3000/demo/`
----| create.vue `# localhost:3000/demo/create`
----| edit/ `# localhost:3000/demo/edit`
------| [id].vue `# localhost:3000/demo/edit/${id}`

#### Dynamic routes

The format for defining dynamic routes in Nuxt 3 is slightly different from Nuxt 2, so you may need to rename some of the files within `pages/.`

- Define a dynamic route parameter you now use `[id].vue`
- Define a catch-all route, you now use `[...slug].vue.`

Example:

```yaml
- URL: /users
- Page: /pages/users/index.vue

- URL: /users/some-user-name
- Page: /pages/users/[user].vue
- Usage: params.user

- URL: /users/some-user-name/edit
- Page: /pages/users/[user]/edit.vue
- Usage: params.user

- URL: /users/anything-else
- Page: /pages/users/[...slug].vue
- Usage: params.slug
```

#### Navigation

```vue
#perform with NuxtLink component
<template>
  <NuxtLink to="/about">About</NuxtLink>
</template>
#perform with useRouter() composable
<script lang="ts" setup>
const route = useRoute();
route.push("/about");
</script>
```

#### Parameters

using `useRoute()` composable

```ts
const route = useRoute();
const id = route.params.id;
```

#### Middleware

Each page can define their own middleware by `definePageMeta`

file `~/middleware/auth.ts`

```ts
export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (isAuthenticated() === false) {
    return navigateTo("/login");
  }
});
```

file `~/pages/dashboard.vue`

```vue
<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <h1>Welcome to your dashboard</h1>
</template>
```

#### Validation

The `validate` property accepts the route as an argument

```vue
<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    return /^\d+$/.test(route.params.id);
  },
});
</script>
```

Read more in the documentation
[Migration pages&layouts](https://nuxt.com/docs/migration/pages-and-layouts#page-and-layout-transitions)
[router](https://nuxt.com/docs/getting-started/routing#routing)
[universal router](https://nuxt.com/docs/examples/routing/universal-router#universal-router)
