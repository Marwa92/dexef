import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App/index";
import { DexefProvider } from "./utils/DexefContext";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <DexefProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DexefProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
