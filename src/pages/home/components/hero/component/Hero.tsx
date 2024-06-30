import { FC } from "react";
import "../css/hero.css";

import HeroImg from "../../../../../assets/8953254.jpg";
import ContentLayout from "../../../../../layouts/contentLayout/ContentLayout";
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <>
      <ContentLayout height="85dvh">
        <div className="container-fluid hero">
          <div className="row ">
            <div className="tag_line col-lg-6 col-md-6">
              <h1>Secure Payment</h1>
              <h1>At Finger Tip</h1>
              <h4>"Open your IBI Bank account now!"</h4>
              <button>Join Now</button>
            </div>

            <div className="tag_image col-lg-6  col-md-6">
              <img src={HeroImg} alt="illustration_banking" loading="lazy" />
            </div>
         
          </div>
        </div>
      </ContentLayout>
    </>
  );
};

export default Hero;
