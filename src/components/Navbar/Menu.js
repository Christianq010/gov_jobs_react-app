import React from "react";
import { stack as Menu } from "react-burger-menu";
import styled from "styled-components";

const HamburgerMenuDiv = styled.div`
.bm-burger-button {
  position: absolute;
  width: 36px;
  height: 30px;
  right: 36px;
  top: 36px;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #373a47;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/* General sidebar styles */
.bm-menu {
  background: #373a47;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}

/* Individual item */
.bm-item {
  display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
}
`;

class HamburgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <HamburgerMenuDiv>
        <Menu right>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
          <button onClick={this.showSettings} className="menu-item--small" href="">
            Settings
          </button>
        </Menu>
      </HamburgerMenuDiv>
    );
  }
}

export default HamburgerMenu;
