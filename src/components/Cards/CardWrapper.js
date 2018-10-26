import React from "react";
import styled from "styled-components";

import axios from 'axios'
import Card from "./Card";

const API =
  "https://api.storyblok.com/v1/cdn/stories?token=lClgQFxlCzg1pp3obj6aUQtt&cv=1540525479";

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

class CardWrapper extends React.Component {
  constructor () {
    super()
    this.state = {
      stories: [],
    }
  }
  componentDidMount() {
    axios.get(API)
      // .then(response => console.log(response))
      .then(data => {this.setState({ stories: data.data.stories})});
  }

  render() {
    return (
      <CardWrapperDiv>
        <Cards>
          <Card />
          <pre>
            <code>{JSON.stringify(this.state, null, 2)}</code>
          </pre>
        </Cards>
      </CardWrapperDiv>
    );
  }
}

export default CardWrapper;
