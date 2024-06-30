import { Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/navBar/component/NavBar";

import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import Home from "./pages/home/HomePage";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
