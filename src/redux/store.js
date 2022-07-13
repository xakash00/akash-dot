import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducer/index";
import rootSaga from "./saga/rootSaga";
let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    reducers: rootReducer,
  },
  middleware: middleware,
});

sagaMiddleware.run(rootSaga);
