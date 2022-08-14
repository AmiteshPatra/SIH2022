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
  }

  addFarmerDetails(batch_no, crop_name, crop_selling_price, crop_quantity) {
    this.state.model.methods.addFarmerDetails(batch_no, crop_name, crop_selling_price, crop_quantity).send({from: this.state.account, gas:"1000000"})
  }

  addPreProcessorDetails(batch_no, processed_product_name, processed_product_selling_price, processed_product_quantity, raw_batch_no) {
    this.state.model.methods.addPreProcessorDetails(batch_no, processed_product_name, processed_product_selling_price, processed_product_quantity, raw_batch_no).send({from: this.state.account, gas:"1000000"})
  }

  addManufacturerDetails(batch_no, manufactured_product_name, manufactured_product_selling_price, manufactured_product_quantity, raw_batch_no) {
    this.state.model.methods.addManufacturerDetails(batch_no, manufactured_product_name, manufactured_product_selling_price, manufactured_product_quantity, raw_batch_no).send({from: this.state.account, gas:"1000000"})
  }

  render() {
    return (
      <>
        <Router>
          <div className="App">
            <Header />
            {/* <CustomerHome /> */ }
            {/* <InputForProducer addFarmerDetails = {this.addFarmerDetails} />*/}
            {/* <InputCategoryChoice /> */}
             <InputForManufacturer addManufacturerDetails = {this.addManufacturerDetails} /> 
            {/* <InputForPreProcessor addPreProcessorDetails = {this.addPreProcessorDetails} /> */}
            {/* <ManufacturingDetail /> */}
            {/* <RawStage /> */}
            <Routes>
              {/* <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} /> */}
            </Routes>
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
