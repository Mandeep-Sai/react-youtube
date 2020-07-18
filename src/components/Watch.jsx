import React, { Component } from "react";
import "../css/Watch.css";
import { Container, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";
import { IoMdShareAlt } from "react-icons/io";
import youtube from "../api";
import { Link } from "react-router-dom";

export class Watch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //video: this.props.location.videoProps.mainVideo,
      videos: [1, 2, 3, 4, 5, 4],
    };
  }
  componentDidMount = async () => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        // q: this.state.video.snippet.tags[0],
        key: "AIzaSyD2V0SEzrGHbjUeAih9bXJTi8IvdZywLvY",
      },
    });
    const videos = response.data.items;
    this.setState({ videos });
  };
  componentDidUpdate = async (prevState) => {
    if (prevState.etag !== this.state.video.etag) {
      const response = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          q: this.state.video.snippet.tags[0],
          key: "AIzaSyD2V0SEzrGHbjUeAih9bXJTi8IvdZywLvY",
        },
      });
      const videos = response.data.items;
      this.setState({ videos });
    }
  };
  render() {
    console.log(this.state.video);
    return (
      <Container className="watch">
        <Row>
          <Col md={8}>
            <div className="videoPlayer">
              <iframe
                src={`https://www.youtube.com/embed/{this.state.video.mainVideo.id}`}
                frameborder="0"
                title="player"
              ></iframe>
              <p className="title">Title</p>
              {/* <p>{this.state.video.mainVideo.title}</p> */}
              <div className="extraInfo">
                <div>
                  <p>111,111 views .</p>
                  <p>18 July 2020</p>
                </div>
                <div>
                  <div>
                    <IconContext.Provider value={{ className: "extraIcons" }}>
                      <AiFillLike />
                    </IconContext.Provider>
                    <p>4.7K</p>
                  </div>
                  <div>
                    <IconContext.Provider value={{ className: "extraIcons" }}>
                      <AiFillDislike />
                    </IconContext.Provider>
                    <p>21</p>
                  </div>
                  <div>
                    <IconContext.Provider value={{ className: "extraIcons" }}>
                      <IoMdShareAlt />
                    </IconContext.Provider>
                    <p>SHARE</p>
                  </div>
                  <div>
                    <IconContext.Provider value={{ className: "extraIcons" }}>
                      <MdPlaylistAdd />
                    </IconContext.Provider>
                    <p>SAVE</p>
                  </div>
                </div>
              </div>
              <hr style={{ margin: "5px 5%" }} />
              <div className="channelInfo">
                <p>Channel Title</p>
                <button>SUBSCRIBE</button>
              </div>

              {/* <p>{this.state.video.mainVideo.snippet.channelTitle}</p> */}
            </div>
          </Col>
          <Col md={4} style={{ paddingTop: "0px" }}>
            {this.state.videos.map((video) => {
              return (
                <div className="videosList mb-3">
                  <Link
                    to={{
                      pathname: "/watch",
                      videoProps: {
                        mainVideo: video,
                      },
                    }}
                  >
                    <div>
                      <img src="https://placehold.it/170x110" alt="" />
                    </div>
                    <div className="info">
                      <p>Title</p>
                      <p>Channel Name</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Watch;
