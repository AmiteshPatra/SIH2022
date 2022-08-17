import React,{useState} from "react";
import CustomerHome from "./CustomerHome";
import "./MainInput.css";

const MainInput = (props) => {

  const [product_id,setProduct_id] = useState("");
  const [page_switch,setPage_switch] = useState(0);

  const onChangeValue =(e)=> {
    setProduct_id(e.target.value);
    console.log(product_id);
  }

  const onSubmitValue =(e)=> {
    e.preventDefault();
    setProduct_id(product_id);
    console.log(product_id);
    setPage_switch(1);
    props.getProductDetails(product_id)
  }

  
    if(page_switch == 1){
      return (<CustomerHome productId={product_id} product_name = {props.product_name} />);
    }
      else
      {return (
    <div>
      <form className="d-flex">
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
