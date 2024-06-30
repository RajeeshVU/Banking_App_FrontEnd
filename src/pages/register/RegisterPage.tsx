import { FC } from 'react';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import RegisterForm from './components/register/component/RegisterForm';



interface RegisterPageProps {
  
}

const RegisterPage: FC<RegisterPageProps> = ({}) => {
  return (
    <>
      <MainLayout>
        <RegisterForm/>
      </MainLayout>
    </>
  );
};

export default RegisterPage;