import { useAuth } from "~/stores/useAuth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("client-middleware-global");
  const authStore = useAuth();

  // CHECK AUTH BUY LAYOUT
  authStore.restoreSession();
  if (to.meta.layout === "default") {
    // secure
    if (authStore.session.isLoggedIn) {
      return;
    } else {
      return await navigateTo("/login", { redirectCode: 301 });
    }
  } else {
    // unsecure
    if (authStore.session.isLoggedIn) {
      return await navigateTo("/stock", { redirectCode: 301 });
    } else {
      return;
    }
  }
});
