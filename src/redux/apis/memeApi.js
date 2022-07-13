import axios from "axios";

export const memeApi = () => {
  return axios.get("https://meme-api.herokuapp.com/gimme");
};
