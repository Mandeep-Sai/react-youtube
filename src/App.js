import React, { Component } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Results from "./components/Results";
import { Grid } from "@material-ui/core";
import youtube from "./api";
import { SearchBar, VideoList, VideoDetails } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }

  render() {
    return (
      <Router>
        <NavBar />
        <SideBar />
        <Route path="/" exact component={Home} />
        <Route path="/results" exact component={Results} />
      </Router>
    );
  }
}

export default App;
