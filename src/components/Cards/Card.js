import React from "react";
import styled from "styled-components";
import { Router, Link } from "@reach/router";

const CardDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 3 / 4;
    grid-column: 1 / -1;
    height: auto;
    border: 0.8px solid #b6b6b6;
    margin: 1em;
    .cardbox {
      display: flex;
      flex-direction: column-reverse;
      padding: 2em;
    }
    .cardDetails {
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
    display: flex;
    flex-direction: row;
    border: 0.8px solid #b6b6b6;
    margin: 1em;
    .cardbox {
      display: flex;
      padding: 2.5em;
    }
    .cardDetails {
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
    .cardimgwrapper {
      display: flex;
      align-items: center;
      padding-left: 2em;
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

class Card extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      deadline: this.props.deadline,
      img: this.props.img
    }
  }
  handleButtonClick() {
    this.forceUpdate(); 
    // console.log('you clicked the listener')
  }
  render() {
    return (
      <CardDiv>
        <div className="cardbox">
          <div className="cardDetails">
            <div className="headlineText">
              <Link to={`/result/${this.state.id}`} onClick={this.handleButtonClick}> {this.state.title} </Link>
            </div>
            <div className="headlineSub">Colombo, Sri Lanka</div>
            <div className="headlineDes">{this.state.description}</div>
            <div className="textRemain">
              {" "}
              {/* Deadline date: {this.props.deadline} */}
            </div>
            <div className="buttonRow">
              <button className="downloadBtn">Download</button>
              <button className="viewBtn">View</button>
            </div>
          </div>
          <div className="cardimgwrapper">
            <div className="cardimg">
              <img src={this.state.img} alt="some title" />
            </div>
          </div>
        </div>
      </CardDiv>
    );
  }
}

export default Card;
