import React, { Component } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Results from "./components/Results";
import HideBar from "./components/HideBar";
import Watch from "./components/Watch";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      show: false,
    };
  }
  showHideBar = () => {
    this.setState({ show: true });
  };
  hideHideBar = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Router>
        <NavBar />
        <SideBar func={this.showHideBar} />
        <HideBar show={this.state.show} func={this.hideHideBar} />
        <Route path="/" exact component={Home} />
        <Route path="/results" exact component={Results} />
        <Route path="/watch" exact component={Watch} />
      </Router>
    );
  }
}

export default App;
