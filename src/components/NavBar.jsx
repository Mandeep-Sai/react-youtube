import React, { Component } from "react";
import {
  Nav,
  Navbar,
  Form,
  Button,
  FormControl,
  Container,
} from "react-bootstrap";
import "../css/NavBar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { MdVideocam } from "react-icons/md";
import { BsGrid3X3Gap } from "react-icons/bs";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { IconContext } from "react-icons";
import { withRouter } from "react-router-dom";

export class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };
  }
  queryHandler = async (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      let query = this.state.query;
      this.props.history.push(`/results?query=${query}`);
      console.log("enter");
    }
  };
  updateQuery = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  render() {
    return (
      <Container fluid className="navigation">
        <Navbar variant="light">
          <Navbar.Brand href="/">
            <img
              src="https://annezontheweb.com/wp-content/uploads/2020/03/flat1000x1000075f.u7.jpg"
              alt=""
            />
          </Navbar.Brand>
          <Form inline className="searchbar">
            <FormControl
              type="text"
              placeholder="Search"
              className="input"
              onChange={this.updateQuery}
              onKeyPress={this.queryHandler}
            />
            <Button variant="outline-primary">
              <IconContext.Provider value={{ className: "searchIcon" }}>
                <AiOutlineSearch />
              </IconContext.Provider>
            </Button>
          </Form>
          <div className="extraIcons">
            <IconContext.Provider value={{ className: "videoIcon" }}>
              <MdVideocam />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "videoIcon" }}>
              <BsGrid3X3Gap />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "videoIcon" }}>
              <FaBell />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "videoIcon" }}>
              <FaUserCircle />
            </IconContext.Provider>
          </div>
        </Navbar>
        <hr style={{ marginTop: "0px" }} />
      </Container>
    );
  }
}

export default withRouter(NavBar);
