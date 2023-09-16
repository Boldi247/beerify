import React, { useState } from "react";
import css from "./NavigationBar.module.css";
import { CiBeerMugFull } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const NavigationBar = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const changeNavbarBg = () => {
    if (window.scrollY >= 80) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBg);

  const navBarClasses = navbarBg
    ? `${css.navbar_w} ${css.active}`
    : `${css.navbar_w}`;

  const handleHamburgerClick = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <GiHamburgerMenu
        className={css.hamburger}
        onClick={handleHamburgerClick}
      />

      <div
        className={
          mobileNav ? `${navBarClasses} ${css.mobileActive}` : navBarClasses
        }
      >
        <nav className={css.navbar}>
          <div className={css.logo}>
            <h1>
              <a href="/">Beerify</a>
            </h1>
            <CiBeerMugFull className={css.icon} />
          </div>
          <ul>
            <li>
              <a href="#main">Collection</a>
            </li>
            <li>
              <a href="#footer">About</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
