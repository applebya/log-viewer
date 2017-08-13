import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  margin-top: 2em;
`;

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
        <p>
          This is a handy-dandy little app that takes hard-coded data (see the {"<script/>"} in page
          src below {"<title/>"}), and maps it to an orderable table!
        </p>
      </Column>

      <Column>
        <Heading>Why does it exist?</Heading>
        <p>
          <strong>Fair question!</strong> I created this app as an exercise in React, using
          styled-components built on basic bootstrap styles.
        </p>
      </Column>
    </div>
  </Container>;

export default PageInfo;
