// import { display } from "@mui/system";
import React from "react";
import { styleNews } from "./style";
function CardProduct(props) {
  const classes = styleNews();

  return (
    <div className={classes.cardProduct}>
      <div className={classes.imageProduct}>
        <img src={props.car.hinhAnh} alt={props.car.titleProduct} />
      </div>
      <div className={classes.contentProduct}>
        <div className={classes.productCategory}>
          <p>{props.car.categoryCar}</p>
          <p>{props.car.nameProduct}</p>
          <p style={{ display: props.car.goiDo === null ? "none" : "inline" }}>
            {props.car.goiDo}
          </p>
        </div>
        <div className={classes.productName}>
          <rem>{props.car.titleProduct}</rem>
        </div>
      </div>
    </div>
  );
}
export default CardProduct;
