import React, { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input, InputNumber } from "formik-antd";
import MultiStepFormContext from "./MultiStepFormContext";
import Select from "react-select";
import { customStyles, formStyles } from "../../helperFuncs.js";
import { Field } from "formik";
import { Label } from "../../styledComponents/styles";
const Details = () => {
  const { details, setDetails, next } = useContext(MultiStepFormContext);

  const options = [
    { value: "developer", label: "Developer" },
    { value: "tester", label: "Tester" },
    { value: "other", label: "Other" },
  ];
  return (
    <Formik
      initialValues={details}
      onSubmit={(values) => {
        setDetails(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) errors.name = "Name is required";
        if (!values.age) errors.age = "Age is required";
        if (values.age > 90) errors.age = "Are you sure you're human?";
        if (!values.profession) errors.profession = "Profession is required";
        if (/^[0-9]+$/.test(values.profession))
          errors.profession =
            "Profession does not require numbers or special characters";
        if (!values.checked) errors.checked = "Select atleast one option";
        return errors;
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, errors, values }) => {
        return (
          <div className={"details__wrapper"}>
            <div className={`form__item ${errors.name && "input__error"}`}>
              <Label>Name *</Label>
              <Input style={formStyles} name={"name"} />
              <p className={"error__feedback"}>{errors.name}</p>
            </div>
            <div className={`form__item ${errors.age && "input__error"}`}>
              <Label>Age *</Label>
              <br />
              <InputNumber  style={formStyles} name={"age"} min={0} />
              <p className={"error__feedback"}>{errors.age}</p>
            </div>
            <div
              className={`form__item ${errors.profession && "input__error"}`}
            >
              <Label>Profession *</Label>
              <Select
                isSearchable={false}
                components={{
                  IndicatorSeparator: () => null,
                }}
                name="profession"
                value={options.filter((option) => {
                  return option.value === values.profession;
                })}
                styles={customStyles}
                options={options}
                onChange={(e) => {
                  let event = {
                    target: { name: "profession", value: e.value },
                  };
                  handleChange(event);
                }}
                onBlur={() => {
                  handleBlur({ target: { name: "profession" } });
                }}
              />
              <p className={"error__feedback"}>{errors.profession}</p>
            </div>
            <div className="row">
            <Label className="mb-2">Choose Any One </Label>

              <Label className="col-3">
                <Field type="checkbox" name="checked" value="One" />
                One
              </Label>
              <Label className="col-3">
                <Field type="checkbox" name="checked" value="Two" />
                Two
              </Label>
              <Label className="col-3">
                <Field type="checkbox" name="checked" value="Three" />
                Three
              </Label>
            </div>
            <p className={"error__feedback"}>{errors.checked}</p>

            <div
              className={"form__item button__items d-flex justify-content-end"}
            >
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
export default Details;


