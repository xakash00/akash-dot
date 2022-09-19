import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import useToggle from "../../helperFuncs.js/useToggle";
import { useMediaQuery } from "react-responsive";
import Dropdown from "../../components/dropdown/dropdown";
import { DropdownOptions } from "../../styledComponents/styles";
const Home = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1065px)" });
  const [isTextChanged, setIsTextChanged] = useToggle();
  const [data, setData] = useState([]);
  const handleAdd = (text) => {
    setData([...data, text]);
  };
  const onDelete = (myId) => {
    const updates = data.filter((each, idx) => idx !== myId);
    setData(updates);
  };
  return (
    <div className="page">
      <button onClick={setIsTextChanged}>
        {isTextChanged ? "Toggled" : "Click to Toggle"}
      </button>
      <Dropdown placeholder={"Select..."} data={data} onDelete={onDelete}>
        <div className="row">
          {numbers.map((item, index) => {
            return (
              <DropdownOptions
                key={index}
                onClick={(e) => {
                  handleAdd(e.target.textContent);
                }}
                className="col-6 me-3"
                role="alert"
              >
                {item}
              </DropdownOptions>
            );
          })}
        </div>
      </Dropdown>
      ;
    </div>
  );
};

export default Home;

const numbers = [
  "Alpha",
  "Beta",
  "Gamma",
  "Delta",
  "Epsilon",
  "Zeta",
  "Eta",
  "Theta",
  "Iota",
  "Kappa",
  "Lambda",
  "Mu",
  "Nu",
  "Xi",
  "Omicron",
  "Pi",
  "Rho",
  "Sigma",
  "Tau",
  "Upsilon",
  "Phi",
  "Chi",
  "Psi",
  "Omega",
];
