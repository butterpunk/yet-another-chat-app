import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Messages from './components/Messages';
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";



import './App.css';

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
      <Switch>
        <ProtectedRoute
          exact
          path="/"
          component={Messages}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <Route path="/login" component={Login} />
      </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}
export default connect(mapStateToProps)(App);
