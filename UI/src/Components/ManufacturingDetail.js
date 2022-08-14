import React from "react";
import "./ManufacturingDetail.css";

const ManufacturingDetail = () => {
  return (
    <div>
      <div className="detailsentrymfgdet container">DETAILS ENTRY</div>
      <div className="dataentrymfgdet">
        <div className="container">
          <p className="txt1mfgdet">MFG. DETAILS</p>
          <div className="w2mfgdet">
          <input
            type="text"
            style={{color: "white"}}
            className="w3mfgdet form-control"
            placeholder="Enter Manufacturing Detail"
          />
        </div>
        <div className="add another container">
            <p className="txt2mfgdet">Add Another + </p>
        </div>
        <button type="submit" class="btn1mfgdet btn-success">
          SUBMIT
        </button>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingDetail;
