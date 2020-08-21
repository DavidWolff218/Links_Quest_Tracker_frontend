import React, { Component } from "react";

export class Login extends Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  clearLogin = () => {
    document.querySelector(".login").reset();
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.name === "Link") {
      this.props.history.push(`/Home`);
    } else {
      alert("You are not the Hero of Time");
      this.clearLogin();
    }
  };

  render() {
    return (
      <div className="login-body">
        <form className="login" onSubmit={this.handleSubmit}>
          <input
            className="login-text"
            type="text"
            onChange={this.handleChange}
          ></input>
          <br></br>
          <button type="submit" className="login-submit">
            Track your Adventure
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
