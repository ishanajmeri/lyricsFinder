import React, { Component } from 'react';
import Navbar from './components/layout/navbar';
import Index from './components/layout/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from './context';
import Lyrics from './components/tracks/lyrics';
import { Layout, Card } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;
class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <React.Fragment>
            <Layout>
              <Header>
                <Navbar />
              </Header>
              <Content>
                <Card style={{ padding: '10px 160px 10px 160px ' }}>
                  <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/lyrics/track/:id" component={Lyrics} />
                  </Switch>
                </Card>
              </Content>
              <Footer></Footer>
            </Layout>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
