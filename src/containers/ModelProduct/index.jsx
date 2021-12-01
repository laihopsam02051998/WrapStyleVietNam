import React, { useState } from "react";
import Banner from "../../components/Banner";
import { ButtonHover } from "../../components/Button/Button";
import ListCard from "../../components/Card/ListCard";
import Dropdown from "../../components/Dropdown";
import { styleModel } from "./style";

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
      <ListCard />
      <ListCard />
      <ListCard />
      <div className={classes.containButton}>
        <ButtonHover>Xem thêm</ButtonHover>
      </div>
    </div>
  );
}
export default ModelProduct;
