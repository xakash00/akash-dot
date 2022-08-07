import { watchQuotesWorker, watchSavedQuotesWorker } from "./quotesSaga";
import { all } from "redux-saga/effects";
import { watchSignupWorker } from "./authSaga";
import { watchFetchWeatherWorker } from "./weatherSaga";
import { watchFetchMemeWorker } from "./memeSaga";
import { watchFetchMarketPlaceWorker } from "./marketPlaceSaga";
import { watchFetchCategoryWorker } from "./categorySaga";
import { watchProductDetailsWorker } from "./productDetailsSaga";

export default function* rootSaga() {
  yield all([
    watchQuotesWorker(),
    watchSavedQuotesWorker(),
    watchSignupWorker(),
    watchFetchWeatherWorker(),
    watchFetchMemeWorker(),
    watchFetchMarketPlaceWorker(),
    watchFetchCategoryWorker(),
    watchProductDetailsWorker(),
  ]);
}
