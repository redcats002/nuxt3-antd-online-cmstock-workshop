import { useAuth } from "~/stores/useAuth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("client-middleware-global");
  const authStore = useAuth();

  // CHECK AUTH BUY LAYOUT
  authStore.restoreSession();
  if (to.meta.layout === "default") {
    // secure
    if (authStore.session.isLoggedIn) {
      if (to.fullPath == "/") return await navigateTo("/stock");
      return;
    } else {
      // { redirectCode: 301 }
      return await navigateTo("/login");
    }
  } else {
    // unsecure
    if (authStore.session.isLoggedIn) {
      return await navigateTo("/stock");
    } else {
      return;
    }
  }
});
