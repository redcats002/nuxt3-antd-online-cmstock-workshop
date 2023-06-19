const startAt = Date.now();
let count = 0;
export default defineEventHandler((event) => {
  console.log("New request: " + getRequestURL(event));
  return {
    pageView: count++,
    startAt,
  };
});
