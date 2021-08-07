import React from "react";
import "./Circles.css";

function Circles(props) {
  const buttons = [1, 2, 3, 4];

  return (
    <div className="Circles">
      {buttons.map((button) => {
        return (
          <div
            className={props.circle === button ? "selected" : ""}
            key={button}
          >
            {button}
          </div>
        );
      })}
    </div>
  );
}

export default Circles;
