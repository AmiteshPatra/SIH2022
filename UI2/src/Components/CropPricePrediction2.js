import React from "react";
import "./InputForProducer.css";

const CropPricePrediction2 = () => {
  return (
    <div>
      <div className="container" id="ccphead">
        Crop Price Prediction
      </div>
      <div className="dataentry">
        <div className="row">
          <div className="w1 col-6">Minimum Price</div>
          <div className="w2 col-6">
            <input
              type="text"
              style={{ color: "white" }}
              className=" w3 form-control"
              placeholder="Minimum Price in Rs"
            />
          </div>
        </div>
        <div className="row">
          <div className="w1 col-6">Maximum Price</div>
          <div className="w2 col-6">
            <input
              type="text"
              style={{ color: "white" }}
              className=" w3 form-control"
              placeholder="Minimum Price in Rs"
            />
          </div>
        </div>
        <div className="row">
          <div className="w1 col-6">Arrival Year</div>
          <div className="w2 col-6">
            <input
              type="text"
              style={{ color: "white" }}
              className=" w3 form-control"
              placeholder="Arrival Year Ex. 2012"
            />
          </div>
        </div>
        <div className="row">
          <div className="w1 col-6">Arrival Month</div>
          <div className="w2 col-6">
            <input
              type="text"
              style={{ color: "white" }}
              className=" w3 form-control"
              placeholder="Arrival Month (1-12)"
            />
          </div>
        </div>
        <div className="row">
          <div className="w1 col-6">Arrival Week</div>
          <div className="w2 col-6">
            <input
              type="text"
              style={{ color: "white" }}
              className=" w3 form-control"
              placeholder="Arrival Week (1-4)"
            />
          </div>
        </div>
        <div className="row">
          <div className="w1 col-6">Arrival Day</div>
          <div className="w2 col-6">
            <input
              type="text"
              style={{ color: "white" }}
              className=" w3 form-control"
              placeholder="Arrival Day (1-31)"
            />
          </div>
        </div>
        <button type="submit" class="btn1 btn-success">
          Predict Price
        </button>

        <div className="container" id="prediction">
          <p id="predictiontitle">Predicted Price</p>
        </div>
        {/* <div className="container col-4" id="prediction1">
            <p id="predictiontitle">Rs 4,994 </p>
          </div> */}
      </div>
    </div>
  );
};

export default CropPricePrediction2;
