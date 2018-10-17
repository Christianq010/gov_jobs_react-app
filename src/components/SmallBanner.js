import React from "react";
import styled from "styled-components";

import Search from "./Search";

const MainBannerDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    height: auto;
    background-color: #dc2743;
    .headingContainer {
      margin: 2em 1em;
    }
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    height: auto;
    background-color: #dc2743;
    .headingContainer {
      margin: 3em 1em;
    }
  }
`;

class MainBanner extends React.Component {
  render() {
    return (
      <MainBannerDiv>
        <div className="headingContainer">
          <Search />
        </div>
      </MainBannerDiv>
    );
  }
}

export default MainBanner;
