import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
// import "./Navbar.css";
import Language from "../Languages/Languages";
import { useState, useEffect } from "react";
import BurguerButton from "../BurguerButton/Burguerbutton";
import { click } from "@testing-library/user-event/dist/click";

const Navbar = () => {
  const { t } = useTranslation();

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (window.innerWidth < 1070) {
      setClicked(!clicked);
    }
  };

  return (
    <>
      <NavContainer>
        <div className="logo">
          <Link to="/" className="navbar-logo">
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        <div className={`links ${clicked ? "active" : ""}`}>
          <Link onClick={handleClick} to="/">
            {t("HOME")}
          </Link>
          <Link onClick={handleClick} to="/about">
            {t("ABOUT")}
          </Link>
          <Link onClick={handleClick} to="/contact">
            {t("CONTACT")}
          </Link>

          <Language />
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
};

export default Navbar;
const NavContainer = styled.nav`
  z-index: 4;
  .logo {
    width: 10%;
    padding: 1rem;
    z-index: 2;
  }

  .navbar-logo img {
    width: 70px;
    height: 70px;
  }

  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 0.1rem;
  background-color: #151515;

  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 0.2rem;
  }
  .links {
    display: flex;
    width: 100%;
    align-items: center;
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    z-index: 2;

    a {
      color: white !important;
      font-size: 2rem;
      display: block;
      margin-right: 10rem;
      padding-bottom: 0.5rem;
    }

    a:hover {
      border-bottom: 2px solid white;
    }
    div {
      color: white;
      font-size: 2rem;
    }
    @media (min-width: 1070px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      div {
        font-size: 1rem;
        color: white;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: 4rem;
    margin-right: 0rem;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 3rem;
      color: white;
    }
    div {
      font-size: 2rem;
      margin-top: 3rem;
      color: white;
      margin-right: 10rem;
    }
  }
  .burguer {
    @media (min-width: 1070px) {
      display: none;
    }
  }
`;
const BgDiv = styled.div`
  background-color: #151515;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;
  opacity: 0;

  &.active {
    border-radius: 0 0 30% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.95;
  }
`;
