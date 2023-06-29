import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SpacedText from "../SpacedText/SpacedText";
import "./Dropdown.css";
import "bootstrap/dist/css/bootstrap.css";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdownContainer">
      <div className={`dropdown ${isOpen ? "open" : ""}`}>
        <h1 className="dropdown-title" onClick={toggleDropdown}>
          {title}
          <span className={`dropdown-arrow ${isOpen ? "up" : "down"}`} />
        </h1>
        {isOpen ? (
          <div className="dropdown-active">  <SpacedText content={content}/> </div>
        ) : (
          <div className="dropdown-content"><SpacedText content={content}/></div>
        )}
      </div>
    </div>
  );
};
export default Dropdown;
