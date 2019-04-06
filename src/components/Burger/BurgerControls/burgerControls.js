import React from "react";
import BurgerControl from "./BurgerControl/burgerControl";
import classes from "./burgerControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const burgerControls = props => (
  <div className={classes.BurgerControls}>
    {controls.map(ctrl => (
      <BurgerControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
      />
    ))}
  </div>
);

export default burgerControls;
