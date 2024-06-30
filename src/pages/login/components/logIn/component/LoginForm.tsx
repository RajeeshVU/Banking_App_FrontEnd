import { FC } from "react";
import ContentLayout from "../../../../../layouts/contentLayout/ContentLayout";
import "../css/loginForm.css";
import loginImg from "../../../../../assets/login.png";
import { NavLink } from "react-router-dom";
import { IoIosAlert } from "react-icons/io";
interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  return (
    <>
      <ContentLayout height="85dvh">
        <div className="container-fluid  login_section">
          <div className="row">
            <div className="col-lg-12   col-sm-12 form">
              <div className="row">
                <div className="col-lg-6 image_part">
                  <img src={loginImg} alt="login_image" />
                </div>
                <form className="col-lg-6 ">
                  <div className="form-group">
                    <h3>login</h3>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      <IoIosAlert /> We'll never share your email with anyone
                      else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-check">
                    <div className="row shadow-none">
                      <div className="col-6">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                          // checked={isChecked}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          Remember
                        </label>
                      </div>
                      <div className="col-6 text-end">
                        <NavLink to="/forgot-password">
                          Forgot Password?
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                  <p>
                    Don't have an account?{" "}
                    <NavLink to={"/register"}>SignUp</NavLink>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ContentLayout>
    </>
  );
};

export default LoginForm;
