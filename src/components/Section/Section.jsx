import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SpacedText from "../SpacedText/SpacedText";
import "./Section.css";
import "bootstrap/dist/css/bootstrap.css";

const Section = ({ title, content }) => {
  return (
    <>
      <div className="sectionContainer">
        <div className="section">
          <h1>{title}</h1>
          <div>{content}</div>
        </div>
      </div>
    </>
  );
};
export default Section;
