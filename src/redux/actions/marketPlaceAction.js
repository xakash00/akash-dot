import { FETCH_CATEGORY, FETCH_MARKET } from "./types";

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
