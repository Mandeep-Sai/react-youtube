import React, { Component } from "react";
import "../css/Sidebar.css";
import { FaBars } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { AiFillFire } from "react-icons/ai";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="sidebar">
        <div>
          <IconContext.Provider value={{ className: "menuIcon" }}>
            <FaBars onClick={this.props.func} />
          </IconContext.Provider>
        </div>
        <div>
          <IconContext.Provider value={{ className: "icons" }}>
            <Link to="/">
              <TiHome />
            </Link>
          </IconContext.Provider>
        </div>
        <div>
          <IconContext.Provider value={{ className: "icons" }}>
            <Link to="/">
              <AiFillFire />{" "}
            </Link>
          </IconContext.Provider>
        </div>
        <div>
          <IconContext.Provider value={{ className: "icons" }}>
            <Link to="/">
              <MdSubscriptions />{" "}
            </Link>
          </IconContext.Provider>
        </div>
        <div>
          <IconContext.Provider value={{ className: "icons" }}>
            <Link to="/">
              <MdVideoLibrary />{" "}
            </Link>
          </IconContext.Provider>
        </div>
      </div>
    );
  }
}

export default SideBar;
