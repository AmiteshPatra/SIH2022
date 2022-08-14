import React, { Component } from 'react'
import "./InputForProducer.css";

class InputForProducer extends Component {
  render() {
    return (
      <div>
        <div className="detailsentry container">DETAILS ENTRY</div>
        <div className="dataentry">
          <div className="row">
            <div className="w1 col-6">BATCH NO.</div>
            <div className="w2 col-6">
              <input type="text" ref = {(input) => this.batch_no = input}  style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">ITEM NAME</div>
            <div className="w2 col-6">
              <input type="text" ref = {(input) => this.crop_name = input} style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">BUYER'S NAME</div>
            <div className="w2 col-6">
              <input type="text"  style={{color:"white"}} className=" w3 form-control" placeholder="" />
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
              <input type="text" ref = {(input) => this.crop_quantity = input} style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">SELLING PRICE</div>
            <div className="w2 col-6">
              <input type="text" ref = {(input) => this.crop_selling_price = input} style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">SELLING DATE</div>
            <div className="w2 col-6">
              <input type="date"  style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <div className="row">
            <div className="w1 col-6">DESCRIPTION</div>
            <div className="w2 col-6">
              <textarea type="text"  style={{color:"white"}} className=" w3 form-control" placeholder="" />
            </div>
          </div>
          <button type="submit" className="btn1 btn-success" onClick = {(event) => {this.props.addFarmerDetails(this.batch_no.value,this.crop_name.value,this.crop_selling_price.value,this.crop_quantity.value)}}>
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
};

export default InputForProducer;
