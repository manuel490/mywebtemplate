import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SpacedText from "../SpacedText/SpacedText";
import Card from "../Card/Card";
import "./Sectioncards.css";
import { data } from "../../artists";
import "bootstrap/dist/css/bootstrap.css";

const Sectioncards = () => {
  useEffect(() => {
    console.log(data);
  }, []);

  const { t } = useTranslation();
  return (
    <>
      <div className="sectionContainerCard">
        <div class="container-fluid mt-4  border-top border-bottom border-2  d-flex justify-content-center">
          <div class=" row justify-content-center align-items-center p-5">
            {data.map((artist, index) => (
              <Card key={index} artist={artist} index={index} t={t} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Sectioncards;
