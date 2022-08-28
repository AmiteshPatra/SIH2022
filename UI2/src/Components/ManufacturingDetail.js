import {React, useState} from "react";
import "./ManufacturingDetail.css";

const ManufacturingDetail = () => {

  var manufactured_process_1

  const [product_id,setProduct_id] = useState("")
  const [manufactured_process,setManufacturedProcess] = useState([])

  const onChangeValue =(e)=> {
    setProduct_id(e.target.value);
  }

  const getManufacturedProcess = (e) => {
    e.preventDefault()
    console.log(manufactured_process_1.value)
    setManufacturedProcess([...manufactured_process, manufactured_process_1.value])
    console.log(manufactured_process)
  }

  const addManufacturedProcess = (e) => {
    e.preventDefault()
    console.log(manufactured_process)
  }

  return (
    <div>
      <div className="detailsentrymfgdet container">DETAILS ENTRY</div>
      <div className="dataentrymfgdet">
        <div className="container">
          <p className="txt1mfgdet">MFG. DETAILS</p>
          <div className="w2mfgdet">
          <form onSubmit={getManufacturedProcess}>
            <input
              type="text"
              style={{color: "white"}}
              className="w3mfgdet form-control"
              placeholder="Enter Manufacturing Detail"
              ref = {(input) => manufactured_process_1 = input}
            />
          </form>
        </div>
        <div className="add another container">
            <p className="txt2mfgdet">Add Another + </p>
        </div>
        <button type="submit" className="btn1mfgdet btn-success" onClick={addManufacturedProcess}>
          SUBMIT
        </button>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingDetail;
