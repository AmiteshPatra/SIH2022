import React from "react";
import "./CustomerHome.css";

const CustomerHome = () => {
  return (
    <div>
      <div className="livetracking container">LIVE TRACKING</div>
      <div className="row">
        <div className="imgdisplay container col-12 col-md-6 col-lg-4">
          <img
            className="imgdisplay1"
            src="https://cdn.anscommerce.com/image/tr:h-1355,w-1080,cm-pad_resize/data/BIKANERVALA/BIKANO1083_2.png"
            alt=""
          />
          WAFERS <br></br>
          0x234fd4a4722ed2
        </div>
        <div className="baseinfo container col-12 col-md-6 col-lg-4">
          <div className="row">
            <div className="mfg col-6">
              <b>MRP</b>
            </div>
            <div className="mfg col-6">
              <p>10/- Rs</p>
            </div>
          </div>
          <div className="row">
            <div className="mfg col-6">
              <b>Mfg on</b>
            </div>
            <div className="mfg col-6">
              <p>Aug, 20</p>
            </div>
          </div>
          <div className="row">
            <div className="mfg col-6">
              <b>Exp on</b>
            </div>
            <div className="mfg col-6">
              <p>Jan, 22</p>
            </div>
          </div>
        </div>
        <div className="tests container col-12 col-md-6 col-lg-4">
          <div className="row">
            <div className="mfg col-12 col-md-6 col-lg-4">
              <b>Test 1</b>
            </div>
            <div className="mfg col-12 col-md-6 col-lg-4">
              <b>Test 2</b>
            </div>
            <div className="mfg col-12 col-md-6 col-lg-4">
              <b>Test 3</b>
            </div>
          </div>
          <div className="row">
            <div className="mfg col-12 col-md-6 col-lg-4">
              <b>Test 4</b>
            </div>
            <div className="mfg col-12 col-md-6 col-lg-4">
              <b>Test 5</b>
            </div>
            <div className="mfg col-12 col-md-6 col-lg-4">
              <b>Test 6</b>
            </div>
          </div>
          <div className="row">
            <div className="mfg col-12 col-md-6 col-lg-4">
              <b>Test 7</b>
            </div>
            <div className="mfg col-12 col-md-6 col-lg-4">
              <b>Test 8</b>
            </div>
            <div className="mfg col-12 col-md-6 col-lg-4">
              <b>Test 9</b>
            </div>
          </div>
        </div>
      </div>
      <div className="detailedtracing container">DETAILED TRACING</div>
      <div className="stage container">
      <div className="row">
            <div className="mfg col-12 col-md-6 col-lg-4">
              <p>Raw Stage</p>
            </div>
            <div className="mfg col-12 col-md-6 col-lg-4">
              <p>Processing Stage</p>
            </div>
            <div className="mfg col-12 col-md-6 col-lg-4">
              <p>Market Stage</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CustomerHome;
