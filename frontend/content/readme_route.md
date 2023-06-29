## Routing (/pages)

Nuxt routing is based on vue-router and generates the routes from every component created in the pages/ directory, based on their filename.
pages/
--| about.vue
--| index.vue
--| stocks/
----| [id].vue
----| create.vue
----| edit/
------| [id].vue

Nuxt page will routing by using <NuxtPage/> components

```
~/app.vue

  <template>
    <NuxtPage />
  </template>
```
