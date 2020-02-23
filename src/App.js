import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Messages from './components/Messages';
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";

import './App.css';

function App(props) {
  const { isUserCreated } = props;
  if(isUserCreated){
  }else{
  }
  return(
  <Switch>
      <Route path="/messages" component={Messages} />
      <Route path="/" component={Login} />
  </Switch>)
}

function mapStateToProps(state) {
  return {
    isUserCreated: state.auth.isUserCreated
  };
}
export default connect(mapStateToProps)(App);
