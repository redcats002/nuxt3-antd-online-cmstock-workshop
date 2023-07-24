import { useAuth } from "~/store/auth";
import { useStockStore } from "~/store/stock";

export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("nuxtapp - stock middleware");
  const stockStore = useStockStore();
  await stockStore.loadProducts();
});
