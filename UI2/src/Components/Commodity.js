import React from "react";
import "./Commodity.css";
import Image from "../Images/372212.jpg";

const Commodity = () => {
  return (
    <div>
      <div className="container" id="comname">
        WHEAT
      </div>
      <div className="row">
        <div className="comcoll col">
          <div className="imgcont ">
            <img id="comimg" src={Image} alt="img not found" />
          </div>
          <div className="container-fluid" id="brief">
            <div className="row" id="briefforcast">
              Brief Forcast
            </div>
            <div className="row align-items-start">
              <div className="col" id="minprice">
                <p>Min. Price</p>
              </div>
              <div className=" col" id="minpricevalue">
                <p>OCT 19 Rs 950.10</p>
              </div>
            </div>
            <div className="line"></div>
            <div className="row align-items-start">
              <div className="col" id="maxprice">
                <p>Max. Price</p>
              </div>
              <div className=" col" id="maxpricevalue">
                <p>DEC 19 Rs 7656.10</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div id="comdet">
            <div className="row align-items-start">
              <div className="detitemtitle col">
                <p>Current Price</p>
              </div>
              <div className="detitem col">
                <p>Rs 2,146.00/ Qtl.</p>
              </div>
            </div>
            <div className="line"></div>
            <div className="row align-items-start">
              <div className="detitemtitle col">
                <p>Prime Location</p>
              </div>
              <div className="detitem col">
                <p>UP. Punjab, Haryana, Rajasthan, Bihar</p>
              </div>
            </div>
            <div className="line"></div>
            <div className="row align-items-start">
              <div className="detitemtitle col">
                <p>Crop Type</p>
              </div>
              <div className="detitem col">
                <p>Rabi</p>
              </div>
            </div>
            <div className="line"></div>
            <div className="row align-items-start">
              <div className="detitemtitle col">
                <p>Export</p>
              </div>
              <div className="detitem col">
                <p>Sri Lanka, UAE, Taiwan</p>
              </div>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commodity;
