"use client";
import React, { useState } from "react";
import "../components/navbar.scss";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import '../components/i18n.js'
const Navbar = () => {
  const {t,i18n}=useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setbtn(!btn);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [btn, setbtn] = useState(false);
  const [navBtn, setnavBtn] = useState(false);
  const [lang, setlang] = useState("EN");
  function handleBtn() {
    setbtn(!btn);
  }
  console.log(btn);
  function navBtnFunc() {
    setnavBtn(!navBtn);
  }
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head>
      <header>
        <nav id="heroNav">
          <div className="navResponsive">
            <div onClick={() => navBtnFunc()}>
              {navBtn ? (
                <i class="fa-solid fa-x"></i>
              ) : (
                <i class="fa-solid fa-bars"></i>
              )}
            </div>

            <div>
              <img
                src="https://www.emkiproduction.com/static/media/emkiLogoLight.3e1d4008f4a308141d1bca2d89ecd4d6.svg"
                alt=""
              />
            </div>
            <div className="navTicketIcon">
              <i class="fa-solid fa-ticket"></i>
            </div>
          </div>
          <div className="navContainer">
            <div>
              <img
                src="https://www.emkiproduction.com/static/media/emkiLogoLight.3e1d4008f4a308141d1bca2d89ecd4d6.svg"
                alt=""
              />
            </div>
            <ul className="navItems">
              <li>
                <a href="/home">{t('Home')}</a>
              </li>
              <li>
                <a href="/events">{t("Events")}</a>
              </li>
              <li>
                <a href="/blogs">{t("Blog")}</a>
              </li>
              <li>
                <a href="/sponsors">{t("Sponsors")}</a>
              </li>
              <li>
                <a href="/aboutUs">{t("About us")}</a>
              </li>
            </ul>
            <div className="navBtnItems">
              <div className="languageBtn">
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  {lang}
                  {btn ? (
                    <i class="fa-sharp fa-solid fa-caret-down"></i>
                  ) : (
                    <i class="fa-solid fa-caret-up"></i>
                  )}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose,i18n.changeLanguage('en'), setlang("EN");
                    }}
                  >
                    EN
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose,i18n.changeLanguage('az'), setlang("AZ");
                    }}
                  >
                    AZ
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose,i18n.changeLanguage('ru'), setlang("RU");
                    }}
                  >
                    RU
                  </MenuItem>
                </Menu>
              </div>

              <div>
                <button className="ticketBtn">{t("Buy Ticket")}</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
