import React from "react";

import styled from "styled-components";

const BannerContentDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      color: #fff;
    }
`;

class BannerContent extends React.Component {
  state = {};
  render() {
    return (
      <BannerContentDiv>
        <div className="content"> {this.props.content} </div>
      </BannerContentDiv>
    );
  }
}

export default BannerContent;
