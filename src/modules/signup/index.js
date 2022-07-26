import React, { useState } from "react";
import Img from "../../assets/signin.svg";
import "./auth.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Spinner } from "react-bootstrap";
import { ThemedText } from "../../styledComponents/styles";
import * as animationData from "../../assets/lottie/auth.json";
import Lottie from "react-lottie";
import { useMediaQuery } from 'react-responsive'
const Signup = ({ mode }) => {
  const [loading, setLoading] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem("userName", values.name);
        localStorage.setItem("userEmail", values.email);
        navigate("/");
        setLoading(false);
        resetForm();
      }, 800);
    },
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="mt-5">
              <Lottie
                options={defaultOptions}
                height={isTabletOrMobile ? "10rem" : "30rem"}
                width={isTabletOrMobile ? "10rem" : "40rem"}
              />
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="text-align-left mt-5">
              <h4 className="heading">Sign Up.</h4>
              <form onSubmit={formik.handleSubmit}>
                <label className="mt-3 formLabel" htmlFor="name">
                  <ThemedText color={mode === "light" ? "#000" : "#fff"}>
                    Name
                  </ThemedText>
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control authInput"
                  placeholder="Enter Your Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name && (
                  <p className="d-flex text-danger dangerText">
                    <i className="ri-error-warning-fill me-1"></i>
                    {formik.errors.name}
                  </p>
                )}
                <label className="mt-3 formLabel" htmlFor="email">
                  <ThemedText color={mode === "light" ? "#000" : "#fff"}>
                    Email
                  </ThemedText>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control authInput"
                  placeholder="Enter Your Email Address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="d-flex text-danger dangerText">
                    <i className="ri-error-warning-fill me-1"></i>
                    {formik.errors.email}
                  </p>
                )}

                <label className="mt-3 formLabel" htmlFor="password">
                  <ThemedText color={mode === "light" ? "#000" : "#fff"}>
                    Password
                  </ThemedText>
                </label>
                <div className="d-flex align-items-center">
                  <input
                    type="password"
                    id="password"
                    className="form-control authInput"
                    placeholder="Enter your Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  <i className="ri-eye-fill eyeIcon"></i>
                </div>

                {formik.errors.password && formik.touched.password && (
                  <p className="d-flex text-danger dangerText">
                    <i className="ri-error-warning-fill me-1"></i>
                    {formik.errors.password}
                  </p>
                )}
                {loading === true ? (
                  <button
                    type="button"
                    disabled
                    className="mt-5 text-center disabled disabledBtn"
                  >
                    <Spinner animation="border" size="sm" color="#00adb5" />
                  </button>
                ) : (
                  <button type="submit" className="mt-5 text-center authBtn">
                    Sign up
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
