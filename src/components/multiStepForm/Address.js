import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import { Label } from "../../styledComponents/styles";
import { formStyles } from "../../helperFuncs.js";
const Address = () => {
  const { address, setAddress, next, prev } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={address}
      onSubmit={(values) => {
        setAddress(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.address1) errors.address1 = "Address is required";
        if (!values.city) errors.city = "City is required";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={"details__wrapper"}>
            <div className={`form__item ${errors.address1 && "input__error"}`}>
              <Label>Address-1 *</Label>
              <Input style={formStyles} name={"address1"} />
              <p className={"error__feedback"}>{errors.address1}</p>
            </div>
            <div className={`form__item`}>
              <Label>Address-2</Label>
              <Input style={formStyles} name={"address2"} />
            </div>
            <div className={`form__item ${errors.city && "input__error"}`}>
              <Label>City *</Label>
              <Input style={formStyles} name={"city"} />
              <p className={"error__feedback"}>{errors.city}</p>
            </div>
            <div
              className={
                "form__item button__items d-flex justify-content-between"
              }
            >
              <Button type={"default"} onClick={prev}>
                Back
              </Button>
              <Button type={"primary"} onClick={handleSubmit}>
                Next
              </Button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default Address;
