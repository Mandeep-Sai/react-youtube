import React, { Component } from "react";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import youtube from "../api";
import "../css/Results.css";

export class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: this.props.location.search.split("=")[1],
      videos: [],
      loading: true,
    };
  }
  componentDidMount = async () => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 20,
        q: this.state.query,
        chart: "mostPopular",
        regionCode: "DE",
        key: "AIzaSyD2V0SEzrGHbjUeAih9bXJTi8IvdZywLvY",
      },
    });
    const videos = response.data.items;
    this.setState({ videos, loading: false });
  };
  componentDidUpdate = async (prevState) => {
    if (prevState.query !== this.props.location.search.split("=")[1]) {
      const response = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 20,
          q: this.props.location.search.split("=")[1],
          chart: "mostPopular",
          regionCode: "DE",
          key: "AIzaSyD2V0SEzrGHbjUeAih9bXJTi8IvdZywLvY",
        },
      });
      const videos = response.data.items;
      this.setState({ videos, loading: false });
    }
  };
  render() {
    return (
      <>
        {this.state.loading ? (
          <Spinner
            style={{ marginTop: "20vh", marginLeft: "50vw" }}
            animation="border"
            variant="dark"
          />
        ) : (
          <Container className="results">
            {this.state.videos.map((video) => {
              return (
                <Row className="mt-3 eachResult">
                  <Col xs={3}>
                    <img
                      className="img-fluid"
                      src={video.snippet.thumbnails.medium.url}
                      alt=""
                    />
                  </Col>
                  <Col style={{ marginLeft: "-20px" }}>
                    <p>{video.snippet.title}</p>
                    <p>{video.snippet.channelTitle}</p>
                  </Col>
                </Row>
              );
            })}
          </Container>
        )}
      </>
    );
  }
}

export default Results;
