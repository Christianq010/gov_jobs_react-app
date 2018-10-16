import React from "react";
import styled from "styled-components";
import { Router, Link } from "@reach/router";

import LogoSVG from "../../assets/logo.svg";

const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
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