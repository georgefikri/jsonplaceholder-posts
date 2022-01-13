import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppPage } from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppPage />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
