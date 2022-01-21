import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import profImage from "../me.png";

const Header = () => {

  const textRef = useRef();


  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Software Developer", "UI Designer", "Frontend Web Developer"],
    });
  },[ ]);

  return (
    <div className="container-md">
      <div className="row mt-auto">
        <div className="col-md-6 col-xs-6  profText">
          <h2>Hi There, I'm</h2>
          <h1>Daniel Mbedobe</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <div className="col-md-6 col-xs-6  profImage">
          <img src={profImage} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Header;
