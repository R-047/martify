import React, { Component } from "react";
import "./login.css";
import ReactDom from "react-dom";

export class Login extends Component {
  constructor(props) {
    super(props);
    var formState = {
      email: "",
      pwd: "",
    };
    this.state = formState;
    this.formRef = React.createRef();
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleOnChange(e) {
    console.log(e);
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      this.formRef.current.setAttribute("tabIndex", "1");
      this.formRef.current.focus();
    }
  }

  handleOnBlur(e) {
    if (!this.formRef.current.contains(e.target)) {
      this.props.onClose();
    }
  }

  render() {
    if (this.props.isOpen) {
      return ReactDom.createPortal(
        <div className="overlay" onClick={this.handleOnBlur}>
          <div className="login-form-container" ref={this.formRef}>
            <header>
              <h3>Sign In</h3>
            </header>
            
            <form>
              <div>
                <label for="emailBox">email</label>
                <br />
                <input
                  type="text"
                  name="emailBox"
                  onChange={this.handleOnChange}
                ></input>
              </div>

              <div>
                <label for="pwdBox">password</label>
                <br />
                <input
                  type="password"
                  name="pwdBox"
                  onChange={this.handleOnChange}
                ></input>
              </div>

              <div>
                <input type="submit"></input>
              </div>
            </form>

            <div className="others-container">
              <div>
                <a>Forgot Password?</a>
              </div>
              <div className="ORcontainer">
                <div className="lhsLine"></div>
                OR
                <div className="rhsLine"></div>
              </div>

              <div className="google-btn">
                <svg width="25" height="25" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 0C9.45333 0 0.5 8.955 0.5 20C0.5 31.045 9.45333 40 20.5 40C31.545 40 40.5 31.045 40.5 20C40.5 8.955 31.545 0 20.5 0ZM20.7333 31.6967C14.2867 31.6967 9.06667 26.4633 9.06667 20C9.06667 13.5367 14.2867 8.30333 20.7333 8.30333C23.8833 8.30333 26.5167 9.465 28.5367 11.3517L25.2467 14.6483V14.6417C24.0217 13.4717 22.4683 12.8717 20.7333 12.8717C16.8833 12.8717 13.755 16.1317 13.755 19.9933C13.755 23.8517 16.8833 27.1217 20.7333 27.1217C24.2267 27.1217 26.6033 25.1183 27.0933 22.3683H20.7333V17.8067H31.7083C31.855 18.59 31.9333 19.4067 31.9333 20.2633C31.9333 26.9467 27.4717 31.6967 20.7333 31.6967Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="40" height="40" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>

                <a>continue with google</a>
              </div>

              <div className="signUp-container">
                <p>Don't have an account? </p>
                <a>sign up</a>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById("login")
      );
    } else {
      return null;
    }
  }
}

export default Login;
