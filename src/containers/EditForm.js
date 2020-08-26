import React, { Component } from "react";
import { connect } from "react-redux";
import { editQuest } from "../actions/quests";

export class EditForm extends Component {
  state = {
    quest: "",
    location: "",
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const questData = this.props.quests.find((questObj) => {
      return questObj.id == id;
    });
    if (questData) {
      this.setState({
        quest: questData.content,
        location: questData.location
      });
    }
  }

  handleDropChange = (event) => {
    this.setState({
      location: event.target.value,
    });
  };

  handleChange = (event) => {
    this.setState({
      quest: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let location_render = this.state.location.replace(/\s+/, "");

    const newQuest = {
      content: this.state.quest,
      location_name: this.state.location,
      id: this.props.match.params.id
    };

    const reqObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quest: newQuest }),
    };

    fetch(`http://localhost:3000/quests/${this.props.match.params.id}`, reqObj)
      .then((resp) => resp.json())
      .then((quest) => {
        this.props.editQuest(quest);
        this.setState({
          quest: "",
          location: "",
        });
      });
    this.props.history.push(`/${location_render}`);
  };

  render() {
    return (
      <div className="formPage">
      <div className="add-form">
        <form className="radioinput" onChange={this.handleDropChange}>
          <label>
          <input type="radio" value={"Hyrule Castle"} checked={this.state.location === "Hyrule Castle"}/>
          Hyrule Castle
          </label>
          <label>
          <input type="radio" value={"Zoras Domain"} checked={this.state.location === "Zoras Domain"}/>
          Zoras Domain
          </label>
          <label>
          <input type="radio" value={"Gerudo Desert"} checked={this.state.location === "Gerudo Desert"}/>
          Gerudo Desert
          </label>
        </form>
        <form className="" onSubmit={this.handleSubmit}>
          <textarea
            className="new-quest-input"
            onChange={this.handleChange}
            placeholder=""
            type="text"
            value={this.state.quest}
          />
          <a>
            <button type="submit">Edit Quest</button>
          </a>
        </form>
      </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  editQuest,
};

const mapStateToProps = (state) => {
  return { quests: state.quests, locations: state.locations };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);

