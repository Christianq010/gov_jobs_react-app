import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar/Navbar";
import SmallBanner from "../components/SmallBanner";
import FilterWrapper from "../components/Filter/FilterWrapper";
import Footer from "../components/Footer";

const SearchPageDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: auto;
    display: grid;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    height: auto;
    display: grid;
    grid-gap: 0;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 25%;
    grid-auto-flow: dense;
  }
`;

class SearchPage extends React.Component {
  state = {};
  render() {
    return (
      <SearchPageDiv>
        <Navbar />
        <SmallBanner />
        <FilterWrapper />
        <Footer />
      </SearchPageDiv>
    );
  }
}

export default SearchPage;
