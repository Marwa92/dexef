import React from "react";
import { createGlobalStyle } from "styled-components";
// import WebFont from 'webfontloader'
import Dashboard from "../Dashboard";

// WebFont.load({
//   google: {
//     families: ['Open Sans', 'Helvatica Neue for IBM', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
//   },
// })

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0px;
    padding: 0px;
  }
`;

export default function App() {
  return (
    <React.Fragment>
      <Dashboard />
      <GlobalStyle />
    </React.Fragment>
  );
}
