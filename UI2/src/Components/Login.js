import React from "react";
import "./Login.css";

function App() {
  return <Desktop1 {...desktop1Data} />;
}

export default App;

function Desktop1(props) {
  const {
    title,
    inputType1,
    inputPlaceholder1,
    inputType2,
    inputPlaceholder2,
    forgotPassword,
    letsGo,
    notAMemberSignUpNow,
    or,
    overlapGroup2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form
        className="desktop-1screen"
        name="form1"
        action="form1"
        method="post"
      >
        <div className="overlap-group">
          <h1 className="title">{title}</h1>
          <div className="overlap-group5">
            <input
              className="username"
              name="username"
              placeholder={inputPlaceholder1}
              type={inputType1}
              required
            />
          </div>
          <div className="overlap-group3">
            <input
              className="password"
              name="password"
              placeholder={inputPlaceholder2}
              type={inputType2}
              required
            />
          </div>
          <div className="forgot-passwordmontserrat-normal-white-18-7px">
            {forgotPassword}
          </div>
          <div className="overlap-group4">
            <a href="javascript:SubmitForm('form1')">
              <div className="rectangle-3"></div>
            </a>
            <div className="lets-go">{letsGo}</div>
          </div>
          {/* <div className="not-a-member-sign-up-nowmontserrat-normal-white-18-7px"> */}
            <a href="signup" className="notAMemberSignUpNow link-light">{notAMemberSignUpNow}</a>
          {/* </div> */}
          <div className="or">{or}</div>
          <div className="overlap-group-container">
            {/* <div
              className="overlap-group2"
              style={{ backgroundImage: `url(${overlapGroup2})` }}
            ></div> */}
            <img
              className="overlap-group2"
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt=""
            />
            {/* <div className="overlap-group1"></div> */}
            <img
              className="overlap-group1"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt=""
            />
          </div>
        </div>
      </form>
    </div>
  );
}

const desktop1Data = {
  title: "LOGIN",
  inputType1: "text",
  inputPlaceholder1: "Username",
  inputType2: "password",
  inputPlaceholder2: "Password",
  forgotPassword: "Forgot Password?",
  letsGo: "Let’s Go",
  notAMemberSignUpNow: "Not a member? Sign up Now",
  or: "-OR-",
  overlapGroup2: "icons8-facebook-48.png",
};
