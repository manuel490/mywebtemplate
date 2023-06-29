import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Section/Section";
import SpacedText from "../../components/SpacedText/SpacedText";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import "../../index.css";
import "./About.css";
import { createElement } from "react";

const About = () => {
  const { t } = useTranslation();

  const content = React.createElement;

  const AboutContent = () => {
    return (
      <>
        <div className="aboutimage">
          <SpacedText content={t("ABOUTCONTENT")}></SpacedText> <br />
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <Section
        title={t("ABOUTTITLE")}
        content={<SpacedText content={t("ABOUTCONTENT")}></SpacedText>}
      ></Section>
      <Footer />
    </>
  );
};

export default About;
