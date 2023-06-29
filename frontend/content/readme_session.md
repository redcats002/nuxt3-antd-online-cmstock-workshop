# Session Auth

## LocalStorage vs useCooke

Instead of LocalStorage that work only Client side, nuxt3 have SSR that determine which component should rendering
So, to maintain and reuseable of session/state nuxt3 provide useCookie composables
to store token in both side

## useCookie, an SSR-friendly composable to read and write cookies.

`const cookie = useCookie(name, options)`

👉useCookie only works during setup or Lifecycle Hooks.
😌useCookie ref will automatically serialize and deserialize cookie value to JSON.

references:
<https://nuxt.com/docs/api/composables/use-cookie>
