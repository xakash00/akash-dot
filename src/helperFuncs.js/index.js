export const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#fff",
    // match with the menu
    fontFamily: "Montserrat",
    borderRadius: "5px",
    marginTop:"0.5rem",
    marginBottom:"0.3rem",
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "#47ccde" : "#fff",
    // Removes weird border around container
    boxShadow: '0px 0px 5px #ccc !important',
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

export const formStyles = {
  border: "none",
  boxShadow: "0px 0px 5px #ccc",
  borderRadius: "5px",
  marginTop:"0.5rem",
  marginBottom:"0.3rem",
};
