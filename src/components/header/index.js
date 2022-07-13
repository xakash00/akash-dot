import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { authEmail } from "../../redux/config";
import { ThemedText } from "../../styledComponents/styles";
import "./header.css";
const Header = ({ toggleMode, mode }) => {
  console.log(toggleMode, mode);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    localStorage.getItem("userEmail") && setIsLogin(true);
  }, []);
  return (
    <div className="headerDiv">
      <nav
        style={
          mode === "light"
            ? { backgroundColor: "#fff" }
            : { backgroundColor: "#000" }
        }
        className="navbar navbar-expand-lg fixed-top header"
      >
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand" href="#">
            <ThemedText color={mode === "light" ? "#000" : "#fff"}>
              Akash.
            </ThemedText>
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/tweets"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  <ThemedText color={mode === "light" ? "#000" : "#fff"}>
                    Tweets
                  </ThemedText>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/favourite-tweets"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  <ThemedText color={mode === "light" ? "#000" : "#fff"}>
                    Favourite tweets
                  </ThemedText>
                </NavLink>
              </li>
              <li className="nav-item">
                <button className="btn" onClick={toggleMode}>
                  {mode === "light" ? (
                    <i style={{ color: "blue" }} className="ri-moon-fill"></i>
                  ) : (
                    <i style={{ color: "yellow" }} className="ri-sun-fill"></i>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
