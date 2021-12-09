import React from "react";
import createDetailStyles from "./style";
function BlockCenterLayout() {
  const classes = createDetailStyles();
  return (
    <div>
      <div className={classes.detailHeaderTwo}>
        <div className={classes.headerTwoLeft}>
          <img src="https://wrapstylevietnam.com/images/media/50.jpg" />
        </div>
        <div className={classes.headerTwoRight}>
          <img src="https://wrapstylevietnam.com/images/pro/3_313.jpg" />
        </div>
      </div>
    </div>
  );
}
export default BlockCenterLayout;
