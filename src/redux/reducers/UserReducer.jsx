import { LOGIN_USER } from "../types/userType";

let initalState = {
  credentials: null, // thông tin đăng nhập, chưa đăng nhập là nulll
};

const UserReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      console.log("đã chạy LOGIN USER");
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default UserReducer;
