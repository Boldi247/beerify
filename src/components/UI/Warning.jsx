import React, { useEffect, useState } from "react";
import css from "./Warning.module.css";

const Warning = () => {
  const [visibility, setVisibility] = useState();

  const handleWarningClick = () => {
    setVisibility(false);
    localStorage.setItem("warning", false);
  };

  //TODO implement localstorage to save the warning state

  useEffect(() => {
    const warning = localStorage.getItem("warning");
    if (warning === "false") {
      setVisibility(false);
    } else if (warning === "true" || warning === null) {
      setVisibility(true);
    }
  }, [visibility]);

  return (
    visibility && (
      <div className={css.container}>
        <div className={css.modal}>
          <h1>Warning!</h1>
          <div className={css.warning_text}>
            <p>
              This website is for educational purposes only. It is not a real
              website and it does not sell any products.
            </p>
            <p>
              Also, remember to drink responsibly, and only when you are above
              the legal age limit!
            </p>
          </div>
          <div className={css.btn_container}>
            <a className="btn" onClick={handleWarningClick}>
              <span>I Understand</span>
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default Warning;
