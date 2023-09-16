import React from "react";
import css from "./Welcome.module.css";

import { BiSolidFoodMenu } from "react-icons/bi";
import Warning from "../UI/Warning";

const Welcome = () => {
  return (
    <div>
      <Warning />
      <div className={css.welcome_wrapper}>
        <div className={css.welcome_content}>
          <div className={`${css.logo} linear-wipe`}>
            <h1>Beerify</h1>
          </div>
          <a className="btn" href="#main">
            <span>Browse our beer collection!</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
