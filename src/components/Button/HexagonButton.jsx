import React, { useState } from "react";
import styleHexagon from "./styleHexagonButton";

function HexagonButton(props) {
  const classes = styleHexagon();

  return (
    <div className={classes.Icon}>
      <i
        onClick={props.playVideo}
        style={{ display: props.ttButton === false ? "inline" : "none" }}
        class="fa fa-play"
      ></i>
    </div>
  );
}
export default HexagonButton;
