import React, { Component } from "react";
import "./InputForProducer.css";

class InputForManufacturer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      manufactured_process: [],
    }
  }

  render() {
    return (
      <div>
        <div className="detailsentry container">DETAILS ENTRY</div>
        <div className="dataentry">
          <div className="row">
            <div className="w1 col-6">BATCH NO.</div>
            <div className="w2 col-6">
              <input type="text" ref = {(input) => this.batch_no = input} style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">ITEM NAME</div>
            <div className="w2 col-6">
              <input type="text" ref = {(input) => this.manufactured_product_name = input} style={{color:"white"}}  className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">BUYER'S NAME</div>
            <div className="w2 col-6">
              <input type="text" ref = {(input) => this.manufactured_product_buyer_name = input} style={{color:"white"}}  className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">LOCATION</div>
            <div className="w2 col-6">
              <input type="text" ref = {(input) => this.manufactured_product_loaction = input} style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">QUANTITY</div>
            <div className="w2 col-6">
              <input type="text" ref = {(input) => this.manufactured_product_quantity = input} style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">SELLING PRICE</div>
            <div className="w2 col-6">
              <input type="text" ref = {(input) => this.manufactured_product_selling_price = input} style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">SELLING DATE</div>
            <div className="w2 col-6">
              <input type="date" ref = {(input) => this.manufactured_product_selling_date = input} style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">MFG. DATE</div>
            <div className="w2 col-6">
              <input type="date" ref = {(input) => this.manufactured_product_mfg_date = input} style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">EXPIRE DATE</div>
            <div className="w2 col-6">
              <input type="date" ref = {(input) => this.manufactured_product_exp_date = input} style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">MRP</div>
            <div className="w2 col-6">
              <input type="text" ref = {(input) => this.manufactured_product_mrp = input} style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">RAW PRODUCTS USED</div>
            <div className="w2 col-6">
              <input type="text" ref = {(input) => this.raw_batch_no = input} style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">DESCRIPTION</div>
            <div className="w2 col-6">
              <textarea type="text" ref = {(input) => this.manufactured_product_description = input} style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>

          <div>
            <div className="detailsentrymfgdet container">PROCESS APPLIED</div>
            <div className="dataentrymfgdet">
              <div className="container">
                <p className="txt1mfgdet">MFG. DETAILS</p>
                <div className="w2mfgdet">
                <form onSubmit={
                      (event) => {
                      event.preventDefault()
                      this.state.manufactured_process = [...this.state.manufactured_process, this.manufactured_process_1.value]
                      console.log(this.state.manufactured_process)
                      this.manufactured_process_1.value = ""
                    }
                  }>
                  <input
                    type="text"
                    style={{color: "white"}}
                    className="w3mfgdet form-control"
                    placeholder="Enter Manufacturing Detail"
                    ref = {(input) => this.manufactured_process_1 = input}
                  />
                </form>
              </div>
              <div>
                {this.state.manufactured_process.map(process => (<div className = "process" style = {{color: "white"}}>{process}</div>))}
              </div>
              </div>
            </div>
          </div>

          <button type="submit" className="btn1 btn-success" onClick = {(event) => this.props.addManufacturerDetails(
            [this.batch_no.value, this.manufactured_product_quantity.value, this.manufactured_product_mrp.value, this.manufactured_product_selling_price.value],
            [this.manufactured_product_name.value, this.manufactured_product_buyer_name.value, this.manufactured_product_loaction.value, this.manufactured_product_selling_date.value, this.manufactured_product_mfg_date.value, this.manufactured_product_exp_date.value, this.manufactured_product_description],
            this.raw_batch_no.value.split(','),
            this.state.manufactured_process)}>
            SUBMIT
          </button>

        </div>
      </div>
    );
  }
};

export default InputForManufacturer;
