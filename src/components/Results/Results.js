import React from 'react'
import styled from "styled-components";
import Result from "./Result";

const ResultsDiv = styled.div`
    display: flex;
    flex-direction: column;
`;


class Results extends React.Component {
    render() {
      return (
        <ResultsDiv>
            <Result />
            <Result />
            <Result />
            <Result />
            <Result />
        </ResultsDiv>
      );
    }
}

export default Results;