import React from "react";
import { Input } from "../../components/Form/InputForm";
import { styleSignUp } from "./style";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { phoneRegex, passwordRegex, emailRegex } from "../../regex";

function SignUp() {
  const classes = styleSignUp();

  // CREATE YUP OBJECT
  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    validationSchema: yup.object({
      ...phoneRegex,
      ...passwordRegex,
      ...emailRegex,
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // END YUP OBJECT

  return (
    <div className={classes.container}>
      {/* START LEFT LOGIN   */}
      <form onSubmit={formik.handleSubmit} className={classes.contentLeftLogin}>
        <div className={classes.loginTitle}>
          <h1>Sign up</h1>
        </div>
        <div className={classes.loginForm}>
          {/* START PHONE  */}
          <div className={classes.usernameLogin}>
            <div className={classes.inputForm}>
              <Input
                type="text"
                placeholder="Phone"
                name="phone"
                id="phone"
                onChange={formik.handleChange}
              />
            </div>
            <div className={classes.regexForm}>
              {formik.errors.phone ? <p>{formik.errors.phone}</p> : ""}
            </div>
          </div>
          {/* END PHONE  */}
          {/* START USERNAME  */}
          <div className={classes.usernameLogin}>
            <div className={classes.inputForm}>
              <Input
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                onChange={formik.handleChange}
              />
            </div>
            <div className={classes.regexForm}>
              {formik.errors.email ? <p>{formik.errors.email}</p> : ""}
            </div>
          </div>
          {/* END USERNAME  */}

          {/* START PASSWORD  */}
          <div className={classes.passwordLogin}>
            <div className={classes.inputForm}>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                onChange={formik.handleChange}
              />
            </div>
            <div className={classes.regexForm}>
              <p>
                {" "}
                {formik.errors.password ? <p>{formik.errors.password}</p> : " "}
              </p>
            </div>
          </div>
          {/* END PASSWORD */}
          {/* start password  */}
          <div className={classes.passwordLogin}>
            <div className={classes.inputForm}>
              <Input
                type="password"
                placeholder="Confirm Password"
                name="confrimPassword"
                id="confrimPassword"
                onChange={formik.handleChange}
              />
            </div>
            <div className={classes.regexForm}>
              <p>Tài khoản hợp lệ</p>
            </div>
          </div>
          {/* end password  */}
          {/* start checkbox  */}
          <div className={classes.checkboxLogin}>
            <div className={classes.checkbox}>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                defaultValue="Bike"
              />
              <label htmlFor="vehicle1">
                {" "}
                By signing up you accept the Term of service and Privacy Policy
              </label>
            </div>
          </div>
          {/* end checkbox  */}

          <div className={classes.socialIcon}>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-google-plus-square"></i>
            <i class="fab fa-twitter-square"></i>
          </div>
          <div className={classes.buttonLogin}>
            <Button backgroundColor="#dc3545" type="submit">
              Sign Up
            </Button>
          </div>
        </div>
      </form>
      {/* END LEFT LOGIN   */}

      {/* START RIGHT LOGIN   */}
      <div className={classes.contentRightLogin}>
        <h1>
          Welcome to <br /> Wrapstyle VietNam
        </h1>
        <h3>Bạn đã có tài khoản ? </h3>
        <Link to="/Login">
          <Button backgroundColor="green">Đăng nhập ngay bây giờ</Button>
        </Link>
      </div>
      {/* END RIGHT LOGIN   */}
    </div>
  );
}
export default SignUp;
