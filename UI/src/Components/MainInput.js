import React,{useState} from "react";
import CustomerHome from "./CustomerHome";
import "./MainInput.css";

const MainInput = (props) => {

  const [product_id,setProduct_id] = useState("");
  const [page_switch,setPage_switch] = useState(0);

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

  
    if(page_switch == 1){
      return (<CustomerHome productId={product_id} product_name = {props.product_name} getRawProductDetails = {props.getRawProductDetails} raw_products = {props.raw_products} getRawProductName = {props.getRawProductName} product_name_array = {props.product_name_array} />);
    }
      else
      {return (
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

  );
}
};

export default MainInput;
