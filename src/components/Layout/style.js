import { createUseStyles } from "react-jss";

const createDetailStyles = createUseStyles({
  containerDetail: {
    overflow: "hidden",
    "& h2": {
      fontSize: "2rem",
    },
    "& p": {
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  containerDetailHide:{
    display:"none"
  },
  detailHeaderOne: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem 0rem",
    // textAlign: "center",
    height: "25rem",
  },
  headerOneLeft: {
    width: "63%",
    height: "100%",
    padding: "4rem 4rem",
  },
  headerOneRight: {
    width: "37%",
    height: "100%",
    clipPath: " polygon(54% 0, 100% 0%, 100% 100%, 3% 100%)",
  },
  detailHeaderTwo: {
    position: "relative",
    margin: "1rem 0rem",
    width: "100%",
    height: "33.3rem",
    overflow: "hidden",
  },
  headerTwoLeft: {
    position: "absolute",
    width: "59%",
    height: "100%",
    top: "0px",
    left: "0px",
    zIndex: "2",
    clipPath: "polygon(0 12%, 100% 12%, 62% 100%, 0 100%)",
  },
  headerTwoRight: {
    position: "absolute",
    width: "59%",
    height: "100%",
    top: "0px",
    right: "0px",
    zIndex: "2",
    clipPath: "polygon(38% 0, 100% 0%, 100% 88%, 0 88%)",
  },
  detailHeaderThree: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem 0rem",
    height: "25rem",
  },
  headerThreeLeft: {
    width: "37%",
    height: "100%",
    clipPath: "polygon(0 0, 97.5% 0, 48% 100%, 0 100%)",
  },
  headerThreeRight: {
    padding: "4rem 0rem",
    width: "63%",
  },

  // -------------------------
  TriangleLeftLayout: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem 0rem",
    height: "25rem",
  },
  TriangleLeftImage: {
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    clipPath: " polygon(0 0, 100% 0%, 63% 100%, 0% 100%)",
    width: "55%",
  },
  TriangleLeftContent: {
    padding: "4rem",
    width: "45%",
  },
});

export default createDetailStyles;
