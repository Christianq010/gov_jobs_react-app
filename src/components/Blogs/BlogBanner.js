import React from "react";
import styled from "styled-components";

const MainBannerDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    height: auto;
    background-color: #dc2743;
    .headingContainer {
      margin: 4em 1em;
      .headingWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        .heading {
          color: #fff;
          font-size: 2.5em;
        }
      }
    }
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    height: auto;
    background-color: #dc2743;
    .imgContainer {
      margin: 6em 1em;
      .imgWrapper {
        img {}
      }
    }
  }
`;

class MainBanner extends React.Component {
  render() {
    return (
      <MainBannerDiv>
        <div className="imgContainer">
          <div className="imgWrapper">
            <img src="" alt="" className="" />
          </div>
        </div>
      </MainBannerDiv>
    );
  }
}

export default MainBanner;
