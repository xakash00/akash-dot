import axios from "axios";

export const fakeStoreApi = () => {
  return axios.get("https://dummyjson.com/products?limit=100 ");
};

export const categoryApi = () => {
  return axios.get("https://dummyjson.com/products/categories");
};

export const productDetailsApi = (id) => {
  return axios.get(`https://dummyjson.com/products/${id}`);
};
