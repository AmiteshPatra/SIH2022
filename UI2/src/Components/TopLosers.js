import React from 'react'
import "./TopGainers.css";

const TopLosers = () => {
  return (
    <div>
      <div className="container" id="toploser">
        TOP LOSERS
      </div>
      <div id="loserlist">
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
              <p className="itemname">Garlic</p>
              <p className="itemname">Papaya</p>
              <p className="itemname">Maize</p>
              <p className="itemname">Tomato</p>
              <p className="itemname">Chilly</p>
              <p className="itemname">Capsicum</p>
            </div>
          </div>
          <div className="title col">
            <div className="container">
              <p className="itemname">5,700.00 Rs</p>
              <p className="itemname">2,422.00 Rs</p>
              <p className="itemname">1,350.00 Rs</p>
              <p className="itemname">2,348.00 Rs</p>
              <p className="itemname">19,731.00 Rs</p>
              <p className="itemname">4,100.00 Rs</p>
            </div>
          </div>
          <div className="title col">
            <div className="container">
              <p className="itemname" style={{color: "red"}}>-3.23%</p>
              <p className="itemname" style={{color: "red"}}>-3.14%</p>
              <p className="itemname" style={{color: "red"}}>-2.55%</p>
              <p className="itemname" style={{color: "red"}}>-2.23%</p>
              <p className="itemname" style={{color: "red"}}>-1.22%</p>
              <p className="itemname" style={{color: "red"}}>-0.21%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopLosers
