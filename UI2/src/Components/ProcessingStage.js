import React from "react";
import "./RawStage.css";

const ProcessingStage = () => {
  return (
    <div>
      <div className="rawstage container" id="processing">
        PROCESSING STAGE
      </div>
      <div className="materiallist container">
        <p className="material">PROCESS</p>
        <div className="line"></div>
        <div className="processingplace">
          Nilons Gwalior
          <br />
        </div>
        <div className="process">
          Chopped Mangoes
          <br />
          Grinded Spices
          <br />
          Added Oil & Spices
          <br />
        </div>
        <div className="line"></div>
        <div className="processingplace">
          Nilons Nagpur
          <br />
        </div>
        <div className="process">
          Packaging
          <br />
        </div>
      </div>
    </div>
  );
};

export default ProcessingStage;
