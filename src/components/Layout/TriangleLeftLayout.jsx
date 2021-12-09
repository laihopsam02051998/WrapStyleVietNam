import React from "react";
import createDetailStyles from "./style";

function TriangleLeftLayout() {
  const classes = createDetailStyles();
  return (
    <div className={classes.TriangleLeftLayout}>
      <div className={classes.TriangleLeftImage}>
        <img src="https://wrapstylevietnam.com/Uploads/images/WS-Porsche%20911%20Carrera%20Bespoke17.jpg" />
      </div>
      <div className={classes.TriangleLeftContent}>
        <h1>TOUR OF THE PRODUCTION LINES</h1>
        <p>
          From the historic entrance to the future: touring the production lines
          is a unique journey to witness the birth of the Lamborghini sports
          cars. From the V12 line where the Aventador’s engine and frame come
          together for the first time and on to the V10 line where the Huracán
          is born. The guided tours that start from Mudetec make the tour an
          unforgettable experience in search of the company’s most amazing
          places.
        </p>
      </div>
    </div>
  );
}
export default TriangleLeftLayout;
