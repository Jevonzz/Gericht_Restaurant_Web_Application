import React from "react";

import { SubHeading } from "../../components/";
import "./Chef.css";
import { images } from "../../constants";

const Chef = () => (
  <div className="app__wrapper app__bg section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef img" />
    </div>
    <div className=" app__wrapper_info app__chef-heading">
      <SubHeading title={"Chef's Word"} />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          doloribus deleniti modi adipisci temporibus exercitationem beatae ea
          possimus iusto delectus!
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign img" />
      </div>
    </div>
  </div>
);

export default Chef;
