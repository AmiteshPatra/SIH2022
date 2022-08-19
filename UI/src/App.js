import React, {Component} from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import InputCategoryChoice from "./Components/InputCategoryChoice";
import CustomerHome from "./Components/CustomerHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputForProducer from "./Components/InputForProducer";
import InputForPreProcessor from "./Components/InputForPreProcessor"
import InputForManufacturer from "./Components/InputForManufacturer";
import ManufacturingDetail from "./Components/ManufacturingDetail";
import RawStage from "./Components/RawStage";
import ProcessingStage from "./Components/ProcessingStage"
import MainInput from "./Components/MainInput"
import Web3 from "web3";
import {MODEL_ABI, MODEL_ADDRESS} from "./config";

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3("http://localhost:7545")
    const network = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
    const model = new web3.eth.Contract(MODEL_ABI, MODEL_ADDRESS)
    this.setState({model})
  }

  constructor(props) {
    super(props)
    this.state = {
      account: ''
    }
    this.addFarmerDetails = this.addFarmerDetails.bind(this)
    this.addPreProcessorDetails = this.addPreProcessorDetails.bind(this)
    this.addManufacturerDetails = this.addManufacturerDetails.bind(this)
    this.getProductDetails = this.getProductDetails.bind(this)
  }

  addFarmerDetails(batch_no, crop_name, buyer_name, location, crop_quantity, crop_selling_price, selling_date, crop_description) {
    try {
      this.state.model.methods.addFarmerDetails(batch_no, crop_name, buyer_name, location, crop_quantity, crop_selling_price, selling_date, crop_description).send({from: this.state.account, gas:"1000000"}).once('receipt', (receipt) => {
        alert("Data Added Sucessfully")
      })
    } catch(err) {
      alert("Sorry an error occured")
    }
  }

  addPreProcessorDetails(uint_args, string_args, raw_batch_no) {
    try {
      this.state.model.methods.addPreProcessorDetails(uint_args, string_args, raw_batch_no).send({from: this.state.account, gas:"1000000"}).once('receipt', (receipt) => {
        alert("Data Added Sucessfully")
      })
    } catch(err) {
      alert("Sorry an error occured")
    }
  }

  addManufacturerDetails(uint_args, string_args, raw_batch_no) {
    try {
      this.state.model.methods.addManufacturerDetails(uint_args, string_args, raw_batch_no).send({from: this.state.account, gas:"1000000"}).once('receipt', (receipt) => {
        alert("Data Added Sucessfully")
      })
    } catch(err) {
      alert("Sorry an error occured")
    }
  }

  async getProductDetails(product_key) {
    const product_name = await this.state.model.methods.manufacturerDetailsMap(product_key).call()
    this.setState({product_name})
    // console.log(product_name)
  }

  render() {
    return (
      <>
        <Router>
          <div className="App">
            <Header />
            {/* <CustomerHome /> */}
            {/* <InputCategoryChoice /> */}
            {/* <InputForProducer addFarmerDetails = {this.addFarmerDetails} /> */}
            {/* <InputForPreProcessor addPreProcessorDetails = {this.addPreProcessorDetails} /> */}
            {/* <InputForManufacturer addManufacturerDetails = {this.addManufacturerDetails} /> */}
            {/* <ManufacturingDetail /> */}
            {/* <RawStage /> */} 
            {/* <ProcessingStage />*/} 
             <MainInput getProductDetails = {this.getProductDetails} product_name = {this.state.product_name}/> 
            {/* <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} /> 
                </Routes> */}
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
