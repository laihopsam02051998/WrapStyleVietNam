import { createUseStyles } from "react-jss";

const useStyleCarousel = createUseStyles({
  carouselThree: {
    textAlign: "center",
    padding: "2rem 0rem",
    width: "100%",
    overflow: "hidden",
    "& li": {
      listStyle: "none",
    },
  },
  containerCarousel: {
    overflow: "hidden",
  },
});
export default useStyleCarousel;
