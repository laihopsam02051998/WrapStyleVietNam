import React from "react";
import CarouselBanner from "../../components/Carousel/CarouselBanner";
import TriangleLeftLayout from "../../components/Layout/TriangleLeftLayout";
import Video from "../../components/Video";
import ShortVideo from "../../components/Video/ShortVideo";
import Layout from "./../../components/Layout";

function DetailCar() {
  return (
    <div>
      <div style={{ padding: "0rem" }}>
        <Video />
      </div>
      <TriangleLeftLayout />
      <div style={{ padding: "4rem" }}>
        <ShortVideo video={null} />
      </div>
      <Layout data={"null"} />
      <Layout data={"null"} />
      <CarouselBanner />
    </div>
  );
}
export default DetailCar;
