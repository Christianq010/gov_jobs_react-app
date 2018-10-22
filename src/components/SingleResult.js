import React from "react";
import styled from "styled-components";

const SingleResultDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 3 / 4;
    grid-column: 1 / -1;
    height: auto;
    margin: 1em;
    .cardbox {
      display: flex;
      flex-direction: column-reverse;
      padding: 2em;
    }
    .cardDetails {
      text-align: center;
      .headlineText {
        font-size: 1.5em;
        font-weight: 500;
        margin: 0.3em 0;
        a {
          color: #000;
          text-decoration: none;
        }
      }
      .headlineSub {
        font-size: 1em;
        font-weight: 400;
      }
      .headlineDes {
        font-size: 1.2em;
        margin: 1em 0;
      }
      .textRemain {
        color: #dc2743;
      }
    }
    .cardimgwrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      .cardimg {
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
    grid-row: 3 / 4;
    grid-column: 3 / 13;
    height: auto;
    margin: 1em;
    .cardbox {
      display: grid;
      grid-template-columns: 5fr 2fr;
      padding: 2.5em;
    }
    .cardDetails {
      .headlineText {
        font-size: 1.5em;
        font-weight: 500;
        margin: 0.3em 0;
        a {
          color: #000;
          text-decoration: none;
        }
      }
      .headlineSub {
        font-size: 1em;
        font-weight: 400;
      }
      .headlineDes {
        font-size: 1.3em;
        margin: 1em 0;
      }
      .textRemain {
        color: #dc2743;
        margin: 1em 0;
      }
    }
    .cardimgwrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      .cardimg {
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

class SingleResult extends React.Component {
  render() {
    const ImgURL =
      "https://camo.githubusercontent.com/2d6da67c4cab809c1a23cce31f1c53c0daa06d0a/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f676f6f676c652d6d6565742e737667";
    return (
      <SingleResultDiv>
        <div className="cardbox">
          <div className="cardDetails">
            <div className="headlineText">
              <div>Headline Text - This is some random text</div>
            </div>
            <div className="headlineSub">Colombo, Sri Lanka</div>
            <div className="headlineDes">
              ට්‍රාන්ස්ලේටර්, ට්‍රාන්ස්ලේටර් ඊස්ටන් විශ්වවිද්‍යාලය
            </div>
            <div className="bodyText">
              <p>Lorem ipsum valor estudi karnasr iop kuraeti vaesti mo oui lorem ipsum valor estudi karnasr iop kuraeti vaesti mo oui.Lorem ipsum valor estudi karnasr iop kuraeti vaesti mo oui lorem ipsum valor estudi karnasr iop kuraeti vaesti mo oui.</p>
              <p>Lorem ipsum valor estudi karnasr iop kuraeti vaesti mo oui lorem ipsum valor estudi karnasr iop kuraeti vaesti mo oui.Lorem ipsum valor estudi karnasr iop kuraeti vaesti mo oui lorem ipsum valor estudi karnasr iop kuraeti vaesti mo oui.Lorem ipsum valor estudi karnasr iop kuraeti vaesti mo oui lorem ipsum valor estudi karnasr iop kuraeti vaesti mo oui.</p>
            </div>
            <div className="textRemain">Disclaimer - Lorem ipsum valor estudi karnasr iop kuraeti vaesti mo oui lorem ipsum valor estudi karnasr iop kuraeti vaesti mo oui.</div>
            <div className="buttonRow">
              <button className="downloadBtn">Download</button>
              <button className="viewBtn">View</button>
            </div>
          </div>
          <div className="cardimgwrapper">
            <div className="cardimg">
              <img src={ImgURL} alt="some title" />
            </div>
          </div>
        </div>
      </SingleResultDiv>
    );
  }
}

export default SingleResult;
