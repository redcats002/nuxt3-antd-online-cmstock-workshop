# README HTTPCLIENT 
axios vs $fetch

$fetch is the preferred way to make HTTP calls in Nuxt instead of @nuxt/http and @nuxtjs/axios that are made for Nuxt 2.
1.seamless and integrated solution for making API calls.
2.$fetch provides a consistent API across the server and client-side. 
3.Automatic Fetch Polyfill It eliminates the need for manually configuring polyfills for older browsers.
4. It automatically prefetches and resolves data during the SSR process, resulting in improved performance and reduced latency.
5. Composition API Support You can easily define reactive data and perform side effects within your components using the Composition API.

reference:
https://nuxt.com/docs/api/utils/dollarfetch