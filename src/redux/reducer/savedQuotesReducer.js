import {
  QUOTES_LOADED,
  QUOTES_LOADING,
  QUOTES_LOADING_FAILED,
  SAVED_QUOTES_LOADING,
  SAVED_QUOTES_LOADING_FAILED,
  SAVE_QUOTES_LOADED,
} from "../actions/returnTypes";
import { savedtweetInitState } from "../constants/tweetInitState";

const savedQuotesReducer = (state = savedtweetInitState, action) => {
  switch (action.type) {
    case SAVED_QUOTES_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        data: {},
      };
    case SAVE_QUOTES_LOADED:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
      case SAVED_QUOTES_LOADING_FAILED:
        return {
          ...state,
          loading: false,
          error: true,
          data: action.data,
        };
    default:
      return state;
  }
};

export default savedQuotesReducer;
