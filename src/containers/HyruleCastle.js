import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeQuest } from '../actions/quests'

export class HyruleCastle extends Component {
  
  handleDelete = (id) => {
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
    return this.props.quests.filter(questObj => questObj.location === "Hyrule Castle").map(questObj => {
      return <li key={questObj.id}><a>{questObj.content}</a><button><Link to={`EditForm/${questObj.id}`}>Edit</Link></button><button onClick={() => this.handleDelete(questObj.id)}>Remove</button></li>
    })  
  }
  
  render() {
    
    return (
      <div>
       <a className="quests-title"> Hyrule Castle Quests </a>
        <a className="quests-container">
        {this.renderQuests()}
        </a><br></br>
        <Link to="/Form/hyrule_castle" >
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

export default connect(mapStateToProps, mapDispatchToProps)(HyruleCastle)

