import React from "react";
import { styleNews } from "./style";
function CardProduct() {
  const classes = styleNews();
  return (
    <div className={classes.cardProduct}>
      <div className={classes.imageProduct}>
        <img
          src="https://wrapstylevietnam.com/images/pro/3_313.jpg"
          alt="hinh"
        />
      </div>
      <div className={classes.contentProduct}>
        <div className={classes.productCategory}>
          <p>Novitec</p>
          <p>Urus</p>
          <p>Lamborghini</p>
        </div>
        <div className={classes.productName}>
          <rem>
            Hệ thống ống xả đua của Novitec dành cho Lamborghini Aventador
          </rem>
        </div>
      </div>
    </div>
  );
}
export default CardProduct;
