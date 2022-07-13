import { FETCH_WEATHER } from "./types";

export const weather = (city, onSuccess, onError) => {
  return {
    type: FETCH_WEATHER,
    city,
    onSuccess,
    onError,
  };
};
