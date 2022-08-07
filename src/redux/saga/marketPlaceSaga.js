import { takeLatest, call, put } from "redux-saga/effects";
import { MARKET_LOADED, MARKET_LOADING, MARKET_LOADING_FAILED } from "../actions/returnTypes";
import { FETCH_MARKET } from "../actions/types";
import { fakeStoreApi } from "../apis/marketPlace";


export function* fetchMarketWorker() {
    try {
        yield put({ type: MARKET_LOADING })
        const response = yield call(fakeStoreApi)
        if (response.status === 200 && response.statusText === "OK") {
            yield put({ type: MARKET_LOADED, data: response.data, products: response.data.products })
        } else {
            yield put({ type: MARKET_LOADING_FAILED, data: "Something went wrong!!!" })
        }
    } catch (err) {
        console.log(err)
        yield put({ type: MARKET_LOADING_FAILED, data: "Something went wrong!!!" })
    }
}

export function* watchFetchMarketPlaceWorker() {
    yield takeLatest(FETCH_MARKET, fetchMarketWorker)
}