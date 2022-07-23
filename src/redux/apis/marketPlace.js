import axios from "axios";

export const fakeStoreApi = () => {
    return axios.get("https://dummyjson.com/products?limit=100 ");
};

