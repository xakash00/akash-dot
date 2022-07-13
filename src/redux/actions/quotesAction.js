import { DELETE_QUOTE, QUOTES, SAVED_QUOTES } from "./types";

export const quotes = () => {
  return {
    type: QUOTES,
  };
};
export const savedQuotes = () => {
  return {
    type: SAVED_QUOTES,
  };
};

export const deleteQuote=()=>{
  return{
    type:DELETE_QUOTE
  }
}
