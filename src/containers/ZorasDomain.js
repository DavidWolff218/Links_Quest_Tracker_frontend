import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeQuest } from "../actions/quests";

export class ZorasDomain extends Component {
  
    handleDelete = (questId) => {
      this.props.removeQuest(questId)
     };

  renderQuests = () => {
    return this.props.quests
      .filter((questObj) => questObj.location === "Zoras Domain")
      .map((questObj) => {
        return (
          <li key={questObj.id}>
            <a>{questObj.content}</a>
            <button>
              <Link to={`EditForm/${questObj.id}`}>Edit</Link>
            </button>
            <button onClick={() => this.handleDelete(questObj.id)}>
              Remove
            </button>
          </li>
        );
      });
  };

  render() {
    return (
     <div className="zoraPage">
     <div className="quests-box">
        <a className="quests-title"> Zoras Domain Quests </a>

        {this.renderQuests()}

        <Link to="/Form/zoras_domain">
          <button>Add a Quest</button>
        </Link>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { quests: state.quests };
};

const mapDispatchToProps = {
  removeQuest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ZorasDomain);
