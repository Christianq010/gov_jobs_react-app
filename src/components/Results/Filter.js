import React from "react";

import styled from "styled-components";

const FilterDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .headingWrapper {
      margin: 0.5em 0;
    }
  }
  .FilterBox {
    border: 1px solid #b6b6b6;
    padding: 1em 2em;
    .headingWrapper {
      margin: 1.5em 0;
      .heading {
      }
    }
    .headlineWrapper {
      padding: 1em 0;
      border-bottom: 0.8px solid #b6b6b6;
      .headlineText {
        font-size: 1em;
        font-weight: 700;
      }
    }
  }
`;

class Filter extends React.Component {
  render() {
    return (
      <FilterDiv>
        <div className="FilterBox">
          <div className="headingWrapper">
            <div className="heading">Filter</div>
          </div>
          <div className="location">
            <div className="headlineWrapper">
              <div className="headlineText">Location</div>
            </div>
            <div className="locationsBox">
              <p>Colombo (5)</p>
              <p>Kalutara (6)</p>
              <p>Gampaha (2)</p>
            </div>
          </div>
          <div className="dept">
            <div className="headlineWrapper">
              <div className="headlineText">Department</div>
            </div>
            <div className="deptsBox">
              <p>Ministry of Education (3)</p>
              <p>Ceylon Electricy Board (2)</p>
              <p>Ceylon Irigation Board (1)</p>
              <p>Ceylon Lotteries Board (3)</p>
            </div>
          </div>
        </div>
      </FilterDiv>
    );
  }
}

export default Filter;
