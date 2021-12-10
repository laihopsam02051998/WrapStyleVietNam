import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination } from "swiper";
// import "swiper/swiper-bundle.css";
// import "./swiper.css";
import { NomalImage } from "../Card/styled";
import useStyleCarousel from "../Carousel/style.js";
function CarouselBanner() {
  const classes = useStyleCarousel();
  const arrImage = [
    "https://wrapstylevietnam.com/Uploads/images/WS-Porsche%20911%20Carrera%20Bespoke17.jpg",
    "https://wrapstylevietnam.com/Uploads/images/WS-Porsche%20911%20Carrera%20Bespoke11.jpg",
    "https://wrapstylevietnam.com/Uploads/images/WS-Porsche%20911%20Carrera%20Bespoke12.jpg",
    "https://wrapstylevietnam.com/Uploads/images/WS-Porsche%20911%20Carrera%20Bespoke13.jpg",
    "https://wrapstylevietnam.com/Uploads/images/WS-Porsche%20911%20Carrera%20Bespoke14.jpg",
    "https://wrapstylevietnam.com/Uploads/images/WS-Porsche%20911%20Carrera%20Bespoke15.jpg",
  ];
  return (
    <div className={classes.containerCarousel}>
      <Swiper
        tag="section"
        wrapperTag="div"
        slidesPerView={1}
        spaceBetween={0}
        // freeMode={true}
        navigation
        // pagination
        id="main"
      >
        {arrImage.map((sp) => {
          return (
            <SwiperSlide tag="div">
              <NomalImage src={sp} height="35rem" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
export default CarouselBanner;
