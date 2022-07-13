import {
  MEME_LOADED,
  MEME_LOADING,
  MEME_LOADING_FAILED,
} from "../actions/returnTypes";
import { memInitState } from "../constants/memeInitState";

const memeReducer = (state = memInitState, action) => {
  switch (action.type) {
    case MEME_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        data: {},
      };
    case MEME_LOADED:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case MEME_LOADING_FAILED:
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

export default memeReducer;
