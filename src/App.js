import React, { Component } from 'react';
import Navbar from './components/layout/navbar';
import Index from './components/layout/index';
import { Switch, Route } from 'react-router-dom';
import { Provider } from './context';
import Lyrics from './components/tracks/lyrics';
import { Layout, Card } from 'antd';
import './App.css';

const { Content, Footer } = Layout;
class App extends Component {
  render() {
    return (
      <Provider>
        <React.Fragment>
          <Navbar />
          <Content>
            <Card style={{ padding: '10px 160px 10px 160px ' }}>
              <Switch>
                <Route exact path="/" component={Index} />
                <Route path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </Card>
          </Content>
          <Footer />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
