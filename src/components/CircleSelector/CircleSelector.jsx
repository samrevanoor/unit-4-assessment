import React from "react";
import "./CircleSelector.css";

function CircleSelector(props) {
  const buttons = [1, 2, 3, 4];

  return (
    <div className="CircleSelector">
      {buttons.map((button) => {
        return (
          <button
            className={props.circle === button ? "selected" : ""}
            onClick={() => props.handleButtonClick(button)}
            key={button}
            value={button}
          >
            {props.circle === button
              ? `CIRCLE ${button} SELECTED`
              : `SELECT CIRCLE ${button}`}
          </button>
        );
      })}
    </div>
  );
}

export default CircleSelector;
