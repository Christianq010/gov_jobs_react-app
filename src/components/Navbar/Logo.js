import React from "react";
import styled from "styled-components";
import { Router, Link } from "@reach/router";

import LogoSVG from "../../assets/logo.svg";

const LogoDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      padding: 0 1em;
  }
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    height: auto;
    width: 125px;
  }
`;

class Logo extends React.Component {
  render() {
    return (
      <LogoDiv>
        <Link to="/">
          <img src={LogoSVG} alt="Logo" />
        </Link>
      </LogoDiv>
    );
  }
}

export default Logo;
