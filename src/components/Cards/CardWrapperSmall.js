import React from "react";
import styled from "styled-components";

import Card from "./Card";

const CardWrapperDiv = styled.div`
  .headingWrapper {
    margin: 0 1em;
    .heading {
      color: #000;
      font-size: 1.5em;
    }
  }
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 4 / 5;
    grid-column: 1 / -1;
    height: auto;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    grid-row: 4 / 5;
    grid-column: 2 / 14;
    height: auto;
    .headingWrapper {
      margin: 0 1em;
      .heading {
        color: #000;
        font-size: 1.5em;
      }
    }
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
  render() {
    return (
      <CardWrapperDiv>
        <div className="headingWrapper">
          <div className="heading"> Suggested for you</div>
        </div>
        <Cards>
          <Card />
          <Card />
          <Card />
          <Card />
        </Cards>
      </CardWrapperDiv>
    );
  }
}

export default CardWrapper;
