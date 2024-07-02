import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import { lazy } from "react";
import Home from "./pages/home/HomePage";
const LoginPage = lazy(() => import("./pages/login/LoginPage"));
const RegisterPage = lazy(() => import("./pages/register/RegisterPage"));
const ForgotPasswordPage = lazy(
  () => import("./pages/forgotpassword/ForgotPasswordPage")
);
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        {/* <Route path="/auth/*" element={<ForgotPasswordPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
