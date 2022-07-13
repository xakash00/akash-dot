import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Tweets from "../modules/tweets";
import Home from "../modules/home";
import Signup from "../modules/signup";
import FavoriteTweets from "../modules/favourite-tweets";
import "react-toastify/dist/ReactToastify.css";
import {
  CSSTransition,
  Transition,
  TransitionGroup,
} from "react-transition-group";
import Header from "../components/header";
const Index = () => {
  const location = useLocation();
  const currentKey = location.pathname.split("/")[1] || "/";
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
    }
  };

  return (
    <>
      <Header toggleMode={toggleMode} mode={mode} />
      <TransitionGroup component="main" className="page-main">
        <CSSTransition key={currentKey} timeout={400} classNames="fade" appear>
          <Routes>
            <Route element={<Signup mode={mode} />} path="/sign-up" />
            <Route element={<Home mode={mode} />} path="/" />
            <Route element={<Tweets mode={mode} />} path="/tweets" />
            <Route
              element={<FavoriteTweets mode={mode} />}
              path="/favourite-tweets"
            />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default Index;
