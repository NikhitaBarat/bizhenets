import React from "react";
import { UKRMAP } from "../../assets";
import './hero.styles.css';
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
            <div>
                <h1>Help to</h1>
            </div>
            <div className="mid-cont">
                <div className="line"></div>
                <h1>stop</h1>
            </div>
            <div>
                <h1>the war</h1>
            </div>
            <div className="support-now-container">
                <button>SUPPORT NOW</button>
            </div>
        </div>
        <img className="ukr-map" src={UKRMAP} alt="" />
      </div>
    </div>
  );
};

export default Hero;
