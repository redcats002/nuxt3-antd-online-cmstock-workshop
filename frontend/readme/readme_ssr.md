# README SERVER SIDE RENDERING vs CLIENT CALLING API

- best practice to kept apiKey, data to be more secure

- \*\*ensure that the API calls are executed on the server during the rendering process.

- This allows your application to pre-fetch data and include it in the initial server-rendered HTML, improving performance and SEO.

- Middleware Integration

- Separate API calls into dedicated services

- Configure API endpoints using environment variables

- Optimize API requests

- Centralized API handling

- GOOD DESIGN PATTERN

It's important to note that calling APIs directly from the client-side using methods like fetch or Axios is still a valid approach, especially for scenarios where the data is not needed during the SSR process or when you're building a single-page application (SPA) without server-side rendering requirements.

Ultimately, the decision to use the server/api directory or make direct API calls from the client depends on your specific use case, application requirements, and architectural considerations

## To call api in ssr to store in pinia we use middleware.server

middleware.server -(inject)-> pinia store -(state)-> client

[pinia](/frontend/readme/readme_pinia.md)

ref: <https://stackoverflow.com/questions/74672537/how-does-nuxt3-know-which-code-to-execute-on-the-server-side-vs-client-side>

This link provided which lifecycle hooks is running on server || client || both
ref: <https://nuxt.com/docs/api/advanced/hooks>
