import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeQuest } from '../actions/quests'

export class ZorasDomain extends Component {
  
  
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
  
  
  handleEdit = () => [
    console.log("edit")
  ]
  
  renderQuests = () => {
    return this.props.quests.filter(questObj => questObj.location === "Zoras Domain").map(questObj => {
      return <li key={questObj.id}><a >{questObj.content}</a><button onClick={() => this.handleEdit(questObj)}>Edit</button><button onClick={() => this.handleDelete(questObj.id)}>Remove</button></li>
    })  
  }
  
  
  render() {
    return (
      <div>
        Zoras Domain

          {this.renderQuests()}
          
        <NavLink to="/Form">
          <button>
            Add a Quest
          </button>
        </NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(ZorasDomain)

