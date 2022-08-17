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
          Balaji Gwalior
          <br />
        </div>
        <div className="process">
          Cleaned Potato
          <br />
          Fried Potato
          <br />
          Seasoning
          <br />
          Baking
          <br />
        </div>
        <div className="line"></div>
        <div className="processingplace">
          Balaji Nagpur
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
