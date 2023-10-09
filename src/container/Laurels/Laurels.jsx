import React from "react";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__opensans" style={{ color: "#AAA" }}>
        {subtitle}
      </p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <img src={images.logo} alt="award logo" className=" app__awards-img" />
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
    </div>
    <div className="app__laurels_awards">
      {data.awards.map((award) => (
        <AwardCard award={award} key={award.title} />
      ))}
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels img" />
    </div>
  </div>
);

export default Laurels;
