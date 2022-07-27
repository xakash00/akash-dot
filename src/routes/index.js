import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
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
import ProtectedRoute from "./ProtectedRoute";
import Sidebar from "../modules/market-place/Sidebar";
import Products from "../modules/market-place/products";
import Cart from "../modules/market-place/cart";
import Orders from "../modules/market-place/orders";
const Index = () => {
  const location = useLocation();
  const currentKey = location.pathname.split("/")[1] || "/";
  const [mode, setMode] = useState("light");
  const localQuotesObj = []


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#09203f';
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
    }
  };

  useEffect(() => {
    window.localStorage.setItem("localQuotesObj", JSON.stringify(localQuotesObj));
  }, [])

  return (
    <>
      <Header toggleMode={toggleMode} mode={mode} />
      <TransitionGroup component="main" className="page-main">
        <CSSTransition key={currentKey} timeout={400} classNames="fade" appear>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route element={<Signup mode={mode} />} path="/sign-up" />
            </Route>
            <Route element={<Home mode={mode} />} path="/" />
            <Route element={<Tweets mode={mode} />} path="/tweets" />
            <Route
              element={<FavoriteTweets mode={mode} />}
              path="/favourite-tweets"
            />
            <Route element={<Sidebar mode={mode}><Outlet /></Sidebar>}>
              <Route element={<Products mode={mode} />} path="/market-place" />
              <Route element={<Cart />} path="/your-cart" />
              <Route element={<Orders />} path="/your-orders" />
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default Index;
