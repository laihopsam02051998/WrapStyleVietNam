import { createUseStyles } from "react-jss";

export const styleNews = createUseStyles({
  containerListCard: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
  },
  cardNew: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    margin: "2rem",
    height: "300px",
  },
  imageNew: {
    "& img": {
      width: "508px",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center center",
      margin: "0rem 2rem",
    },
  },
  contentNew: {
    textAlign: "left",
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-between",
    "& h1": {
      fontSize: "2.1rem",
    },
  },
  contentTimeNew: {
    "& p": {
      margin: "0rem",
    },
  },
  contentTitleNew: {
    fontSize: "1.3rem",
    letterSpacing: "0.0064rem",
  },
  contentButtonNew: {},
});
