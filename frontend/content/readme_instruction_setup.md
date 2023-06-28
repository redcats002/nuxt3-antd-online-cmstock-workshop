# README SETUP

alias create

npx nuxi@latest init <project-name>

cd <project-name>

yarn / npm

yarn dev / npm run dev

## Route

Nuxt routing is based on vue-router and generates the routes from every component created in the pages/ directory, based on their filename.
pages/
--| about.vue
--| index.vue
--| posts/
----| [id].vue

## Nuxt3 provide Auto imports

Nuxt 3 adopts a minimal friction approach, meaning wherever possible /components and /composables are auto-imported.

## Components

The components/ directory is where you put all your Vue components which can then be imported inside your pages or other components
| components/
--| TheHeader.vue
--| TheFooter.vue

ref:https://nuxt.com/docs/guide/directory-structure/components#components-directory

## Layouts

Nuxt provides a customizable layouts framework you can use throughout your application, ideal for extracting common UI or code patterns into reusable layout components.

Layouts are used by adding <NuxtLayout> to your app.vue, and either setting a layout property as part of your page metadata (if you are using the ~/pages integration), or by manually specifying it as a prop to <NuxtLayout>. (Note: The layout name is normalized to kebab-case, so someLayout becomes some-layout.)

ref:https://nuxt.com/docs/guide/directory-structure/layouts

-| layouts/
---| default.vue
---| custom.vue

~/app.vue
<template>
<NuxtLayout :name="layout">
<NuxtPage />
</NuxtLayout>
</template>

for define page meta (in this case is layout) we use definePageMeta()

<script>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: "custom",
});


## Extension

-

## Packages

-
