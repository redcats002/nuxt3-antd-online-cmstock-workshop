export default defineEventHandler((event) => {
  console.log("ssr:log");
  console.log("New request: " + getRequestURL(event));
});
