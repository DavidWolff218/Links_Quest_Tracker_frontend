import React, { Component } from 'react'

export class Login extends Component {
  state = {
    name:""
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.name === "Link"){
      this.props.history.push(`/Home`);
    } else {
      alert("You are not the Hero of Time")
    }

    
  }
  
  render() {
    console.log(this.state.name)
    return (
      <div className="login-body">
        <form className="login" onSubmit={this.handleSubmit} >
          <input className ="login-text" type="text" onChange={this.handleChange}></input><br></br>
          <button type="submit" className ="login-submit">Start your Adventure</button>
        </form>
      </div>
    )
  }
}

export default Login
