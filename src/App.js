import React from 'react';
import { Provider } from 'react-redux';
import Messages from './messages';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route path='/messages'  component={Messages} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
