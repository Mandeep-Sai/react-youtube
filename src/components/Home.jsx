import React, { Component } from "react";
import youtube from "../api";
import "../css/Home.css";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };
  }
  componentDidMount = async () => {
    const response = await youtube.get("videos", {
      params: {
        part: "snippet",
        maxResults: 20,
        chart: "mostPopular",
        regionCode: "DE",
        key: "AIzaSyD2V0SEzrGHbjUeAih9bXJTi8IvdZywLvY",
      },
    });

    this.setState({ videos: response.data.items });
    // console.log(response.data.items[0].snippet.description);
  };

  render() {
    return (
      <Container className="home">
        <Container>
          <p className="heading">Recommended</p>
          <Row className="row-cols-sm-2 row-cols-md-4">
            {this.state.videos.map((video) => {
              return (
                <Col xs={4} className="mt-4">
                  <Card>
                    <div className="cardImage">
                      <Card.Img
                        variant="top"
                        src={video.snippet.thumbnails.medium.url}
                      />
                      <div className="duration">1:16</div>
                    </div>
                    <Card.Body>
                      <img src="" alt="" />
                      <Card.Title>{video.snippet.title}</Card.Title>
                      <Card.Text>{video.snippet.channelTitle}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Home;
