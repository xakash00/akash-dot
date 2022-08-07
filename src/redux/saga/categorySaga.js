import { takeLatest, call, put } from "redux-saga/effects";
import { FETCH_CATEGORY } from "../actions/types";
import { categoryApi } from "../apis/marketPlace";
import {
  CATEGORY_FAILED_LOADING,
  CATEGORY_LOADED,
  CATEGORY_LOADING,
} from "../actions/returnTypes";

export function* fetchCategoryWorker() {
  try {
    yield put({ type: CATEGORY_LOADING });
    const response = yield call(categoryApi);
    if (response.status === 200 && response.statusText === "OK") {
      yield put({ type: CATEGORY_LOADED, category: response.data });
    } else {
      yield put({
        type: CATEGORY_FAILED_LOADING,
        category: "Something went wrong!!!",
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: CATEGORY_FAILED_LOADING,
      category: "Something went wrong!!!",
    });
  }
}

export function* watchFetchCategoryWorker() {
  yield takeLatest(FETCH_CATEGORY, fetchCategoryWorker);
}
