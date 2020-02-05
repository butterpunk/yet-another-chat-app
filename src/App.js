import React from 'react';
import { Provider } from 'react-redux';
import Messages from './messages';
import store from './store';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Messages />
      </Provider>
    </div>
  );
}

export default App;
