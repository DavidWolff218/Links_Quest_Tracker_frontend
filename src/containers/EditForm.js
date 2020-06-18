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
            <button type="submit">Edit Quest</button>
          </a>
        </form>
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

// const mapStateToProps = (state) => {
//   return { quests: state.quests, locations: state.locations };
// };
