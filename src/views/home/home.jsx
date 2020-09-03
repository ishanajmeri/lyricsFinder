import React, { Component } from 'react';
import { Card } from 'antd';
import Tracks from '../tracks/tracks';
import FrontImages from './components/frontImages';

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <FrontImages />
        <Tracks />
      </div>
    );
  }
}

export default Home;
