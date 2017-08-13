import React from "react";
import styled from "styled-components";

const Container = styled.div`color: white;`;

const Heading = styled.h4`
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  padding-bottom: 0.25em;
  width: 85%;
  margin-bottom: .5em;
`;

const Column = styled.div.attrs({ className: "col-md-6" })`
  padding: 15px 5%;
`;

const PageInfo = () =>
  <Container>
    <div className="row">
      <Column>
        <Heading>What is Log Viewer?</Heading>
        <p>This is a </p>
      </Column>

      <Column>
        <Heading>What is this?</Heading>
        <p>It's cool!</p>
      </Column>
    </div>
  </Container>;

export default PageInfo;
