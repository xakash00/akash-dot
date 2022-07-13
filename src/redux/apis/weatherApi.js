import axios from "axios";

export const weatherApi = (city) => {
  return axios.get(
    `http://api.weatherapi.com/v1/current.json?key=81a1a281312d45c2af791207211508&q=${city}&aqi=no`
  );
};
