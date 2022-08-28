import React, { useState, useEffect } from "react";
import "./CustomerHome.css";

const ProductTracking = (props) => {

  // console.log(props.Temperature)

  return (
    <div>
      <div className="livetracking container">REALTIME TRACKING</div>
      <div className="row">
        <div className="imgdisplay container col-12 col-md-6 col-lg-4">
          <img
            className="imgdisplay2"
            src="https://www.macmillandictionary.com/external/slideshow/full/141151_full.jpg"
            alt=""
          />
          MANGOES <br></br>
          0x234fd4a4722ed2
        </div>
        <div className="baseinfo container col-12 col-md-6 col-lg-4">
          <div className="row">
            <div className="mfg col-6">
              <b>Temp.</b>
            </div>
            <div className="mfg col-6">
              {/* <p>{props.Temperature}° C</p> */}
              <p>{props.Temperature["0"]}° C</p>
            </div>
          </div>
          <div className="row">
            <div className="mfg col-6">
              <b>Humidity</b>
            </div>
            <div className="mfg col-6">
              {/* <p>{props.Humidity}%</p> */}
              <p>{props.Temperature[1]}%</p>
            </div>
          </div>
          <div className="row">
            <div className="mfg col-6">
              <b>Alchohol</b>
            </div>
            <div className="mfg col-6">
              {/* <p>{props.Alcohol}%</p> */}
              <p>{props.Temperature[2]}%</p>
            </div>
          </div>
        </div>
        <div className="tests container col-12 col-md-6 col-lg-4">
          <div className="row" id="expireday">
            Expected Expire After
          </div>
          <p id="expectexpireday">20 Days</p>
        </div>
      </div>
    </div>
  );
};

export default ProductTracking;
