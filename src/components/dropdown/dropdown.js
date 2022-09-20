import React, { useState } from "react";
import "./dropdown.css";
import { motion } from "framer-motion";
import { DropdownChoice, DropdownOptions } from "../../styledComponents/styles";
const Dropdown = ({ children, placeholder, data, onDelete }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState(placeholder);
  const [isHover, toggleHover] = React.useState(false);
  

  const color = ["#f50", "#2db7f5", "#87d068", "#108ee9"];

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.1,
        delay: 0.1,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <motion.div
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
      onFocus={() => toggleHover(true)}
      onFocusCapture={() => toggleHover(true)}
      className={`dropdown`}
    >
      <div className={`dropdown_btn`}>
        {data.length !== 0
          ? data
              .slice(0, 4)
              .map((item, index) => {
                return (
                  <DropdownChoice
                    bgColor={color[index]}
                    key={index}
                    className="card me-2"
                  >
                    <div className="d-flex align-items-center">
                      <div>{item}{console.log(item,index)}</div>
                      <i
                        onClick={() => onDelete(index)}
                        className="ri-close-line ms-2"
                      ></i>
                    </div>
                  </DropdownChoice>
                );
              })
          : "Select...."}
        <i
          className={isHover ? "ri-arrow-up-s-fill ms-auto" : "ri-arrow-down-s-fill ms-auto"}
        ></i>
      </div>
      <motion.div
        animate={isHover ? "enter" : "exit"}
        variants={subMenuAnimate}
        className={`dropdown_content mt-2`}
        style={{ display: isActive ? "block" : "none" }}
      >
        <div className={`item`}>{children}</div>
      </motion.div>
    </motion.div>
  );
};

export default Dropdown;
