export default defineEventHandler((event) => {
  // Log to monitoring cookies from ssr side
  console.log("ssr-middleware");
  const cookies = parseCookies(event);
  console.log(cookies);

  // TODO #to continues implement it. it possible to fetch getAuth,getProfile
  // TODO -via this instead of store plain-text in cookies/localStorage. By cookie just store only token
});
