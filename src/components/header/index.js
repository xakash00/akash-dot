import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { authEmail } from "../../redux/config";
import { HamburgerArrow } from "react-animated-burgers";
import { Button, Sidebar, ThemedText } from "../../styledComponents/styles";
import "./header.css";
const Header = ({ toggleMode, mode }) => {
  console.log(toggleMode, mode);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    localStorage.getItem("userEmail") && setIsLogin(true);
  }, []);
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="headerDiv">
      <nav
        className={mode === 'light' ? "navbar navbar-expand-lg fixed-top header" : "navbar navbar-expand-lg fixed-top headerActive"}
      >
        {mobile && (
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand" href="#">
              <ThemedText color={mode === "light" ? "#000" : "#fff"}>
                Akash.
              </ThemedText>
            </NavLink>
            <Button onClick={() => setSidebar(!sidebar)}>
              <HamburgerArrow
                barColor={mode === 'light' ? "#000" : '#fff '}
                buttonWidth={25}
                isActive={sidebar}
              />
            </Button>
          </div>
        )}
        {!mobile && (
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand" href="#">
              <ThemedText color={mode === "light" ? "#000" : "#fff"}>
                Akash.
              </ThemedText>
            </NavLink>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <NavLink
                    to="/market-place"
                    className="nav-link"
                    aria-current="page"
                    href="#"
                  >
                    <ThemedText color={mode === "light" ? "#000" : "#fff"}>
                      Market Place
                    </ThemedText>
                  </NavLink>
                </li>
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
                      <i
                        style={{ color: "yellow" }}
                        className="ri-sun-fill"
                      ></i>
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
      <Sidebar
        className={mode==="light"?"sidebarLight":"sidebarDark"}
        sidebar={sidebar === true ? "0%" : "-100%"}

      >
        <div style={{ marginTop: "10rem" }}>
          <ul onClick={() => setSidebar(!sidebar)}>
            <li>
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
      </Sidebar>
    </div>
  );
};

export default Header;
