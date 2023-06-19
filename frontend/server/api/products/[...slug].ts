import { createRouter, defineEventHandler, useBase } from "h3";
import { useFetcher } from "../../../composables/useFetcher";
import { server } from "../../../utils/constants";

const router = createRouter();
const { fetch } = useFetcher();
router.get(
  "/all",
  defineEventHandler(async (event) => {
    try {
      const products = await fetch(server.PRODUCT_URL);
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      return {
        error: "Failed to fetch products",
      };
    }
  })
);
router.get(
  "/name",
  defineEventHandler(async (event) => {
    try {
      const query = getQuery(event);
      const keyword = query.keyword;
      console.log(keyword);
      const products = await fetch(`${server.PRODUCT_URL}/name/${keyword}`);
      return products;
    } catch (error) {
      return {
        error: "Failed to fetch products",
      };
    }
  })
);
router.get(
  "/id",
  defineEventHandler(async (event) => {
    try {
      const query = getQuery(event);
      const id = query.id;
      const products = await fetch(`${server.PRODUCT_URL}/id/${id}`);
      return products;
    } catch (error) {
      return {
        error: "Failed to fetch product",
      };
    }
  })
);

export default useBase("/api/products", router.handler);
