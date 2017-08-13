import React, { Component } from "react";
import styled from "styled-components";

import LogTable from "./LogTable";
import Loader from "./Loader";
import PageInfo from "./PageInfo";
import Header from "./Header";
import Footer from "./Footer";

const AppContainer = styled.div.attrs({
  className: "container"
})`
  display: flex;
  flex-direction: column;
  padding: 2em 15px 4em;
`;

class App extends Component {
  state = {
    success: false,
    logs: [],
    infoIsVisible: false
  };

  componentDidMount() {
    // Load for 2s before importing log data
    setTimeout(() => {
      const { success, logs } = window.LOG_DATA;
      this.setState({
        success,
        logs: provideIds(logs)
      });
    }, 2000);
  }

  toggleInfo() {
    this.setState(s => {
      return {
        infoIsVisible: !s.infoIsVisible
      };
    });
  }

  render() {
    const { success, logs, infoIsVisible } = this.state;

    return (
      <AppContainer>
        <Header infoIsVisible={infoIsVisible} toggleInfo={() => this.toggleInfo()} />
        {infoIsVisible && <PageInfo />}
        {success ? <LogTable logs={logs} /> : <Loader />}
        <Footer />
      </AppContainer>
    );
  }
}

function provideIds(logs) {
  return logs.map(log =>
    Object.assign({}, log, { id: "_" + Math.random().toString(36).substr(2, 9) })
  );
}

export default App;
