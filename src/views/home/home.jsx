import React from 'react';
import Tracks from '../tracks/tracks';
import Artists from './components/artists';
import FrontImages from './components/frontImages';

class Home extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <FrontImages />
        <Tracks />
        <Artists />
      </div>
    );
  }
}

export default Home;
