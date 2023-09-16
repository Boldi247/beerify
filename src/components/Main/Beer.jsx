import React from "react";
import css from "./Beer.module.css";

const Beer = (props) => {
  return (
    <div key={props.id} className={css.beerWrapper}>
      <div className={css.desc}>
        <h3>{props.name}</h3>
        <p>{props.alc}%</p>
      </div>
      <img src={props.img} alt={props.name} />
    </div>
  );
};

export default Beer;
