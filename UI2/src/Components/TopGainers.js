import React from "react";
import "./TopGainers.css";

const TopGainers = () => {
  return (
    <div>
      <div className="container" id="topgainer">
        TOP GAINERS
      </div>
      <div id="gainerlist">
        <div className="row align-items-start">
          <div className="title col">
            <p>ITEM NAME</p>
          </div>
          <div className="title col">
            <p>PRICE (Per Qtl.)</p>
          </div>
          <div className="title col">
            <p>CHANGE</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="row align-items-start">
          <div className="title col">
            <div className="container">
              <p className="itemname">Rice</p>
              <p className="itemname">Wheat</p>
              <p className="itemname">Potato</p>
              <p className="itemname">Black Pepper</p>
              <p className="itemname">Barley</p>
              <p className="itemname">Sugar</p>
            </div>
          </div>
          <div className="title col">
            <div className="container">
              <p className="itemname">2,939.00 Rs</p>
              <p className="itemname">2,146.00 Rs</p>
              <p className="itemname">1,806.00 Rs</p>
              <p className="itemname">4,500.00 Rs</p>
              <p className="itemname">2,700.00 Rs</p>
              <p className="itemname">5,500.00 Rs</p>
            </div>
          </div>
          <div className="title col">
            <div className="container">
              <p className="itemname" style={{color: "green"}}>6.64%</p>
              <p className="itemname" style={{color: "green"}}>4.34%</p>
              <p className="itemname" style={{color: "green"}}>2.55%</p>
              <p className="itemname" style={{color: "green"}}>1.23%</p>
              <p className="itemname" style={{color: "green"}}>0.22%</p>
              <p className="itemname" style={{color: "green"}}>0.21%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopGainers;
