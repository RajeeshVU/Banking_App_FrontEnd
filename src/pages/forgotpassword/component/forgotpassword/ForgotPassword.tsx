import { FC } from "react";
import ContentLayout from "../../../../layouts/contentLayout/ContentLayout";
import "./forgotPassword.css";
import { IoIosAlert } from "react-icons/io";
import { useNavigate } from "react-router-dom";
interface ForgotPasswordProps {}

const ForgotPassword: FC<ForgotPasswordProps> = ({}) => {
  const navigate=useNavigate()
  return (
    <>
      <ContentLayout height="85dvh" isMarginTop={true}>
        <div className="container forgot_password">
          <div className="row h-100">
            <form className="col-lg-12 form">
              <div className="form-group">
                <h3>Reset Password</h3>
                <div className="">
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

                <button type="submit" onClick={()=>navigate('/auth/verify')} className="btn btn-primary w-100">
                  Get Otp
                </button>
              </div>
            </form>
          </div>
        </div>
      </ContentLayout>
    </>
  );
};

export default ForgotPassword;
