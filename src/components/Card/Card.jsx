import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SpacedText from "../SpacedText/SpacedText";
import "./Card.css";
import "bootstrap/dist/css/bootstrap.css";

const Card = ({ artist }) => {
  const { t } = useTranslation();
  return (
    <>
      <div class="col-md-4 m-2 text-center d-flex justify-content-center align-content-center">
        <div class="myCard">
          <div class="innerCard">
            <div class="frontSide">
              <img src={artist.image} alt="no imagen" />
              <p class="title">{artist.name}</p>
            </div>
            <div class="backSide">
              <p class="title">{t("DESCRIPTION")}</p>
              <p>{t(artist.description)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
