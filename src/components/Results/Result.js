import React from "react";
import styled from "styled-components";
import { Router, Link } from "@reach/router";

const ResultDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 3 / 4;
    grid-column: 1 / -1;
    height: auto;
    border: 0.8px solid #b6b6b6;
    margin: 1em;
    .Resultbox {
      display: flex;
      flex-direction: column-reverse;
      padding: 2em;
    }
    .ResultDetails {
      text-align: center;
      .headlineText {
        font-size: 1em;
        font-weight: 500;
        margin: 0.3em 0;
        a {
          color: #000;
          text-decoration: none;
        }
      }
      .headlineSub {
        font-size: 0.8em;
        font-weight: 400;
      }
      .headlineDes {
        font-size: 1em;
        margin: 1em 0;
      }
      .textRemain {
        color: #dc2743;
      }
    }
    .Resultimgwrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      .Resultimg {
        height: 115px;
        img {
          height: 100%;
          border-radius: 50%;
          background-size: cover;
        }
      }
    }
    .buttonRow {
      display: flex;
      button {
        color: #fff;
        font-size: 1em;
        padding: 0 10px;
        margin: 1em 1em 0 0;
        width: 8em;
        border: 1px solid transparent;
        line-height: 38px;
      }
      .downloadBtn {
        background: #dc2743;
      }
      .viewBtn {
        background: #d99e40ff;
      }
    }
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    display: flex;
    flex-direction: row;
    border: 0.8px solid #b6b6b6;
    margin: 1em;
    .Resultbox {
      display: flex;
      align-content: center;
      padding: 2.5em;
    }
    .ResultDetails {
        margin: 0 0 0 5em;
      .headlineText {
        font-size: 1em;
        font-weight: 500;
        margin: 0.3em 0;
        a {
          color: #000;
          text-decoration: none;
        }
      }
      .headlineSub {
        font-size: 0.8em;
        font-weight: 400;
      }
      .headlineDes {
        font-size: 1em;
        margin: 1em 0;
      }
      .textRemain {
        color: #dc2743;
      }
    }
    .Resultimgwrapper {
      display: flex;
      align-items: center;
      /* padding-left: 4em; */
      .Resultimg {
        height: 175px;
        img {
          height: 100%;
          border-radius: 50%;
          background-size: cover;
        }
      }
    }
    .buttonRow {
      display: flex;
      button {
        color: #fff;
        font-size: 1em;
        padding: 0 10px;
        margin: 1em 1em 0 0;
        width: 10em;
        border: 1px solid transparent;
        line-height: 38px;
      }
      .downloadBtn {
        background: #dc2743;
      }
      .viewBtn {
        background: #d99e40ff;
      }
    }
  }
`;

class Result extends React.Component {
  render() {
    const ImgURL =
      "https://camo.githubusercontent.com/2d6da67c4cab809c1a23cce31f1c53c0daa06d0a/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f676f6f676c652d6d6565742e737667";
    return (
      <ResultDiv>
        <div className="Resultbox">
          <div className="Resultimgwrapper">
            <div className="Resultimg">
              <img src={ImgURL} alt="some title" />
            </div>
          </div>
          <div className="ResultDetails">
            <div className="headlineText">
              <Link to="/result">Headline Text - This is some random text</Link>
            </div>
            <div className="headlineSub">Colombo, Sri Lanka</div>
            <div className="headlineDes">
              ට්‍රාන්ස්ලේටර්, ට්‍රාන්ස්ලේටර් ඊස්ටන් විශ්වවිද්‍යාලය
            </div>
            <div className="textRemain">2 Days remaining</div>
            <div className="buttonRow">
              <button className="downloadBtn">Download</button>
              <button className="viewBtn">View</button>
            </div>
          </div>
        </div>
      </ResultDiv>
    );
  }
}

export default Result;
