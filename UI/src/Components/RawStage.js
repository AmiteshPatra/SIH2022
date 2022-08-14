import React from "react";
import "./RawStage.css";

const RawStage = () => {
  return (
    <div>
      <div className="rawstage container">RAW STAGE</div>
      <div className="materiallist container">
        <p className="material">MATERIAL</p>
        <div className="line"></div>
        <ul className="materials">
                Potato<br/>
                Vegetable Oil<br/>
                Salt<br/>
        </ul>
      </div>
    </div>
  );
};

export default RawStage;
