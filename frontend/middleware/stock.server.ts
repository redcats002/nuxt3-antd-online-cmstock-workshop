import { useAuth } from "~/stores/useAuth";
import { useStockStore } from "~/stores/useStock";

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("client-middleware-global");
  const stockStore = useStockStore();
  await stockStore.loadProducts();
});
