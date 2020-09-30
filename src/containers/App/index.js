import React from "react";
import { Switch, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
// import WebFont from 'webfontloader'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Dashboard from "../Dashboard";

// WebFont.load({
//   google: {
//     families: ['Open Sans', 'Helvatica Neue for IBM', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
//   },
// })

const Push = styled.div`
  height: 20vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 80vh;
  position: relative;
`;

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0px;
    padding: 0px;
  }
`;

export default function App() {
  return (
    <React.Fragment>
      <div height="100%" margin="0">
        <Wrapper>
          <Header />
          <Switch>
            <Route path="/" component={Dashboard} />
          </Switch>
          <Push />
        </Wrapper>
        <Footer />
      </div>
      <GlobalStyle />
    </React.Fragment>
  );
}
