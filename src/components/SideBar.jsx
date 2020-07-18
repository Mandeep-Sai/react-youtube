import React, { Component } from "react";
import "../css/Sidebar.css";
import { Container } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { AiFillFire } from "react-icons/ai";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import { IconContext } from "react-icons";

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <IconContext.Provider value={{ className: "menuIcon" }}>
          <FaBars />
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "icons" }}>
          <TiHome />
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "icons" }}>
          <AiFillFire />
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "icons" }}>
          <MdSubscriptions />
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "icons" }}>
          <MdVideoLibrary />
        </IconContext.Provider>
      </div>
    );
  }
}

export default SideBar;
