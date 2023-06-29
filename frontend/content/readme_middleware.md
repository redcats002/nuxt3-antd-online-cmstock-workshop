# Middleware directory

## Nuxt provides a customizable route middleware framework you can use throughout your application, ideal for extracting code that you want to run before navigating to a particular route.

> Route middleware run within the Vue part of your Nuxt app. Despite the similar name, they are completely different from server middleware, which are run in the Nitro server part of your app.>

## What order middleware runs in

naming [...slug].global.ts with .global keyword will automatic be global middleware

### global -> page defined

middleware/
--| analytics.global.ts
--| setup.global.ts
--| auth.ts

to define middleware in page

```ts
<script setup>
definePageMeta({
  middleware: [
    function (to, from) {
      // Custom inline middleware
    },
    'auth',
  ],
});
</script>

```

### in our app we use to check the secure route that user can router to

ref: <https://nuxt.com/docs/guide/directory-structure/middleware>
