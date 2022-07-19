import axios from "axios";

export const fakeStoreApi = () => {
    return axios.get("https://fakestoreapi.com/products");
};

