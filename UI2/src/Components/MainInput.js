import React,{useState, useRef, useEffect} from "react";
import CustomerHome from "./CustomerHome";
import "./MainInput.css";
import QRScanner from "./QRScanner";
import QrReader from "react-qr-reader";

const MainInput = (props) => {

  const [product_id,setProduct_id] = useState("");
  const [page_switch,setPage_switch] = useState(0);
  const [scanResultFile, setScanResultFile] = useState("");
  const qrRef = useRef();

  useEffect(() => {
    console.log(qrRef.current);
  }, [qrRef]);

  const onChangeValue =(e)=> {
    setProduct_id(e.target.value);
  }

  const checkKeyDown = (e) => {
    if (e.code === 'Enter') e.preventDefault();
  }

  const onSubmitValue =(e)=> {
    e.preventDefault();
    setProduct_id(product_id);
    props.getProductDetails(product_id)
    props.getRawProductDetails(product_id)
    //console.log(props.raw_products)
    setPage_switch(1)
  }

  const handleErrorFile = (error) => {
    console.log(error);
  }
  const handleScanFile = (result) => {
    console.log("called")
      if (result) {
          setScanResultFile(result);
          console.log(scanResultFile)
      }
  }

  const onScanFile = () => {
    qrRef.current.openImageDialog();
  };

  const openCameraScanner = () => {
    setPage_switch(2);
  };

  
    if(page_switch == 1){
      return (<CustomerHome productId={product_id} product_name = {props.product_name} getRawProductDetails = {props.getRawProductDetails} raw_products = {props.raw_products} getRawProductName = {props.getRawProductName} product_name_array = {props.product_name_array} />);
    } else if (page_switch === 2) {
        return <QRScanner getProductDetails = {props.getProductDetails} getRawProductName = {props.getRawProductName} product_name = {props.product_name} getRawProductDetails = {props.getRawProductDetails} raw_products = {props.raw_products} product_name_array = {props.product_name_array} />;
    }
      else
      {return (
        <div>
        <button onClick={onScanFile}>Upload QR</button>
        <div className="container" style={{ width: "25%", height: "25%" }}>
          <QrReader
            // ref={qrRef}
            ref={qrRef}
            delay={300}
            style={{ width: "100%" }}
            onError={handleErrorFile}
            onScan={handleScanFile}
            legacyMode
          />
          {console.log(scanResultFile)}
        </div>
        <h3 style={{ color: "white" }}>Product Id: {scanResultFile}</h3>
        <button onClick={openCameraScanner}>Scan QR</button>
    <div>
      <form className="d-flex" onSubmit={onSubmitValue}>
        <input
          value={product_id}
          id="mainsearch"
          className=" container"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={onChangeValue}
          
        />
      </form>
      <button className="btn btn-outline-success" id="mainbutton" onClick={onSubmitValue} type="submit">
        Search
      </button>
    </div>
    </div>
  );
}
};

export default MainInput;
