import { combineReducers } from "redux";
import tweetReducer from "./quotesReducer";
import savedQuotesReducer from "./savedQuotesReducer";
import marketReducer from "./marketPlaceReducer";
const allReducers = combineReducers({
  tweetReducer,
  savedQuotesReducer,
  marketReducer
});
export default allReducers;
