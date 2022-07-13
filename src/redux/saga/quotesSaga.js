import { DELETE_QUOTE, QUOTES, SAVED_QUOTES } from "../actions/types";
import { takeLatest, call, put } from "redux-saga/effects";
import { quotesApi, savedQuotesApi } from "../apis/quotesApi";
import {
  QUOTES_LOADED,
  QUOTES_LOADING,
  QUOTES_LOADING_FAILED,
  SAVED_QUOTES_LOADING,
  SAVED_QUOTES_LOADING_FAILED,
  SAVE_QUOTES_LOADED,
} from "../actions/returnTypes";

export function* quotesWorker(action) {
  console.log(action, "quotesWorker");
  try {
    yield put({ type: QUOTES_LOADING });
    const response = yield call(quotesApi);
    console.log(response);
    if (response.status === 200) {
      yield put({ type: QUOTES_LOADED, data: response.data});
    } else {
      yield put({ type: QUOTES_LOADING_FAILED, data: "Something went wrong!" });
    }
  } catch (err) {
    console.log(err);
    yield put({ type: QUOTES_LOADING_FAILED, data: "Something went wrong!" });
  }
}
export function* savedQuotesWorker(action) {
  console.log(action, "savedQuotesWorker");
  try {
    yield put({ type: SAVED_QUOTES_LOADING });
    const response = yield call(savedQuotesApi);
    if (response) {
      yield put({ type: SAVE_QUOTES_LOADED, data: JSON.parse(response) });
    } else {
      yield put({
        type: SAVED_QUOTES_LOADING_FAILED,
        data: "Something went wrong !",
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: SAVED_QUOTES_LOADING_FAILED,
      data: "Something went wrong!",
    });
  }
}
export function* watchQuotesWorker() {
  yield takeLatest(QUOTES, quotesWorker);
}

export function* watchSavedQuotesWorker() {
  yield takeLatest(SAVED_QUOTES, savedQuotesWorker);
}
