import React, { Component } from "react";
import { connect } from "react-redux";
import { addQuest } from "../actions/quests";


export class Form extends Component {
  state = {
    quest: "",
    location: ""
  };

  handleDropChange = (event) => {
    this.setState({
      location: event.target.value
    });
  };

  handleChange = (event) => {
    this.setState({
      quest: event.target.value
    });
  };

  
  handleSubmit = (event) => {
    event.preventDefault();
    let location_render = this.state.location.replace(/\s+/,"")
  
    const newQuest = {
      content: this.state.quest,
      location_name: this.state.location,
    };

    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({quest: newQuest}),
    };

    fetch("http://localhost:3000/quests", reqObj)
      .then((resp) => resp.json())
      .then((quest) => {
        this.props.addQuest(quest);
        this.setState({
          quest: "",
          location: "",
        });
      });
      this.props.history.push(`/${location_render}`)
  };

  render() {
    return (
      <div>
        <select multiple={false} onChange={this.handleDropChange}>
          <option value={""}>Location</option>
          <option value={"Hyrule Castle"}>Hyrule Castle</option>
          <option value={"Zoras Domain"}>Zoras Domain</option>
          <option value={"Gerudo Desert"}>Gerudo Desert</option>
        </select>
        <form className="form" onSubmit={this.handleSubmit}>
          <textarea
            className="new-quest-input"
            onChange={this.handleChange}
            placeholder=""
            type="text"
            value={this.state.quest}
          />
          <a>
            <button type="submit">Add Quest</button>
          </a>
        </form>
      </div>
    );
  }
}

{
  /* <form className="form" onSubmit={this.handleSubmit}>
<input 
  onChange={this.handleChange}
  className='new-todo' 
  type='text' 
  placeholder='add a todo' value={this.state.task}/> */
}

const mapDispatchToProps = {
  addQuest,
};

const mapStateToProps = (state) => {
  return { quests: state.quests, locations: state.locations };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
