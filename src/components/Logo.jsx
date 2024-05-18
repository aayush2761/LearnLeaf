import React from "react";
import logos from "../assets/logos.svg"
import logosvg from "../assets/logosvg.svg";

function Logo({ width = "100px", height = "100px" }) {
  return (
    <div className="text-center">
      <img src={logosvg} alt="learnLeaf" width={width} height={height} />
    </div>
  );
}

export default Logo;
