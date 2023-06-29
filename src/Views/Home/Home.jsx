import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Section/Section";
import Sectioncards from "../../components/Sectioncards/Sectioncards";
import Dropdown from "../../components/Dropdown/Dropdown";
import Footer from "../../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import SpacedText from "../../components/SpacedText/SpacedText";

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("TITLEPAGE");
  }, []);

  const HomeContent = () => {
    return (
      <>
        <div class="container-fluid  m-0 p-0 d-flex justify-content-center">
          <div class=" frontpage row m-0  p-0 justify-content-center align-items-center">
            <div class="col-md-6 m-0 p-0 text-center d-flex justify-content-center align-content-center">
              <div className="info m-0 p-0">
                <h1>{t("TITLEPAGE")}</h1>
                <p>{t("DESCRIPTIONPAGE")}</p>
              </div>
            </div>
            <div class="col-md-6 logof m-0 p-0 text-center d-flex justify-content-center align-content-center">
              <div className=" m-0 p-0 homeImage">
                <img src="/images/logo.png" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
        <Section
          title={t("FIRSTSECTIONTITLE")}
          content={<SpacedText content={t("FIRSTSECTIONCONTENT")}></SpacedText>}
        />
        <Section
          title={t("SECONDSECTIONTITLE")}
          content={
            <SpacedText content={t("SECONDSECTIONCONTENT")}></SpacedText>
          }
        />
        <Dropdown
          title={t("THIRDSECTIONTITLE")}
          content={t("THIRDSECTIONCONTENT")}
        />
        <Section
          title={t("CARDSTITLE")}
          content={<Sectioncards></Sectioncards>}
        ></Section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <HomeContent></HomeContent>
      <Footer />
    </>
  );
};

export default Home;
