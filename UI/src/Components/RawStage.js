import React from "react";
import "./RawStage.css";

const RawStage = (props) => {

  const loadRawDetails =(e)=> {
    props.getRawProductName(props.raw_products)
  }

  loadRawDetails()

  return (
    <div>
      <div className="rawstage container">RAW STAGE</div>
      <div className="materiallist container">
        <p className="material">MATERIAL</p>
        <div className="line"></div>
        <ul className="materials">
        </ul>
          {(props.product_name_array != undefined)? props.product_name_array.map(crop => (<div className = "crop">{crop}</div>)) : "N.A."}
      </div>
    </div>
  );
};

export default RawStage;
