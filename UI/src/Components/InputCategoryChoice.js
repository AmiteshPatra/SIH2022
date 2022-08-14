import React from "react";
import "./InputCategoryChoice.css";
import producer from "../Images/Producer.png";
import manufacturer from "../Images/Manufacturer.png";

const InputCategoryChoice = () => {
  return (
    <div>
      <div className="detailsentry container">DETAILS ENTRY</div>
      <p className="txt1">Choose what describes you the best</p>
      <div className="big1 container">
        <div className="row">
          <div className="choice1 container col-4">
            <img src={producer} alt="" />
            <p className="txt2">Producer</p>
          </div>
          <div className="choice2 container col-4">
            <img src={manufacturer} alt="" />
            <p className="txt2">Processor</p>
          </div>
          <div className="choice3 container col-4">
            <img src={manufacturer} alt="" />
            <p className="txt2">Manufacturer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputCategoryChoice;
