import { React, Component } from "react";
import "./Header.css";
import logo from "../Images/titans111-logo.png";

class Header extends Component {
  render() {
    return (
      <nav className="navbar sticky-top  navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="home">
            <img className="logo" src={logo} alt=""/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="home">
                <a className="home1" style={{color: "black"}} aria-current="page" href="home">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color: "white"}} href="trends">
                  <b>TRENDS</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color: "white"}} href="aboutus">
                  <b>ABOUT US</b>
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                ref = {(input) => this.product_key = input}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit" onClick = {(event) => {
                event.preventDefault()
                this.props.setProductKey(this.product_key.value)
                }}>
                Search
              </button>
              <div className="nav-item">
                <a className="nav-link" href="signup">
                  Signup
                </a>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
