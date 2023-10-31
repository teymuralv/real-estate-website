import "./Option.css"
import React, { useState, useEffect } from 'react';
import newProperties from "../../Assets/options/newProperties.png";
import agent from "../../Assets/options/agent.png";
import building from "../../Assets/options/building.png";
import house from "../../Assets/options/house.png";


function Option() {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('scroll-reveal-component');
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.9) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <div id="scroll-reveal-component"  className={`option ${isVisible ? 'visible' : ''}`}>
            <div className="firstDiv">
                <div className="box">
                    <img src={newProperties} alt="" />
                    <p>New Properties</p>
                </div>
                <div className="box">
                    <img src={agent} alt="" />
                    <p>Contact Agent</p>
                </div>
            </div>




            <div className="secondDiv">
                <div className="box">
                    <img src={building} alt="" />
                    <p>Building for Sale</p>
                </div>
                <div className="box">
                    <img src={house} alt="" />
                    <p>House for Sale</p>
                </div>
            </div>

        </div>
    )
}
export default Option