import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price:<strong>Rs {props.price}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          disabled={props.disabled[ctrl.type]}
          removed={() => props.ingredientRemoved(ctrl.type)}
          added={() => props.ingredientAdded(ctrl.type)}
          key={ctrl.label}
          label={ctrl.type}
        />
      ))}
      <button
        onClick={props.ordered}
        disabled={!props.purchasable}
        className={classes.OrderButton}
      >
        {props.isAuth ? "ORDER NOW" : "SIGNUP TO ORDER"}
      </button>
    </div>
  );
};

export default buildControls;
