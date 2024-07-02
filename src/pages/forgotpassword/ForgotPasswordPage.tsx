
import MainLayout from "../../layouts/mainLayout/MainLayout";
import { Route, Routes } from "react-router-dom";
import { FC, lazy } from "react";

const PasswordReset =lazy(()=>import("./component/reset/PasswordReset"))
const ForgotPassword =lazy(()=>import("./component/forgotpassword/ForgotPassword"))
const Verification =lazy(()=>import("./component/verification/Verification"))

interface ForgotPasswordPageProps {}

const ForgotPasswordPage: FC<ForgotPasswordPageProps> = ({}) => {
 
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/reset" element={<PasswordReset />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/verify" element={<Verification />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default ForgotPasswordPage;
