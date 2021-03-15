import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchQuests } from "../actions/quests";

export class home extends Component {
  componentDidMount() {
    fetch(`http://localhost:3000/quests`)
      .then((resp) => resp.json())
      .then((quests) => {
        this.props.fetchQuests(quests);
      });
  }

  render() {
    return (
      <html>
        <body className="Home">
          <Link
            to="/ZorasDomain"
            style={{ color: "black", textDecoration: "none" }}
          >
            <div className="zora-container">
              <a className="card-title">Zoras Domain</a> <br></br>
              <a>
                Quests:
                {
                  this.props.quests.filter(
                    (questObj) => questObj.location === "Zoras Domain"
                  ).length
                }
              </a>
            </div>
          </Link>
          <Link
            to="/HyruleCastle"
            style={{ color: "black", textDecoration: "none" }}
          >
            <div className="castle-container">
              <a className="card-title">Hyrule Castle</a>
              <br></br>
              <a>
                Quests:
                {
                  this.props.quests.filter(
                    (questObj) => questObj.location === "Hyrule Castle"
                  ).length
                }
              </a>
            </div>
          </Link>
          <Link
            to="/GerudoDesert"
            style={{ color: "black", textDecoration: "none" }}
          >
            <div className="gerudo-container">
              <a className="card-title">Gerudo Desert</a>
              <br></br>
              <a>
                Quests:
                {
                  this.props.quests.filter(
                    (questObj) => questObj.location === "Gerudo Desert"
                  ).length
                }
              </a>
            </div>
          </Link>
        </body>
      </html>
    );
  }
}

const mapStateToProps = (state) => {
  return { quests: state.quests };
};

const mapDispatchToProps = {
  fetchQuests,
};

export default connect(mapStateToProps, mapDispatchToProps)(home);
