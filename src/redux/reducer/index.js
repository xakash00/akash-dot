import { combineReducers } from "redux";
import tweetReducer from "./quotesReducer";
import savedQuotesReducer from "./savedQuotesReducer";
import memeReducer from "./memeReducer";
const allReducers = combineReducers({
  tweetReducer,
  savedQuotesReducer,
  memeReducer,
});
export default allReducers;
