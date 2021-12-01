import React from "react";
import CardNews from "../../components/Card/CardNews";
import { useStyleMainNews } from "./style";
import { ButtonHover } from "../../components/Button/Button";

function News() {
  const classes = useStyleMainNews();
  return (
    <div className={classes.MainNews}>
      <h1 className={classes.MainTitleNews}>TIN TỨC</h1>
      <div className={classes.MainContentNews}>
        <CardNews />
        <CardNews />
        <CardNews />
      </div>
      <div className={classes.buttonNews}>
        <ButtonHover>Xem chi tiết</ButtonHover>
      </div>
    </div>
  );
}

export default News;
