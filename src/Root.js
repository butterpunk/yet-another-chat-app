import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { StylesProvider } from '@material-ui/core/styles';

import App from "./App";
import store from './store';

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <StylesProvider injectFirst>
          <App />
        </StylesProvider>
      </Router>
    </Provider>
  );
}

export default Root;