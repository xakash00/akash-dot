import { call, takeLatest } from "redux-saga/effects";
import { PRODUCT_DETAILS } from "../actions/types";
import { productDetailsApi } from "../apis/marketPlace";

export function* productDetailsWorker(action) {
  try {
    const response = yield call(productDetailsApi, action.id);
    if (response.status === 200 && response.statusText === "OK") {
      yield action.onSuccess(response.data);
    } else {
      yield action.onError("Something went wrong !!!");
    }
  } catch (err) {
    console.log(err);
    yield action.onError("Something went wrong !!!");
  }
}

export function* watchProductDetailsWorker() {
  yield takeLatest(PRODUCT_DETAILS, productDetailsWorker);
}
