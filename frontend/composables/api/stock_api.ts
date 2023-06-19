import { useFetcher } from "~/composables/useFetcher";
import { server } from "~/utils/constants";

// # BEST PRACTICE/SPECIFIC CASE Client->Server-RESTAPI
export const getProducts = () => {
  return $fetch("/api/products/all", {
    method: "GET",
  });
};

export const getProductByKeyword = (keyword: any) => {
  return $fetch(`/api/products/name?keyword=${keyword}`, {
    method: "GET",
  });
};

export const getProductById = (id: any) => {
  return $fetch(`/api/products/id?id=${id}`, {
    method: "GET",
  });
};

// # GOOD PRACTICE but not for nuxt3 api calling
// When we need pre-data-fetching to do seo or ensure data
// Client->Backend-RESTAPI
const { fetch } = useFetcher();

export const addProduct = (data: FormData) => {
  return fetch(server.PRODUCT_URL, {
    method: "POST",
    body: data,
  });
};

// in data have id
export const updateProduct = (data: any) => {
  return fetch(server.PRODUCT_URL, {
    method: "PUT",
    body: data,
  });
};
export const deleteProduct = (id: string) => {
  return fetch(`${server.PRODUCT_URL}/id/${id}`, {
    method: "DELETE",
  });
};
