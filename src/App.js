import React from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Messages from './components/Messages';
import Login from "./components/Login";

import './App.css';

function App(props) {
  const { isUserCreated } = props;
  if(isUserCreated){
      return <Route path="/messages" component={Messages} />
  }else{
      return <Route path="/" component={Login} />
  }
}

function mapStateToProps(state) {
  return {
    isUserCreated: state.auth.isUserCreated
  };
}
export default connect(mapStateToProps)(App);
