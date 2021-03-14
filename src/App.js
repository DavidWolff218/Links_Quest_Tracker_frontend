import React, { Component } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
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
      <div>
        {this.props.history.location.pathname !== "/" ? <NavBar /> : null}
        <Switch>
          <Route exact path="/" component={Login} />

          <Route exact path="/Home" component={Home} />
          <Route exact path="/ZorasDomain" component={ZorasDomain} />
          <Route exact path="/HyruleCastle" component={HyruleCastle} />
          <Route exact path="/GerudoDesert" component={GerudoDesert} />
          <Route exact path="/Form/:location" component={Form} />
          <Route exact path="/EditForm/:id" component={EditForm} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchQuests,
};

export default withRouter(connect(null, mapDispatchToProps)(App));
