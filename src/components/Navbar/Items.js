import React from "react";
import styled from "styled-components";
import { Router, Link } from "@reach/router";

const ItemsDiv = styled.div`
  a {
    text-decoration: none;
    color: #000;
  }
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: none;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .navlink {
      margin: 0 1em;
    }
    .linknormal:hover {
      text-decoration: underline;
    }
    .linkbtn {
      color: #fff;
      font-size: 1em;
      line-height: 38px;
      padding: 0.3em 1em;
      background: #d99e40ff;
      border: 1px solid transparent;
    }
  }
`;

class Items extends React.Component {
  render() {
    return (
      <ItemsDiv>
        <div className="navlink">
          <Link className="linknormal" to="/">
            <div>Home</div>
          </Link>
        </div>
        <div className="navlink">
          <Link className="linknormal" to="/">
            <div>Resources</div>
          </Link>
        </div>
        <div className="navlink">
          <Link className="linknormal" to="/">
            <div>About</div>
          </Link>
        </div>
        <div className="navlink">
          <Link className="" to="/">
            <div className="linkbtn">Get Hired</div>
          </Link>
        </div>
      </ItemsDiv>
    );
  }
}

export default Items;
