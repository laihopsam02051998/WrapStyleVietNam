import React, { useState } from "react";
import Banner from "../../components/Banner";
import { ButtonHover } from "../../components/Button/Button";
import Detail from "../../components/Details";
import Dropdown from "../../components/Dropdown";
import { styleModel } from "./style";
import CardProduct from "../../components/Card/CardProduct";
function ModelProduct() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const classes = styleModel();
  return (
    <div>
      <Banner />
      <Dropdown handleChange={handleChange} age={age} />
      <div className={classes.listCar}>
        <CardProduct />
      </div>
      <Detail />
      <Detail />
      <div className={classes.containButton}>
        <ButtonHover>Xem thêm</ButtonHover>
      </div>
    </div>
  );
}
export default ModelProduct;
