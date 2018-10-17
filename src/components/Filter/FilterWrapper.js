import React from "react";
import styled from "styled-components";
import { Router, Link } from "@reach/router";
import Filter from "./Filter";
import Results from "./Results";

const FilterWrapperDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 3 / 4;
    grid-column: 1 / -1;
    height: auto;
    padding: 1em;
    .headingWrapper {
      .heading {
        color: #000000;
        font-size: 1em;
        padding: 0.5em;
      }
      .resultNum {
        color: #DC2743;
      }
      .resultField {
      }
      .resultDept {
          color: #d99e40ff;
      }
    }
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    grid-row: 3 / 4;
    grid-column: 2 / 14;
    height: auto;
    margin: 3.5em 0;
    .headingWrapper {
      .heading {
        color: #000;
        font-size: 1.5em;
      }
      .resultNum {
          color: #DC2743;
      }
      .resultField {
      }
      .resultDept {
          color: #d99e40ff;
      }
    }
  }
  .linkTo {
    padding: 1em;
    text-decoration: none;
    display: flex;
    flex-direction: row-reverse;
    color: #dc2743;
  }
`;

const ResultsDiv = styled.div`
  margin: 2.5em 0;
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    display: grid;
    grid-template-columns: 2fr 5fr;
    grid-gap: 3px;
  }
`;

class FilterWrapper extends React.Component {
  render() {
    return (
      <FilterWrapperDiv>
        <div className="headingWrapper">
          <div className="heading">
            There are <span className="resultNum">12</span> jobs for “
            <span className="resultField">Engineer</span>” by{" "}
            <span className="resultDept">12 departments</span> 
          </div>
        </div>
        <ResultsDiv>
            <Filter />
            <Results />
        </ResultsDiv>
        <Link to="/" class="linkTo">
          Go to resources &gt;
        </Link>
      </FilterWrapperDiv>
    );
  }
}

export default FilterWrapper;
