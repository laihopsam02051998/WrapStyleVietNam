import React from "react";
import BlockCenterLayout from "./BlockCenterLayout";
import createDetailStyles from "./style";

function Detail(props) {
  const classes = createDetailStyles();

  return (
    <div
      className={
        props.detailImages === null
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
          <img src={props.detailImages.hinhAnh1} />
        </div>
      </div>
      <BlockCenterLayout
        image1={props.detailImages.hinhAnh2}
        image2={props.detailImages.hinhAnh3}
      />
      <div className={classes.detailHeaderThree}>
        <div className={classes.headerThreeLeft}>
          <img src={props.detailImages.hinhAnh4} />
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
