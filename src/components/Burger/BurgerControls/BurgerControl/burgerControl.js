import React from "react";
import classes from "./burgerControl.module.css";

const burgerControl = props => (
  <div className={classes.burgerControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More} onClick={props.added}>
      More
    </button>
  </div>
);

export default burgerControl;
