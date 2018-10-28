import React from "react";
import styled from "styled-components";

import axios from "axios";

// const API = `https://api.storyblok.com/v1/cdn/stories/367857?token=rHFBeu95Upg1QYUDypHgYQtt`;

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
  constructor(props) {
    super(props);
    this.state = {
      // story: [],
      loading: true,
    };
  }
  componentDidMount() {
    axios
      // .get(API)
      // id passed from route to request data from story 
      .get(`https://api.storyblok.com/v1/cdn/stories/${this.props.id}?token=rHFBeu95Upg1QYUDypHgYQtt`)
      // .then(response => console.log(response))
      // get our story array, check it and then change state to data we want from story
      .then(data => {
        let story;
        if (data.data.stories && data.data.stories) {
          if (Array.isArray(data.data.stories)) {
            story = data.data.stories;
          } else {
            story = [data.data.stories];
          }
        } else {
          story = [];
        }
        // console.log(data.data.story);
        this.setState({
          // story: data.data.story,
          name: data.data.story.content.title,
          title: data.data.story.content.title,
          description: data.data.story.content.description,
          deadline: data.data.story.content.deadline_date,
          img: data.data.story.content.img,
          link: data.data.story.content.link.url,
          body: data.data.story.content.body,
          id: data.data.story.id,
          loading: false
        });
      })
      .catch(err => this.setState({ error: err }));
  }
  render() {
    if (this.state.loading) {
      return <h1>Data is loading ... </h1>;
    }
    return (
      <SingleResultDiv>
        <div className="cardbox">
          <div className="cardDetails">
            <div className="headlineText">
              <div>{this.state.name}</div>
            </div>
            <div className="headlineSub">Colombo, Sri Lanka</div>
            <div className="headlineDes">{this.state.description}</div>
            <div className="bodyText">
              <p>{this.state.body}</p>
            </div>
            <div className="textRemain">
              Disclaimer - Lorem ipsum valor estudi karnasr iop kuraeti vaesti
              mo oui lorem ipsum valor estudi karnasr iop kuraeti vaesti mo oui.
            </div>
            <div className="textRemain">{this.state.deadline}</div>
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
      </SingleResultDiv>
    );
  }
}

export default SingleResult;
