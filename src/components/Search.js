import React from "react";

import styled from "styled-components";

const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2em;
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .searchBoxWrapper {
      .searchQuery {
        border-radius: 0;
        width: 12em;
        padding-left: 0.2em;
        color: rgba(117, 117, 117, 0.8);
        font-size: 22px;
        line-height: 34px;
        margin-bottom: 12px;
      }
      .submitWrapper {
        text-align: center;
        .submitBtn {
          color: #fff;
          font-size: 1em;
          width: 10em;
          line-height: 38px;
          padding: 0 10px;
          background: #d99e40ff;
          border: 1px solid transparent;
        }
      }
    }
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    .searchBoxWrapper {
      display: flex;
      flex-direction: row;
      .searchQuery {
        /* border: 3px solid #4a90e2; */
        border-radius: 0;
        width: 17em;
        /* padding-left: 44px; */
        padding-left: 0.2em;
        color: rgba(117, 117, 117, 0.8);
        font-size: 22px;
        line-height: 34px;
        margin-bottom: 12px;
      }
      .submitWrapper {
        .submitBtn {
          color: #fff;
          font-size: 1em;
          width: 10em;
          line-height: 38px;
          padding: 0 10px;
          background: #d99e40ff;
          border: 1px solid transparent;
        }
      }
    }
  }
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("The following value was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <SearchDiv>
        <form onSubmit={this.handleSubmit} className="searchBoxWrapper">
          <div>
            <input
              className="searchQuery"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Teacher"
            />
          </div>
          <div className="submitWrapper">
            <input className="submitBtn" type="submit" value="Submit" />
          </div>
        </form>
      </SearchDiv>
    );
  }
}

export default Search;
