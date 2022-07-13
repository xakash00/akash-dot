import axios from "axios";

export const quotesApi = () => {
  return axios.get("https://type.fit/api/quotes");
};

export const savedQuotesApi = () => {
  return localStorage.getItem("localQuotesObj");
};
