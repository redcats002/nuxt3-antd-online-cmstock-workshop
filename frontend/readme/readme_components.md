## Nuxt3 provide Auto imports

Nuxt 3 adopts a minimal friction approach, meaning wherever possible /components and /composables are auto-imported.

## Components (/components)

The components/ directory is where you put all your Vue components which can then be imported inside your pages or other components
| components/
--| MyTable.vue
--| MyCard.vue
----| layouts/
------| TheHeader.vue
------| TheFooter.vue

ref: <https://nuxt.com/docs/guide/directory-structure/components#components-directory>
