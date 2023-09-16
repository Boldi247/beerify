import React from "react";
import css from "./Footer.module.css";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={css.page_footer} id="footer">
      <div className={css.info}>
        <p>© 2023 Beerify</p>
        <p>Budapest, Hungary</p>
        <p>06123456781</p>
        <p>info@beerify.com</p>
      </div>
      <div className={css.social}>
        <p>Follow us on social media!</p>
        <div className={css.social_media_links}>
          <a href="https://www.facebook.com/">
            <BsFacebook />
          </a>
          <a href="https://www.instagram.com/">
            <BsInstagram />
          </a>
          <a href="https://twitter.com/">
            <BsTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
