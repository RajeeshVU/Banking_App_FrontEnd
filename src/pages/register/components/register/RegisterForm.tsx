import { FC } from "react";
import ContentLayout from "../../../../layouts/contentLayout/ContentLayout";
import "./register.css";
import RegisterImg from "../../../../assets/signup.jpg";
import { NavLink } from "react-router-dom";
import { IoIosAlert } from "react-icons/io";

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = ({}) => {
  return (
    <>
      <ContentLayout height="85dvh" isMarginTop={true}>
        <div className="container-fluid  register_section">
          <div className="row">
            <div className="col-lg-12   col-sm-12 form">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 image_part">
                    <img src={RegisterImg} alt="Register_image" />
                  </div>
                  <form className="col-lg-6 ">
                    <div className="form-group">
                      <h3>SignUp</h3>
                      <label htmlFor="exampleInputEmail1">Enter Name</label>
          
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter name"
                      />
                      <label htmlFor="exampleInputEmail1">Enter Phone</label>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Phone"
                      />
                      <label htmlFor="exampleInputEmail1 d-flex justify-content-between">
                        Email{" "}
                        <small
                          id="emailHelp"
                          className="form-text mt-0 text-muted"
                        >
                          <IoIosAlert /> We'll never share your email with
                          anyone else.
                        </small>{" "}
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />

                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                      <label htmlFor="exampleInputPassword1">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Confirm Password"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                      Join
                    </button>
                    <p>
                      Already have an account?{" "}
                      <NavLink to={"/login"}>login</NavLink>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentLayout>
    </>
  );
};

export default RegisterForm;
