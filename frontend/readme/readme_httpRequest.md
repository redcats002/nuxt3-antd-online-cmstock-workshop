# README HTTPCLIENT 
axios vs $fetch

## $fetch is the preferred way to make HTTP calls in Nuxt instead of @nuxt/http and @nuxtjs/axios that are made for Nuxt 2.
1. seamless and integrated solution for making API calls.
2. $fetch provides a consistent API across the server and client-side. 
3. Automatic Fetch Polyfill It eliminates the need for manually configuring polyfills for older browsers.
4. It automatically prefetches and resolves data during the SSR process, resulting in improved performance and reduced latency.
5. Composition API Support You can easily define reactive data and perform side effects within your components using the Composition API.

## $fetch API is using ofetch, with key features including:
Automatic parsing of JSON responses (with access to raw response if needed)
Request body and params are automatically handled, with correct Content-Type headers

Here's a summary of the main differences between useFetch and $fetch:

- $fetch is a global method, while useFetch is a composable function from the Composition API.
- $fetch is used directly within components, layouts, or pages, while useFetch is used within a composition function.
- $fetch supports server-side rendering (SSR) and client-side hydration out of the box, while useFetch needs to be used in conjunction with the fetch method to handle data fetching.
- $fetch provides a simplified interface for making HTTP requests, while useFetch provides a reactive way to fetch and manage data within a component.
- $fetch supports middleware and server middleware in Nuxt.js 3, while useFetch is independent of the middleware system and can be used with or without it.

Both $fetch and useFetch can be used to fetch data from external APIs, but they have different usage patterns and serve different purposes. You can choose the one that best fits your needs and the development style of your Nuxt.js 3 project.

reference:
https://nuxt.com/docs/api/utils/dollarfetch