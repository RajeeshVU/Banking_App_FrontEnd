import { FC } from "react";
import MainLayout from "../../layouts/mainLayout/MainLayout";
import Hero from "./components/hero/Hero";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  
  return (
    <>
      <MainLayout>
        <Hero/>
      </MainLayout>
    </>
  );
};

export default Home;
