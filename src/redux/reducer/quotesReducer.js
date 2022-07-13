import {
  QUOTES_LOADED,
  QUOTES_LOADING,
  QUOTES_LOADING_FAILED,
} from "../actions/returnTypes";
import { tweetInitState } from "../constants/tweetInitState";

const tweetReducer = (state = tweetInitState, action) => {
  switch (action.type) {
    case QUOTES_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        tweets: {},
      };
    case QUOTES_LOADED:
      return {
        ...state,
        loading: false,
        error: false,
        tweets: action.data,
      };
    case QUOTES_LOADING_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        tweets: action.data,
      };
    default:
      return state;
  }
};

export default tweetReducer;
