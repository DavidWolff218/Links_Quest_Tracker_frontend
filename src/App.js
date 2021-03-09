import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchQuests } from "./actions/quests";
import NavBar from "./components/Navbar";
import Home from "./containers/Home";
import ZorasDomain from "./containers/ZorasDomain";
import HyruleCastle from "./containers/HyruleCastle";
import GerudoDesert from "./containers/GerudoDesert";
import Form from "./containers/Form";
import Login from "./containers/Login";
import EditForm from "./containers/EditForm";
import "./App.css";

class App extends React.Component {

  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        
          <NavBar />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/ZorasDomain" component={ZorasDomain} />
          <Route exact path="/HyruleCastle" component={HyruleCastle} />
          <Route exact path="/GerudoDesert" component={GerudoDesert} />
          <Route exact path="/Form/:location" component={Form} />
          <Route exact path="/EditForm/:id" component={EditForm} />
        
      </Router>
    );
  }
}

const mapDispatchToProps = {
  fetchQuests,
};

export default connect(null, mapDispatchToProps)(App);
