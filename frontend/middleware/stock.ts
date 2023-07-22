import { useAuth } from "~/stores/useAuth";
import { useStockStore } from "~/stores/useStock";

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("nuxtapp - stock middleware");
  const stockStore = useStockStore();
  await stockStore.loadProducts();
});
