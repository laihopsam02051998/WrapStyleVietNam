import React from "react";
import HexagonButton from "../../components/Button/HexagonButton";

import CarouselBanner from "../../components/Carousel/CarouselBanner";
import TriangleLeftLayout from "../../components/Layout/TriangleLeftLayout";
import Video from "../../components/Video";
import car from "../../data/car.json";
import ShortVideo from "../../components/Video/ShortVideo";
import Layout from "./../../components/Layout";

function DetailCar(props) {
  const carArr = car.car.carArr;
  const carDetail = carArr.filter((sp) => {
    return sp.id === props.match.params.Id;
  });

  return (
    <div>
      <div style={{ padding: "0rem" }}>
        <Video />
      </div>
      <TriangleLeftLayout content={null} imageOne={carDetail[0].hinhAnh} />
      <div style={{ padding: "4rem" }}>
        <ShortVideo video={"null"} posterA={carDetail[0].hinhAnh} />
      </div>
      <Layout detailImages={carDetail[0].hinhAnhChiTiet} />
      <Layout detailImages={carDetail[0].hinhAnhChiTiet} />
      <HexagonButton />
      <CarouselBanner Slider={carDetail[0].Slide} />
    </div>
  );
}
export default DetailCar;
