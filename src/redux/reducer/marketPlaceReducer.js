
import { MARKET_LOADED, MARKET_LOADING, MARKET_LOADING_FAILED } from "../actions/returnTypes";
import { marketInitState } from "../constants/marketPlaceInitState";

const marketReducer = (state = marketInitState, action) => {
    switch (action.type) {
        case MARKET_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
                products: {},
            };
        case MARKET_LOADED:
            return {
                ...state,
                loading: false,
                error: false,
                products: action.data,
            };
        case MARKET_LOADING_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                products: action.data,
            };
        default:
            return state;
    }
};

export default marketReducer;
