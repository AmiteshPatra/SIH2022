import React,{useState} from "react";
import "./CustomerHome.css";
import GreenBlock from "../Images/Group 4 (1).png";
import YellowBlock from "../Images/Group 5 (1).png";
import BlueBlock from "../Images/Group 6 (2).png";
import RawStage from "./RawStage"
import ProcessingStage from "./ProcessingStage"

const CustomerHome = (props) => {
  const [page, changePage] = useState("")
  var product_details
  var raw_details
  try{product_details = props.product_name}
  catch(err) {}
  //console.log(product_details)

  const loadRawDetails =(e)=> {
    //props.getRawProductDetails()
    changePage("raw")
  }

  const loadProcessingDetails =(e)=> {
    changePage("processing")
  }

  if(page == "raw") {
    //console.log(props.raw_products)
    return (<RawStage raw_products = {props.raw_products} getRawProductName = {props.getRawProductName} product_name_array = {props.product_name_array} />);
  }
  else if(page == "processing") {
    return (<ProcessingStage />);
  }
  else {
    return (
      <div>
        <div className="livetracking container">LIVE TRACKING</div>
        <div className="row">
          <div className="imgdisplay container col-12 col-md-6 col-lg-4">
            <img
              className="imgdisplay1"
              src="https://cdn.anscommerce.com/image/tr:h-1355,w-1080,cm-pad_resize/data/BIKANERVALA/BIKANO1083_2.png"
              alt=""
            />
            <div id = "product_name">
              {(product_details != undefined) ? product_details['4'] : ""}
            </div>
            <div id = 'productId'>
              {(product_details != undefined) ? product_details['0'] : ""}
            </div>
          </div>
          <div className="baseinfo container col-12 col-md-6 col-lg-4">
            <div className="row">
              <div className="mfg col-6">
                <b>MRP</b>
              </div>
              <div className="mfg col-6">
                <p>{(product_details != undefined) ? product_details['2'] : ""}/- Rs</p>
              </div>
            </div>
            <div className="row">
              <div className="mfg col-6">
                <b>Mfg on</b>
              </div>
              <div className="mfg col-6">
                <p>{(product_details != undefined) ? product_details['8'] : ""}</p>
              </div>
            </div>
            <div className="row">
              <div className="mfg col-6">
                <b>Exp on</b>
              </div>
              <div className="mfg col-6">
                <p>{(product_details != undefined) ? product_details['9'] : ""}</p>
              </div>
            </div>
          </div>
          <div className="tests container col-12 col-md-6 col-lg-4">
            <div className="row">
              <div className="mfg2 col-12 col-md-6 col-lg-4">
                <b>Test 1</b>
              </div>
              <div className="mfg2 col-12 col-md-6 col-lg-4">
                <b>Test 2</b>
              </div>
              <div className="mfg2 col-12 col-md-6 col-lg-4">
                <b>Test 3</b>
              </div>
            </div>
            <div className="row">
              <div className="mfg2 col-12 col-md-6 col-lg-4">
                <b>Test 4</b>
              </div>
              <div className="mfg2 col-12 col-md-6 col-lg-4">
                <b>Test 5</b>
              </div>
              <div className="mfg2 col-12 col-md-6 col-lg-4">
                <b>Test 6</b>
              </div>
            </div>
            <div className="row">
              <div className="mfg2 col-12 col-md-6 col-lg-4">
                <b>Test 7</b>
              </div>
              <div className="mfg2 col-12 col-md-6 col-lg-4">
                <b>Test 8</b>
              </div>
              <div className="mfg2 col-12 col-md-6 col-lg-4">
                <b>Test 9</b>
              </div>
            </div>
          </div>
        </div>
        <div className="detailedtracing container">DETAILED TRACING</div>
        <div className="stage container">
        <div className="row">
              <div className="mfg col-12 col-md-6 col-lg-4" onClick = {loadRawDetails}>
                <img id="greenblock" src={GreenBlock} alt="" />
                <p>Raw Stage</p>
              </div>
              <div className="mfg col-12 col-md-6 col-lg-4" onClick = {loadProcessingDetails}>
              <img id="yellowblock" src={YellowBlock} alt="" />
                <p>Processing Stage</p>
              </div>
              <div className="mfg col-12 col-md-6 col-lg-4">
              <img id="blueblock" src={BlueBlock} alt="" />
                <p>Market Stage</p>
              </div>
            </div>
        </div>
      </div>
    );
  }
};

export default CustomerHome;
