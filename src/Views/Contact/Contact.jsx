import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Section/Section";
import SpacedText from "../../components/SpacedText/SpacedText";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const ContactContent = () => {
    return (
      <>
        <SpacedText content={t("CONTACTCONTENT")}></SpacedText>
        <ContactForm></ContactForm>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <Section
        title={t("CONTACT")}
        content={<ContactContent></ContactContent>}
      ></Section>
      <Footer />
    </>
  );
};

export default Contact;
