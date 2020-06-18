import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeQuest } from '../actions/quests'

export class GerudoDesert extends Component {
  
  handleDelete = (id) => {
    console.log(id)
    const reqObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id}),
    };
    fetch(`http://localhost:3000/quests/${id}`, reqObj)
        .then((resp) => resp.json())
        .then((quest) => {
          this.props.removeQuest(quest.id);
        });
  }
  
  
  renderQuests = () => {
    return this.props.quests.filter(questObj => questObj.location === "Gerudo Desert").map(questObj => {
      return <li key={questObj.id}><a>{questObj.content}</a><button><Link to={`EditForm/${questObj.id}`}>Edit</Link></button><button onClick={() => this.handleDelete(questObj.id)}>Remove</button></li>
    })  
  }

  
  render() {
    
    return (
      <div>
        Gerudo Desert Quests
        {this.renderQuests()}
        <Link to="/Form">
          <button>
            Add a Quest
          </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { quests: state.quests }
}

const mapDispatchToProps = {
  removeQuest
}

export default connect(mapStateToProps, mapDispatchToProps)(GerudoDesert)