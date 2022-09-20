import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
const ReactSelection = () => {
  const formik = useFormik({
    initialValues: {
      selection: "",
      development: "",
    },
    validationSchema: Yup.object({
      selection: Yup.string().required("Required"),
      development: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const options = [
    { value: "developer", label: "Developer" },
    { value: "tester", label: "Tester" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="page">
      <form
        style={{ width: "30rem" }}
        className="m-auto"
        onSubmit={formik.handleSubmit}
      >
        <Select
          isSearchable={false}
          components={{
            IndicatorSeparator: () => null,
          }}
          name="selection"
          value={options.filter((option) => {
            return option.value === formik.values.selection;
          })}
          styles={customStyles}
          options={options}
          onChange={(e) => {
            let event = {
              target: { name: "selection", value: e.value },
            };
            formik.handleChange(event);
          }}
          onBlur={() => {
            formik.handleBlur({ target: { name: "selection" } });
          }}
        />
        {formik.errors.selection && formik.touched.selection && (
          <div className="d-flex mt-1 text-danger">
            {" "}
            <i className="ri-error-warning-line me-1"></i>
            <p>{formik.errors.selection}</p>
          </div>
        )}
        <div className="radio-but">
          <label className="labelText mt-3" htmlFor="inlineRadio2">
            Do you know development
          </label>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="development"
              id="inlineRadio1"
              value={1}
              onChange={formik.handleChange}
            />
            <label className="labelText" htmlFor="inlineRadio1">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="development"
              id="inlineRadio2"
              value={0}
              onChange={formik.handleChange}
            />
            <label className="labelText" htmlFor="inlineRadio2">
              No
            </label>
          </div>
        </div>
        {formik.errors.development && formik.touched.development && (
         <div className="d-flex mt-1 text-danger">
         {" "}
         <i className="ri-error-warning-line me-1"></i>
         <p>{formik.errors.development}</p>
       </div>
        )}
        <button className="btn ant-btn-primary mt-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactSelection;

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#fff",
    // match with the menu
    fontFamily: "Montserrat",
    borderRadius: "7px",
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "#47ccde" : "#e7dede",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#47ccde" : "#47ccde",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#47ccde" : null,
    borderBottom: "1px solid #F5F5F5",
    fontFamily: "Montserrat",
    "&:hover": {
      backgroundColor: state.isFocused ? "#ccc" : " #ccc",
    },
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#BFBFBF",
      fontFamily: "Montserrat",
      fontSize: "0.8rem",
    };
  },
  dropdownIndicator: (provided) => ({
    ...provided,
    svg: {
      fill: "#47ccde",
    },
  }),
};
