import { createUseStyles } from "react-jss";

export const useStyleVideo = createUseStyles({
  backgroundVideo: {
    position: "relative",
    overflow: "hidden",
  },

  videoScreen: {
    "& video": {
      width: "100%",
      height: "100%",
      display: "block",
    },
  },
  videoContent: {
    // backgroundColor: "red",
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "60%",
    height: "100%",
    padding: {
      top: "2rem",
      left: "4rem",
    },
    "& h3": {
      fontSize: "4rem",
      color: "white",
      textTransform: "uppercase",
    },
  },
});
