import { LOGIN } from "./types";

export const login = (email, password, onSuccess, onError) => {
  return {
    type: LOGIN,
    email,
    password,
    onSuccess,
    onError,
  };
};

export const signup = (name, email, password, onSuccess, onError) => {
  return {
    type: LOGIN,
    name,
    email,
    password,
    onSuccess,
    onError,
  };
};
