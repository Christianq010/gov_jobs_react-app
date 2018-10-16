import React from "react";
import styled from "styled-components";

import BannerContent from "./BannerContent";

const SecondaryBannerDiv = styled.div`
  background-color: #dc2743;
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 4 / 5;
    grid-column: 1 / -1;
    height: auto;
    .headingContainer {
      margin: 5em 1em;
      text-align: center;
      .headingWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        .heading {
          color: #fff;
          font-size: 3em;
        }
      }
      .learnBtn {
        color: #fff;
        font-size: 1em;
        padding: 0 10px;
        margin: 1em 1em 0 0;
        width: 10em;
        border: 1px solid transparent;
        line-height: 38px;
        background: #d99e40ff;
      }
    }
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    grid-row: 4 / 5;
    grid-column: 1 / -1;
    height: auto;
    .headingContainer {
      margin: 6em 1em;
      text-align: center;
      .headingWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        .heading {
          color: #fff;
          font-size: 3em;
        }
      }
      .learnBtn {
        color: #fff;
        font-size: 1em;
        padding: 0 10px;
        margin: 1em 1em 0 0;
        width: 10em;
        border: 1px solid transparent;
        line-height: 38px;
        background: #d99e40ff;
      }
    }
  }
`;

class SecondaryBanner extends React.Component {
  render() {
    const content = (
      <div className="headingContainer">
        <div className="headingWrapper">
          <div className="heading">All of G Suite in one place</div>
        </div>
        <button className="learnBtn">Learn more</button>
      </div>
    );
    return (
      <SecondaryBannerDiv>
        <BannerContent content={content} />
      </SecondaryBannerDiv>
    );
  }
}

export default SecondaryBanner;
