import React from "react";
import styled from "styled-components";

import axios from "axios";
import Card from "./Card";
import PulseLoader from "react-spinners/PulseLoader";
const API =
  "https://api.storyblok.com/v1/cdn/stories?token=rHFBeu95Upg1QYUDypHgYQtt";

const CardWrapperDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 3 / 4;
    grid-column: 1 / -1;
    height: auto;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    grid-row: 3 / 4;
    grid-column: 2 / 14;
    height: auto;
  }
`;

const Cards = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    display: grid;
    grid-template-columns: 2fr 2fr;
  }
`;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5em;
`;

class CardWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      loading: true
    };
  }
  componentDidMount() {
    axios
      .get(API)
      // get our stories array, check it and then change state to contain our stories
      .then(data => {
        // console.log(data);
        let stories;
        if (data.data.stories && data.data.stories) {
          if (Array.isArray(data.data.stories)) {
            stories = data.data.stories;
          } else {
            stories = [data.data.stories];
          }
        } else {
          stories = [];
        }
        this.setState({
          stories: stories,
          loading: false
        });
      })
      // .catch(err => {console.log(err)});
      .catch(err => this.setState({ error: err }));
  }

  render() {
    if (this.state.loading) {
      return (
        <CardWrapperDiv>
          <Loading>
            <PulseLoader
              sizeUnit={"px"}
              size={50}
              color={"#dc2743"}
              loading={this.state.loading}
            />
          </Loading>
        </CardWrapperDiv>
      );
    }
    return (
      <CardWrapperDiv>
        <Cards>
          {this.state.stories.map(story => {
            return (
              <Card
                title={story.content.title}
                img={story.content.img}
                description={story.content.description}
                deadline={story.content.deadline_date}
                tags={story.content.tags}
                key={story.id}
                id={story.id}
              />
            );
          })}
        </Cards>
      </CardWrapperDiv>
    );
  }
}

export default CardWrapper;
