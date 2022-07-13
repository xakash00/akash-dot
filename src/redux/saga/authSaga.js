import { SIGNUP } from "../actions/types";
import { takeLatest } from "redux-saga/effects";

export function* signupWorker(action) {
  console.log(action, "signupWorker");
  try {
    if (action.name && action.email && action.password) {
      localStorage.setItem("name", action.name);
      localStorage.setItem("email", action.email);
      localStorage.setItem("password", action.password);
      yield action.onSuccess("Signup Successful");
    } else if (!action.name && !action.email && !action.password) {
      yield action.onError("Someting went wrong !");
    }
  } catch (err) {
    console.log(err);
    yield action.onError("Someting went wrong !");
  }
}

export function* watchSignupWorker() {
  yield takeLatest(SIGNUP, signupWorker);
}
