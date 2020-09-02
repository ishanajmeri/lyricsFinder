import React, { Component } from 'react';
import { Provider } from './context';
import './App.css';
import Routes from './routes/Routes';

class App extends Component {
  render() {
    return (
      <Provider>
        <Routes />
      </Provider>
    );
  }
}

export default App;
