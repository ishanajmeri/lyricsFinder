import React, { Component } from 'react';
import Navbar from './components/layout/navbar';
import Index from './components/layout/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from './context';
import Lyrics from './components/tracks/lyrics';
import './App.css';
class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
