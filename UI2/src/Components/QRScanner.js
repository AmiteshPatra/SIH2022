import React, { useState } from "react";
import QrReader from "react-qr-reader";
import CustomerHome from "./CustomerHome";

const QRScanner = (props) => {
    // const [data, setData] = useState('No result');
    const [scanResultWebCam, setScanResultWebCam] =  useState('');

    const handleErrorWebCam = (error) => {
      console.log(error);
    }
    const handleScanWebCam = (result) => {
      if (result){
          setScanResultWebCam(result)
      }
      console.log(scanResultWebCam)
     }

  if(scanResultWebCam != "") {
    props.getProductDetails(scanResultWebCam)
    props.getRawProductDetails(scanResultWebCam)
    return(
      <CustomerHome productId={scanResultWebCam} product_name = {props.product_name} getRawProductDetails = {props.getRawProductDetails} raw_products = {props.raw_products} getRawProductName = {props.getRawProductName} product_name_array = {props.product_name_array} />
    )
  }
  else {
  return (
    <div className="container" style={{ width: "25%", height: "25%" }}>
       <QrReader
        delay={300}
        style={{width: '100%'}}
        onError={handleErrorWebCam}
        onScan={handleScanWebCam}

      />
      <h3 style={{ color: "white" }}>Scanned by webcam: {scanResultWebCam}</h3>
    </div>
  );
  }
};

export default QRScanner;
