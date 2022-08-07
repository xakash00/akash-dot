import { FETCH_CATEGORY, FETCH_MARKET, PRODUCT_DETAILS } from "./types";

export const marketPlace = () => {
  return {
    type: FETCH_MARKET,
  };
};

export const categoryAction = () => {
  return {
    type: FETCH_CATEGORY,
  };
};

export const productDetailsAction = (id, onSuccess, onError) => {
  return {
    type: PRODUCT_DETAILS,
    id,
    onSuccess,
    onError,
  };
};
