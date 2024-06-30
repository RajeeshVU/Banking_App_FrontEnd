import{ FC } from 'react';
import MainLayout from '../../../layouts/mainLayout/MainLayout';
import '../css/login.css'
interface LoginProps {
  
}

const Login: FC<LoginProps> = ({}) => {
  return (
    <>
      <MainLayout>
        <div className="container login_section">
          <div className="row">
          <div className="col-6"><h1>sdsdf</h1></div>

          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Login;