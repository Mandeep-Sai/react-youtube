import React, { Component } from "react";
import "../css/HideBar.css";
import { FaBars } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { AiFillFire, AiFillLike } from "react-icons/ai";
import {
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdWatchLater,
  MdSettings,
  MdFlag,
  MdHelp,
  MdFeedback,
} from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { IconContext } from "react-icons";

class HideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: this.props.show,
    };
  }
  componentDidUpdate = (prevProps) => {
    if (prevProps.show !== this.props.show) {
      this.setState({ show: this.props.show });
    }
  };
  handleHideBar = () => {
    console.log("hello");
  };

  render() {
    return (
      this.state.show && (
        <div className="hidebar">
          <div className="logo">
            <IconContext.Provider value={{ className: "menuIcon" }}>
              <FaBars onClick={this.props.func} />
            </IconContext.Provider>
            <img
              src="https://annezontheweb.com/wp-content/uploads/2020/03/flat1000x1000075f.u7.jpg"
              alt=""
            />
          </div>
          <hr style={{ margin: "0px" }} />
          <div className="main">
            <div>
              <IconContext.Provider value={{ className: "icons" }}>
                <TiHome />
              </IconContext.Provider>
              <p>Home</p>
            </div>
            <div>
              <IconContext.Provider value={{ className: "icons" }}>
                <AiFillFire />
              </IconContext.Provider>
              <p>Trending</p>
            </div>
            <div>
              <IconContext.Provider value={{ className: "icons" }}>
                <MdSubscriptions />
              </IconContext.Provider>
              <p>Subscription</p>
            </div>
          </div>
          <hr style={{ margin: "0px" }} />
          <div className="main">
            <div>
              <IconContext.Provider value={{ className: "icons" }}>
                <MdVideoLibrary />
              </IconContext.Provider>
              <p>Library</p>
            </div>
            <div>
              <IconContext.Provider value={{ className: "icons" }}>
                <MdHistory />
              </IconContext.Provider>
              <p>History</p>
            </div>
            <div>
              <IconContext.Provider value={{ className: "icons" }}>
                <RiVideoLine />
              </IconContext.Provider>
              <p>Your Videos</p>
            </div>
            <div>
              <IconContext.Provider value={{ className: "icons" }}>
                <MdWatchLater />
              </IconContext.Provider>
              <p>Watch later</p>
            </div>
            <div>
              <IconContext.Provider value={{ className: "icons" }}>
                <AiFillLike />
              </IconContext.Provider>
              <p>Liked videos</p>
            </div>
          </div>
          <hr style={{ margin: "0px" }} />
          <div className="main">
            <div>
              <IconContext.Provider value={{ className: "icons" }}>
                <MdSettings />
              </IconContext.Provider>
              <p>Settings</p>
            </div>
            <div>
              <IconContext.Provider value={{ className: "icons" }}>
                <MdFlag />
              </IconContext.Provider>
              <p>Report history</p>
            </div>
            <div>
              <IconContext.Provider value={{ className: "icons" }}>
                <MdHelp />
              </IconContext.Provider>
              <p>Help</p>
            </div>
            <div>
              <IconContext.Provider value={{ className: "icons" }}>
                <MdFeedback />
              </IconContext.Provider>
              <p>Send feedback</p>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default HideBar;
