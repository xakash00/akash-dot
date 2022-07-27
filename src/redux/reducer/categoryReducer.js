import {
  CATEGORY_FAILED_LOADING,
  CATEGORY_LOADED,
  CATEGORY_LOADING,
} from "../actions/returnTypes";
import { categoryInitState } from "../constants/categoryInitState";

const categoryReducer = (state = categoryInitState, action) => {
  switch (action.type) {
    case CATEGORY_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        category: [],
      };
    case CATEGORY_LOADED:
      return {
        ...state,
        loading: false,
        error: false,
        category: action.category,
      };
    case CATEGORY_FAILED_LOADING:
      return {
        ...state,
        loading: false,
        error: true,
        category: action.category,
      };
    default:
      return state;
  }
};

export default categoryReducer;
