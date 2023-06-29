import React from "react";
import { useTranslation } from "react-i18next";
import "./Languages.css";

const Language = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    document.title = t("TITLEPAGE");
  };

  const actualLanguage = i18n.language;
  const languages = [
    {
      value: "en",
      label: "English",
    },
    {
      value: "es",
      label: "Español",
    },
  ];

  return (
    <div className="select-wrapper">
      <select onChange={changeLanguage}>
        {languages.map((item) => {
          if (item.value === actualLanguage) {
            return (
              <option key={item.value} value={item.value} selected>
                {item.label}
              </option>
            );
          } else {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          }
        })}
      </select>
    </div>
  );
};

export default Language;
