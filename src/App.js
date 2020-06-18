import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchQuests } from './actions/quests'
import NavBar from './components/Navbar';
import Home from './containers/Home';
import ZorasDomain from './containers/ZorasDomain'
import HyruleCastle from './containers/HyruleCastle'
import GerudoDesert from './containers/GerudoDesert'
import Form from './containers/Form'
import EditForm from './containers/EditForm'

class App extends React.Component {

  componentDidMount() {
    fetch(`http://localhost:3000/quests`)
      .then(resp => resp.json())
      .then(questsJSON => {
        this.props.fetchQuests(questsJSON)
      });
  }

  render() {
    return (   
        <Router>
          <div className="App">
           <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/ZorasDomain" component={ZorasDomain}/>
            <Route exact path="/HyruleCastle" component={HyruleCastle}/>
            <Route exact path="/GerudoDesert" component={GerudoDesert}/>
            <Route exact path="/Form" component={Form}/>
            <Route exact path="/EditForm/:id" component={EditForm}/>
         </div>
        </Router>
    )
  }
}

const mapDispatchToProps = {
  fetchQuests
}

export default connect(null, mapDispatchToProps) (App);


  


