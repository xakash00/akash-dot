import { combineReducers } from "redux";
import tweetReducer from "./quotesReducer";
import savedQuotesReducer from "./savedQuotesReducer";
import marketReducer from "./marketPlaceReducer";
import categoryReducer from "./categoryReducer";
const allReducers = combineReducers({
  tweetReducer,
  savedQuotesReducer,
  marketReducer,
  categoryReducer,
});
export default allReducers;
