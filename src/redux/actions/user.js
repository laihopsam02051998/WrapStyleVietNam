import { createAction } from ".";
import { userService } from "../../Services";
import { LOGIN_USER } from "../types/userType";

// async action : là action để component dispatch
//  trả về cái action đến reducer con
export const login = (user) => {
  return (dispatch) => {
    userService
      .signIn(user)
      .then((res) => {
        dispatch(createAction(LOGIN_USER, res.data));
        // localStorage.setItem("credential", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
