import React from "react";
import BlockCenterLayout from "./BlockCenterLayout";
import createDetailStyles from "./style";

function Detail(props) {
  const classes = createDetailStyles();

  return (
    <div
      className={
        props.data === null
          ? classes.containerDetailHide
          : classes.containerDetail
      }
    >
      <div className={classes.detailHeaderOne}>
        <div className={classes.headerOneLeft}>
          <h1>TOUR OF THE PRODUCTION LINES</h1>
          <p>
            From the historic entrance to the future: touring the production
            lines is a unique journey to witness the birth of the Lamborghini
            sports cars. From the V12 line where the Aventador’s engine and
            frame come together for the first time and on to the V10 line where
            the Huracán is born. The guided tours that start from Mudetec make
            the tour an unforgettable experience in search of the company’s most
            amazing places.
          </p>
        </div>
        <div className={classes.headerOneRight}>
          <img src="https://wrapstylevietnam.com/images/pro/3_313.jpg" />
        </div>
      </div>
      <BlockCenterLayout />
      <div className={classes.detailHeaderThree}>
        <div className={classes.headerThreeLeft}>
          <img src="https://wrapstylevietnam.com/images/media/49.jpg" />
        </div>
        <div className={classes.headerThreeRight}>
          <h1>TOUR OF THE PRODUCTION LINES</h1>
          <p>
            From the historic entrance to the future: touring the production
            lines is a unique journey to witness the birth of the Lamborghini
            sports cars. From the V12 line where the Aventador’s engine and
            frame come together for the first time and on to the V10 line where
            the Huracán is born. The guided tours that start from Mudetec make
            the tour an unforgettable experience in search of the company’s most
            amazing places.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Detail;
