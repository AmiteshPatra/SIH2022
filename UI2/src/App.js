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
import HardwareFirebase from "./Components/HardwareFirebase"
import QRCodeGenerator from "./Components/QRCodeGenerator"
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
    this.getRawProductDetails = this.getRawProductDetails.bind(this)
    this.getRawProductName = this.getRawProductName.bind(this)
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

  addPreProcessorDetails(uint_args, string_args, raw_batch_no, manufactured_processes) {
    // try {
      this.state.model.methods.addPreProcessorDetails(uint_args, string_args, raw_batch_no, manufactured_processes).send({from: this.state.account, gas:"1000000"}).once('receipt', (receipt) => {
        alert("Data Added Sucessfully")
      })
    // } catch(err) {
      // alert("Sorry an error occured")
    // }
  }

  addManufacturerDetails(uint_args, string_args, raw_batch_no, manufactured_processes) {
    // try {
      this.state.model.methods.addManufacturerDetails(uint_args, string_args, raw_batch_no, manufactured_processes).send({from: this.state.account, gas:"1000000"}).once('receipt', (receipt) => {
        alert("Data Added Sucessfully")
      })
    // } catch(err) {
      // alert("Sorry an error occured")
    // }
  }

  async getProductDetails(product_key) {
    const product_name = await this.state.model.methods.manufacturerDetailsMap(product_key).call()
    this.setState({product_name})
    // console.log(product_name)
  }

  async getRawProductDetails(product_key) {
    this.state.model.methods.getRawProductDetails(product_key).send({from: this.state.account, gas:"1000000"})
    const raw_products = await this.state.model.methods.returnRawProductDetails().call()
    this.setState({raw_products})
    // console.log(raw_products)
  }

  async getRawProductName(raw_product_array) {
    var product_name_array = []
    var temp;
    for(var i = 0; i < raw_product_array.length; i++) {
      temp = await this.state.model.methods.farmerDetailsMap(raw_product_array[i]).call()
      product_name_array.push(temp['1'])
    }
    this.setState({product_name_array})
  }

  render() {
    return (
      <>
        <Router>
          <div className="App">
            <Header />
            {/* <CustomerHome /> */}
            {/* <InputCategoryChoice /> */}
            {/* <InputForProducer addFarmerDetails = {this.addFarmerDetails} /> 
                <InputForPreProcessor addPreProcessorDetails = {this.addPreProcessorDetails} /> 
                <InputForManufacturer addManufacturerDetails = {this.addManufacturerDetails} /> */}
            {/* <ManufacturingDetail /> */}
            {/* <RawStage /> */}
            {/* <ProcessingStage />*/}
             <MainInput getProductDetails = {this.getProductDetails} product_name = {this.state.product_name} getRawProductDetails = {this.getRawProductDetails} raw_products = {this.state.raw_products} getRawProductName = {this.getRawProductName} product_name_array = {this.state.product_name_array}/> 
            {/* <HardwareFirebase /> */}
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
