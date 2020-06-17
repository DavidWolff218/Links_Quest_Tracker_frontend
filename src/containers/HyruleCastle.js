import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';

export class HyruleCastle extends Component {
  
  
  renderQuests = () => {
    return this.props.quests.filter(questObj => questObj.location === "Hyrule Castle").map(questObj => {
      return <li><a key={questObj.id}>{questObj.content}</a><button>Edit</button><button>Remove</button></li>
    })  
  }

  
  render() {
    
    return (
      <div>
        Hyrule Castle Quests
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

export default connect(mapStateToProps)(HyruleCastle)


// renderQuests = () => {
//   return this.props.quests.filter(questObj => {
//     if(questObj.location === "Hyrule Castle") {
//       return <li>{questObj.content}</li>
//     } else {
//       return null
//     }
//   })