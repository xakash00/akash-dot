import { FETCH_WEATHER } from "../actions/types";
import { call, takeLatest } from "redux-saga/effects";
import { weatherApi } from "../apis/weatherApi";

export function* fetchWeatherWorker(action) {
  console.log(action, "weather");
  try {
    const response = yield call(weatherApi, action.city);
    console.log(response);
    if (response.status === 200) {
      yield action.onSuccess(response.data);
    } else {
      yield action.onError("Somethin went wrong !");
    }
  } catch (err) {
    console.log(err);
    yield action.onError("Somethin went wrong !");
  }
}

export function* watchFetchWeatherWorker() {
  yield takeLatest(FETCH_WEATHER, fetchWeatherWorker);
}
