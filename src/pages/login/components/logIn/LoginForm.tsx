import { FC } from "react";
import ContentLayout from "../../../../layouts/contentLayout/ContentLayout";
import "./loginForm.css";
import loginImg from "../../../../assets/login.png";
import { TfiEmail } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import InputComponent from "../../../../components/elements/input/InputComponent";
import Checkbox from "../../../../components/elements/checkBox/CheckBox";
import LoginFormComponent from "../../../../components/forms/loginForm/LoginFormComponent";
interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  return (
    <>
      <ContentLayout height="85dvh" isMarginTop>
        <div className="container-fluid  login_section">
          <div className="row">
            <div className="col-lg-12   col-sm-12 form">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 image_part">
                    <img src={loginImg} alt="login_image" />
                  </div>
                  {/* <form className="col-lg-6  col-md-6 col-sm-12 ">
                    <h3>login</h3>
                    <div className="form-group">
                      <InputComponent
                        label="Email address"
                        type="email"
                        holder="email"
                      />
                    </div>
                    <div className="form-group">
                      <InputComponent
                        label="Enter password"
                        type="password"
                        holder="password"
                      />
                    </div>
                    <div className="form-check">
                      <div className="row ">
                        <div className="col-12">
                          <Checkbox label="Remember" />
                        </div>
                        <div className="col-12 text-end">
                          <NavLink to="/auth/forgot_password">
                            Forgot Password?
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn mt-2 btn-primary w-100"
                    >
                      Submit
                    </button>
                    <p>
                      Don't have an account?{" "}
                      <NavLink to={"/register"}>SignUp</NavLink>
                    </p>
                  </form> */}
                  <div className="col-lg-6 col-md-6 align-content-center form_container">
                  <LoginFormComponent/>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentLayout>
    </>
  );
};

export default LoginForm;
