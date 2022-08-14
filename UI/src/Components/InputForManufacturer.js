import React, { Component } from "react";
import "./InputForProducer.css";

class InputForManufacturer extends Component {

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
              <input type="text"  style={{color:"white"}}  className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">LOCATION</div>
            <div className="w2 col-6">
              <input type="text"  style={{color:"white"}} className=" w3 form-control" placeholder="" />
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
              <input type="date"  style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">MRP</div>
            <div className="w2 col-6">
              <input type="text"  style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">EXPIRE DATE</div>
            <div className="w2 col-6">
              <input type="date"  style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">MFG. DATE</div>
            <div className="w2 col-6">
              <input type="date"  style={{color:"white"}} className=" w3 form-control" placeholder="" />
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
              <textarea type="text"  style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <button type="submit" className="btn1 btn-success" onClick = {(event) => this.props.addManufacturerDetails(this.batch_no.value, this.manufactured_product_name.value, this.manufactured_product_selling_price.value, this.manufactured_product_quantity.value, this.raw_batch_no.value.split(','))}>
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
};

export default InputForManufacturer;
