import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar/Navbar";
import SmallBanner from "../components/SmallBanner";
import ResultsWrapper from "../components/Results/ResultsWrapper";
import Footer from "../components/Footer";

const ResultsPageDiv = styled.div`
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

class ResultsPage extends React.Component {
  state = {};
  render() {
    return (
      <ResultsPageDiv>
        <Navbar />
        <SmallBanner />
        <ResultsWrapper />
        <Footer />
      </ResultsPageDiv>
    );
  }
}

export default ResultsPage;
