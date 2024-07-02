import { FC } from 'react';
import ContentLayout from '../../../../layouts/contentLayout/ContentLayout';
import './verification.css'
import { useNavigate } from 'react-router-dom';
interface VerificationProps {
  
}

const Verification: FC<VerificationProps> = ({}) => {
  const navigate=useNavigate()
  return (
    <>
        <ContentLayout height='85dvh' isMarginTop>
        <div className="container verify_password">
          <div className="row h-100">
            <form className="col-lg-12 form">
              <div className="form-group">
                <div className="">
                  <label htmlFor="exampleInputEmail1">Enter otp</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter otp"
                  />
                </div>

                <button type="submit" onClick={()=>navigate('/auth/reset')}  className="btn btn-primary w-100">
                  verify
                </button>
              </div>
            </form>
          </div>
        </div>
      </ContentLayout>
    </>
  );
};

export default Verification;