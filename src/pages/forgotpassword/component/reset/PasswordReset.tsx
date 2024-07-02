import { FC } from 'react';
import ContentLayout from '../../../../layouts/contentLayout/ContentLayout';
import './reset.css'
import { useNavigate } from 'react-router-dom';
interface PasswordResetProps {
  
}

const PasswordReset: FC<PasswordResetProps> = ({}) => {
  const navigate=useNavigate()
  return (
    <>
       <ContentLayout height='85dvh' isMarginTop>
       <div className="container forgot_password">
          <div className="row h-100">
            <form className="col-lg-12 form">
              <div className="form-group">
                <h3>Reset Password</h3>
                <div className="">
                  <label htmlFor="exampleInputEmail1">Enter new password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter password"
                  />
                </div>
                <div className="">
                  <label htmlFor="exampleInputEmail1">Confirm password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter password"
                  />
                </div>

                <button type="submit" onClick={()=>navigate('/')} className="btn btn-primary w-100">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </ContentLayout>
    </>
  );
};

export default PasswordReset;