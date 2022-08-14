import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div>
      <div className="container-md">
        <div className="section-1">
          <div className="section-2">
            <h1 id="signup"> SIGN UP </h1>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="form mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="FloatingFirstName"
                    placeholder="First Name"
                  />
                  <label for="FloatingFirstName"></label>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="form mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="FloatingMiddleName"
                    placeholder="Middle Name"
                  />
                  <label for="FloatingMiddleName"></label>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="form mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="FloatingLastName"
                    placeholder="Last Name"
                  />
                  <label for="FloatingLastName"></label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="form mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="FloatingGender"
                    placeholder="Gender"
                  />
                  <label for="FloatingGender"></label>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="form mb-5">
                  <input
                    type="tel"
                    className="form-control"
                    id="FloatingPhone"
                    placeholder="Phone"
                  />
                  <label for="FloatingPhone"></label>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="form mb-5">
                  <input
                    type="email"
                    className="form-control"
                    id="FloatingEmail"
                    placeholder="Email"
                  />
                  <label for="FloatingEmail"></label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="form mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="FloatingCountry"
                    placeholder="Country"
                  />
                  <label for="FloatingCountry"></label>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="form mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="FloatingState"
                    placeholder="State"
                  />
                  <label for="FloatingState"></label>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="form mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="FloatingCity"
                    placeholder="City"
                  />
                  <label for="FloatingCity"></label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="form mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="FloatingAddress"
                    placeholder="Address"
                  />
                  <label for="FloatingAddress"></label>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="form mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="FloatingOccupation"
                    placeholder="Occupation"
                  />
                  <label for="FloatingOccupation"></label>
                </div>
              </div>
            </div>
            <button type="button" class="btn1 btn-success">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
