import React from "react";
import styled from "styled-components";
import { Router, Link } from "@reach/router";

import img from "./../../assets/bg.png"

const BlogDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 3 / 4;
    grid-column: 1 / -1;
    height: auto;
    border: 0.8px solid #b6b6b6;
    margin: 1em;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    display: flex;
    flex-direction: row;
    border: 1px solid #b6b6b6;
    margin: 1em;
  }
  .blogbox {
    display: flex;
    direction: row;
    .blogDetails {
      .blogimgwrapper {
        .blogimg {
          img {
            width: 100%;
          }
        }
      }
      .textwrapper {
        padding: 0 1em;
        .headlineText {
          font-size: 1.05em;
          font-weight: 600;
          margin: 0.7em 0;
          a {
            color: #000;
            text-decoration: none;
          }
        }
      }
    }
    .buttonRow {
      display: flex;
      flex-direction: row-reverse;
      margin: 1em 0;
      padding: 0 0.5em;
    }
    .viewBtn {
      color: #DC2743;
      text-decoration: none;
      font-size: 1em;
      padding: 0 25px;
      margin: 1em 1em 0 0;
      border: 1px solid transparent;
      line-height: 38px;
      border: 1px solid #DC2743;
    }
  }
`;

class Blog extends React.Component {
  render() {
    const imgURL = img;
    return (
      <BlogDiv>
        <div className="blogbox">
          {/* Blog Details */}
          <div className="blogDetails">
            {/* Img Wrapper */}
            <div className="blogimgwrapper">
              <div className="blogimg">
                <img src={imgURL} alt="some title" />
              </div>
            </div>
            {/* /end of Img Wrapper */}
            {/* Text Wrapper */}
            <div className="textwrapper">
              <div className="headlineText">
                <Link to="/">Headline Text - This is some random text</Link>
              </div>
              <div className="headlineSub">A small description</div>
            </div>
            {/* /end of Text Wrapper */}
            {/* Buttons */}
            <div className="buttonRow">
              <Link className="viewBtn" to="/">
                View
              </Link>
            </div>
            {/* /end of Buttons */}
          </div>
          {/* /end of Blog Details */}
        </div>
      </BlogDiv>
    );
  }
}

export default Blog;
