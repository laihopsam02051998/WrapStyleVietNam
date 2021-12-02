import React from "react";
import useStyleBanner from "./style";

function BannerL() {
  const classes = useStyleBanner();
  return (
    <div className={classes.containerBannerL}>
      <div className={classes.BannerImage}>
        <img src="https://scontent.fsgn5-4.fna.fbcdn.net/v/t39.30808-6/255460279_3666111230281329_7909143062384685859_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=5IZ3qERq31MAX8f36LF&_nc_ht=scontent.fsgn5-4.fna&oh=e945d0c07100c00080a09b1d9d1c8ea3&oe=61AB703F" />
      </div>
      <div className={classes.BannerContent}>
        <p>sasm</p>
      </div>
    </div>
  );
}

export default BannerL;
