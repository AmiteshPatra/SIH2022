import React, { useState } from "react";
import "./CropPricePrediction.css";

const CropPricePrediction = () => {
  const [crop, setCrop] = useState("");
  const [cropData, setCropData] = useState([]);

  const [cropVariety, setCropVariety] = useState("");
  const [varietyData, setVarietyData] = useState([]);

  const onChangeHandlerCrop = (e) => {
    setCrop(e.target.value);
  };

  const onChangeHandlerVariety = (e) => {
    setCropVariety(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newcropData = crop;
    const newvarietyData = cropVariety;
    setCropData([newcropData]);
    setVarietyData([newvarietyData]);
    setCrop("");
    setCropVariety("");
    console.log(cropData, varietyData);
  };

  return (
    <div>
      <div className="detailsentrycpp container">CROP PRICE PREDICTION</div>
      <div className="dataentrycpp">
        <div className="container">
          <p className="txt1cpp">Enter Crop Details</p>
          <form onSubmit={submitHandler}>
            <div className="w2cpp">
              <input
                type="text"
                style={{ color: "white" }}
                className="w3cpp form-control"
                placeholder="Enter Crop Name"
                value={crop}
                onChange={onChangeHandlerCrop}
              />
            </div>
            <div className="w2cpp">
              <input
                type="text"
                style={{ color: "white" }}
                className="w3cpp form-control"
                placeholder="Enter Crop Variety"
                value={cropVariety}
                onChange={onChangeHandlerVariety}
              />
            </div>
            <button type="submit" className="btn1cpp btn-success">
              Predict Price
            </button>
          </form>
          <div className="predict row">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropPricePrediction;
