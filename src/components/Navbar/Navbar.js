import React from "react";
import styled from "styled-components";

import Items from "./Items";
import Logo from "./Logo";
// import Menu from "./Menu";

const NavbarDiv = styled.div`
  background-color: #fff;
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    height: auto;
    .navWrapper {
      display: grid;
      grid-template-columns: 3fr 9fr;
      height: 95px;
      grid-gap: 3px;
    }
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    grid-row: 1 / 2;
    grid-column: 2 / 14;
    height: auto;
    .navWrapper {
      display: grid;
      grid-template-columns: 3fr 9fr;
      height: 95px;
      grid-gap: 3px;
    }
  }
`;

class Navbar extends React.Component {
  render() {
    return (
      <NavbarDiv>
        <div className="navWrapper">
          {/* <Menu /> */}
          <Logo />
          <Items />
        </div>
      </NavbarDiv>
    );
  }
}

export default Navbar;
