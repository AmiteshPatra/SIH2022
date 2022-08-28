import React, {useState,useEffect} from "react";
import "./RawStage.css";

const RawStage = (props) => {

  useEffect(()=> {

    const iframeData = document.getElementById("iframeId")
    const lat = 9.549883302881309
    const lon = 77.58947022862564
    iframeData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
  })

  const loadRawDetails =(e)=> {
    console.log(props.raw_products)
    props.getRawProductName(props.raw_products)
  }

  loadRawDetails()

  return (
    <div>
      <div className="rawstage container">RAW STAGE</div>
      <div className="row">
      <div className="materiallist container col-2">
        <p className="material">MATERIAL</p>
        <div className="line"></div>
        <ul className="materials">
        </ul>
          <div>
            {(props.product_name_array != undefined)? props.product_name_array.map(crop => (<div className = "crop">{crop}</div>)) : "N.A."}
          </div>
      </div>
        <div className="mapouter col-2">
            <iframe
              className="map"
              id="iframeId"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        </div>
      </div>
  );
};

export default RawStage;
