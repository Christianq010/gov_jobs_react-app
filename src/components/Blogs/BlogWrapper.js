import React from "react";
import styled from "styled-components";
import { Router, Link } from "@reach/router";
import Blog from "./Blog";

const BlogWrapperDiv = styled.div`
  /* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-row: 5 / 6;
    grid-column: 1 / -1;
    height: auto;
    padding: 1em;
    .heading {
      color: #DC2743;
      font-size: 2em;
      padding: 0.5em;
    }
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    grid-row: 5 / 6;
    grid-column: 2 / 14;
    height: auto;
    margin: 3.5em 0;
    .heading {
      color: #DC2743;
      font-size: 2.5em;
    }
  }
  .linkTo {
    padding: 1em;
    text-decoration: none;
    display: flex;
    flex-direction: row-reverse;
    color: #DC2743;
  }
`;

const Blogs = styled.div`
    /* Smartphones (portrait and landscape) ----------- */
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
  }
`;

class BlogWrapper extends React.Component {
  render() {
    return (
      <BlogWrapperDiv>
        <div className="heading">This is the blog wrapper</div>
        <Blogs>
            <Blog />
            <Blog />
            <Blog />
        </Blogs>
        <Link to="/results" class="linkTo">Go to resources &gt;</Link>
      </BlogWrapperDiv>
    );
  }
}

export default BlogWrapper;
