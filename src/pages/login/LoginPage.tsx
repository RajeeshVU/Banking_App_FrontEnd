import { FC } from 'react';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import LoginForm from './components/logIn/LoginForm';




interface LoginPageProps {
  
}

const LoginPage: FC<LoginPageProps> = ({}) => {
  return (
    <>
      <MainLayout>
        <LoginForm/>
      </MainLayout>
    </>
  );
};

export default LoginPage;